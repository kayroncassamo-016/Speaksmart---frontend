
import { NextRequest, NextResponse } from "next/server";

const COOKIE_NAME = "speaksmart_admin_session";

export async function GET(request: NextRequest) {
  const token = request.cookies.get(COOKIE_NAME)?.value;

  if (!token) {
    return NextResponse.json(
      { message: "Authentication required." },
      { status: 401 }
    );
  }

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!apiUrl) {
    return NextResponse.json(
      { message: "API URL is not configured." },
      { status: 500 }
    );
  }

  try {
    const backendResponse = await fetch(`${apiUrl}/waitlist`, {
      headers: {
        Cookie: `${COOKIE_NAME}=${token}`,
      },
      cache: "no-store",
    });

    const data = await backendResponse.json();

    return NextResponse.json(data, {
      status: backendResponse.status,
    });
  } catch {
    return NextResponse.json(
      { message: "Unable to retrieve waitlist." },
      { status: 502 }
    );
  }
}
