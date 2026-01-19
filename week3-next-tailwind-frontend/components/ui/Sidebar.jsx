export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-gray-500 shadow-md p-4">
      <nav className="space-y-4">
        <p className="p-2 rounded cursor-pointer hover:bg-gray-200 font-medium">
          Home
        </p>
        <p className="p-2 rounded cursor-pointer hover:bg-gray-200 font-medium">
          Analytics
        </p>
        <p className="p-2 rounded cursor-pointer hover:bg-gray-200 font-medium">
          Settings
        </p>

      </nav>
    </aside>
  );
}
