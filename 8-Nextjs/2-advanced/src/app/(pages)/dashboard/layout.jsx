import Link from "next/link";

// @slot olarak tanımlanan sayfalar layout component'ına prop olarak gider.
export default function DashboardLayout({
  children,
  notification,
  users,
  revenue,
}) {
  return (
    <div className="p-5 flex flex-col items-center justify-center">
      <div className="flex gap-5 text-blue-500">
        <Link href="/dashboard">Dashboard Sayfası</Link>
        <Link href="/dashboard/settings">Dashboard Ayarları</Link>
      </div>

      <div className="w-full my-10">{children}</div>

      <div className="w-full  md:grid md:grid-cols-2 gap-5">
        <div className="box">
          <div className="box">{users}</div>
          <div className="box">{revenue}</div>
        </div>

        <div className="box">{notification}</div>
      </div>
    </div>
  );
}
