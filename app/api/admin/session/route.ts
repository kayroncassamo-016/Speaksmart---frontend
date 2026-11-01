
import { NextRequest, NextResponse } from "next/server";

const COOKIE_NAME = "speaksmart_admin_session";

export async function GET(request: NextRequest) {
  const token = request.cookies.get(COOKIE_NAME)?.value;

  if (!token) {
    return NextResponse.json(
      { authenticated: false },
      { status: 401 }
    );
  }

  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    if (!apiUrl) {
      return NextResponse.json(
        { message: "API URL is not configured." },
        { status: 500 }
      );
    }

    const backendResponse = await fetch(`${apiUrl}/admin/session`, {
      headers: {
        Cookie: `${COOKIE_NAME}=${token}`,
      },
      cache: "no-store",
    });

    if (!backendResponse.ok) {
      const response = NextResponse.json(
        { authenticated: false },
        { status: 401 }
      );

      response.cookies.delete(COOKIE_NAME);
      return response;
    }

    const result = await backendResponse.json();

    return NextResponse.json(result);
  } catch {
    return NextResponse.json(
      { message: "Unable to verify session." },
      { status: 500 }
    );
  }
}
