import { notFound } from "next/navigation";
import { isAdminAuthenticated } from "@/app/lib/adminAuth";
import WaitlistDashboard from "@/app/admin/waitlist/WaitlistDashboard";

export const dynamic = "force-dynamic";

export default async function PrivateAdminPage() {
  const isAuthenticated = await isAdminAuthenticated();

  if (!isAuthenticated) {
    notFound();
  }

  return <WaitlistDashboard />;
}