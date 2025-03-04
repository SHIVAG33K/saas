

import { Search, Bell, MessageCircle } from "lucide-react";

export default function Header() {
    return(
        <div className="flex justify-between items-center bg-white p-4 w-full shadow-sm">
        <div className="flex items-center space-x-2 w-1/3">
          <Search size={18} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="w-full outline-none bg-transparent"
          />
        </div>
        <div className="flex items-center space-x-4">
          <Bell size={20} className="text-gray-500 cursor-pointer" />
          {/* <MessageCircle size={20} className="text-gray-500 cursor-pointer" /> */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-indigo-500 text-white flex items-center justify-center rounded-full">
              D
            </div>
            <span className="text-gray-700 font-medium">Drennan</span>
          </div>
        </div>
      </div>
    );
}