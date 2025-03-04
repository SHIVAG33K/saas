import Header from "../components/layout/header";
import Sidebar from "../components/layout/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
<div className="flex h-screen">
  {/* Sidebar */}
  <Sidebar />

  {/* Main Content */}
  <div className="flex mr-4 flex-col flex-1">
    {/* Header */}
    <Header />

    {/* Page Content */}
    <main className="flex-1 overflow-auto">{children}</main>
  </div>
</div>

  );
}