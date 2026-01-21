import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-gray-500 shadow-md p-4">
      <nav className="space-y-4">
        
        <Link
          href="/dashboard"
          className="block p-2 rounded font-medium text-white hover:bg-gray-200 hover:text-black"
        >
          Dashboard
        </Link>

        <Link
          href="/dashboard/profile"
          className="block p-2 rounded font-medium text-white hover:bg-gray-200 hover:text-black"
        >
          Profile
        </Link>

        <Link
          href="/about"
          className="block p-2 rounded font-medium text-white hover:bg-gray-200 hover:text-black"
        >
          About
        </Link>

      </nav>
    </aside>
  );
}
