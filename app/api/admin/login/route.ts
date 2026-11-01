
import { NextRequest, NextResponse } from "next/server";

const COOKIE_NAME = "speaksmart_admin_session";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    if (!apiUrl) {
      return NextResponse.json(
        { message: "API URL is not configured." },
        { status: 500 }
      );
    }

    const backendResponse = await fetch(`${apiUrl}/admin/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      cache: "no-store",
    });

    const result = await backendResponse.json();

    if (!backendResponse.ok) {
      return NextResponse.json(
        { message: result.message ?? "Login failed." },
        { status: backendResponse.status }
      );
    }

    if (!result.token || !result.expiresAt) {
      return NextResponse.json(
        { message: "Invalid authentication response." },
        { status: 502 }
      );
    }

    const response = NextResponse.json({
      admin: result.admin,
      expiresAt: result.expiresAt,
    });

    response.cookies.set(COOKIE_NAME, result.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      expires: new Date(result.expiresAt),
      path: "/",
    });

    return response;
  } catch {
    return NextResponse.json(
      { message: "Unable to connect to the authentication service." },
      { status: 500 }
    );
  }
}
