
import { NextRequest, NextResponse } from "next/server";

const COOKIE_NAME = "speaksmart_admin_session";

export async function POST(request: NextRequest) {
  const token = request.cookies.get(COOKIE_NAME)?.value;

  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    if (token && apiUrl) {
      await fetch(`${apiUrl}/admin/logout`, {
        method: "POST",
        headers: {
          Cookie: `${COOKIE_NAME}=${token}`,
        },
        cache: "no-store",
      });
    }

    const response = NextResponse.json({
      message: "Logged out successfully.",
    });

    response.cookies.delete(COOKIE_NAME);

    return response;
  } catch {
    const response = NextResponse.json(
      { message: "Logged out locally." },
      { status: 200 }
    );

    response.cookies.delete(COOKIE_NAME);

    return response;
  }
}
