import { useState } from "react";
import { Search } from "lucide-react";

interface Employee {
  name: string;
  contact: string;
  email: string;
  location: string;
  role: string;
}

interface OpenPoolTableProps {
  title?: string;
  employees: Employee[];
  teamLead: string; // Added team lead prop
}

const Teamstable: React.FC<OpenPoolTableProps> = ({ title = "Open Pool", employees, teamLead }) => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const employeesPerPage = 5;

  const filteredEmployees = employees.filter((emp) =>
    emp.name.toLowerCase().includes(search.toLowerCase())
  );

  const paginatedEmployees = filteredEmployees.slice((page - 1) * employeesPerPage, page * employeesPerPage);

  return (
    <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
      {/* Title and Team Lead */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <div className="text-gray-600">
          <span className="font-medium">Team Lead: </span>{teamLead} | {employees.length} employees
        </div>
      </div>

      {/* Search Bar */}
      <div className="mt-4 flex items-center">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search employees..."
            className="w-full px-4 py-2 pl-10 border rounded-md"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      {/* Employees Table */}
      <div className="overflow-x-auto mt-4">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              {["Name", "Contact", "Email", "Location", "Role", "Action"].map((header) => (
                <th key={header} className="px-4 py-2 text-left">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedEmployees.map((emp, index) => (
              <tr key={index} className="border-t border-gray-200">
                <td className="px-4 py-2 font-medium border-none">{emp.name}</td>
                <td className="px-4 py-2 border-none">{emp.contact}</td>
                <td className="px-4 py-2 border-none">{emp.email}</td>
                <td className="px-4 py-2 border-none">{emp.location}</td>
                <td className="px-4 py-2 border-none">
                  <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-sm">{emp.role}</span>
                </td>
                <td className="px-4 py-2 flex space-x-2 border-none">
                  <button className="bg-gray-300 w-8 h-8 rounded-md"></button>
                  <button className="bg-gray-300 w-8 h-8 rounded-md"></button>
                  <button className="bg-gray-300 w-8 h-8 rounded-md"></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-end items-center mt-4 space-x-2">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="px-3 py-1 text-gray-500 bg-gray-200 rounded-md disabled:opacity-50"
        >
          Previous
        </button>
        <span className="px-3 py-1 bg-indigo-500 text-white rounded-md">{page}</span>
        <button
          onClick={() => setPage((prev) => (filteredEmployees.length > prev * employeesPerPage ? prev + 1 : prev))}
          disabled={filteredEmployees.length <= page * employeesPerPage}
          className="px-3 py-1 text-gray-500 bg-gray-200 rounded-md disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Teamstable;
