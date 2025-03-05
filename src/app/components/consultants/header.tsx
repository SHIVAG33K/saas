
import { Search, Calendar, Info, Edit, Trash2, Filter } from "lucide-react";

interface HeaderProps {
  search: string;
  setSearch: (value: string) => void;
}

const Header: React.FC<HeaderProps> = ({ search, setSearch }) => (
  <div className="flex justify-between items-center mb-4 border-b pb-4">
    <h2 className="text-xl font-semibold">Consultants</h2>
    <div className="flex space-x-2">
      <div className="relative">
        <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Quick Search..."
          className="w-full px-4 py-2 pl-10 border rounded-md"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <button className="flex items-center px-4 py-2 border rounded-md text-gray-500">
        <Calendar size={18} className="mr-2" /> 29 July 2023
      </button>
      <button className="px-4 py-2 bg-indigo-500 text-white rounded-md flex items-center">
        <Filter size={18} className="mr-2" /> Filter
      </button>
    </div>
  </div>
);

export default Header;