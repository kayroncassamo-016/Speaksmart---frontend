
import "server-only";
import { cookies } from "next/headers";

const COOKIE_NAME = "speaksmart_admin_session";

export async function isAdminAuthenticated(): Promise<boolean> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME)?.value;

    if (!token) return false;

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    if (!apiUrl) return false;

    const response = await fetch(`${apiUrl}/admin/session`, {
      method: "GET",
      headers: {
        Cookie: `${COOKIE_NAME}=${token}`,
      },
      cache: "no-store",
    });

    return response.ok;
  } catch {
    return false;
  }
}
