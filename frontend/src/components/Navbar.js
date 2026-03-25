import { Bell, User } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center bg-white shadow px-6 py-4 rounded-xl mb-6">
      
      {/* Left Section */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Hospital Management System
        </h1>
        <p className="text-sm text-gray-500">
          Welcome back, Admin 👋
        </p>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        
        {/* Search */}
        <input
          type="text"
          placeholder="Search..."
          className="border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Notification Icon */}
        <div className="relative cursor-pointer">
          <Bell size={22} className="text-gray-600" />
          <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
            3
          </span>
        </div>

        {/* Profile */}
        <div className="flex items-center gap-2 cursor-pointer">
          <User className="text-gray-700" />
          <span className="font-medium text-gray-700">Admin</span>
        </div>

      </div>
    </div>
  );
}