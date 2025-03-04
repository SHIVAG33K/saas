"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { LayoutGrid, Building, Users, User, Briefcase, Package, FileText, LogOut, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname(); // Get current path

  const menuItems = [
    { name: "Dashboard", icon: LayoutGrid, path: "/dashboard" },
    { name: "Companies", icon: Building, path: "/companies" },
    { name: "Teams", icon: Users, path: "/teams" },
    { name: "Employees", icon: User, path: "/employees" },
    { name: "Consultants", icon: Briefcase, path: "/consultants" },
    { name: "Vendors", icon: Package, path: "/vendors" },
    { name: "Submission", icon: FileText, path: "/submission" },
  ];

  return (
    <div className={`h-screen bg-white shadow-md flex flex-col p-4 transition-all duration-300 ${isCollapsed ? "w-20" : "w-64"}`}>
      {/* Logo & Toggle Button */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-indigo-500 text-white flex items-center justify-center rounded-full text-sm font-bold">
            S
          </div>
          {!isCollapsed && <span className="text-lg font-semibold text-gray-700">StaffITEasy</span>}
        </div>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1 ml-2 mr-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
        >
          {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      {/* Menu Items */}
      <nav className="flex mt-10 flex-col space-y-4">
        {menuItems.map(({ name, icon: Icon, path }) => (
          <Link key={name} href={path}>
            <button
              className={`flex items-center space-x-3 p-2 rounded-lg transition w-full ${
                pathname === path ? "bg-indigo-200 text-indigo-600 font-medium" : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <Icon size={20} />
              {!isCollapsed && <span>{name}</span>}
            </button>
          </Link>
        ))}
      </nav>

      {/* Logout */}
      <div className="mt-auto flex items-center space-x-3 text-gray-600 hover:text-red-500 cursor-pointer">
        <LogOut size={20} />
        {!isCollapsed && <span>Logout</span>}
      </div>
    </div>
  );
};

export default Sidebar;
