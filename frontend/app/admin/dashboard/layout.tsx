import AdminSidebar from "../../Components/SidebarAdmin"; // Adjust path if needed

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Main container with gradient background to enhance the glassmorphism effect
    <div className="bg-gradient-to-br from-gray-900 via-slate-900 to-black min-h-screen text-slate-100 flex">
      <AdminSidebar />
      {/* Main content area with responsive margin and padding */}
      <main className="flex-1 ml-0 md:ml-64 min-h-screen overflow-y-auto scroll-smooth">
        {/* Responsive padding for different screen sizes */}
        <div className="p-4 sm:p-6 lg:p-8">{children}</div>
      </main>
    </div>
  );
}
