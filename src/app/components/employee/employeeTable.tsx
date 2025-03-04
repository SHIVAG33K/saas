import { Search, Calendar, Edit, Trash2 } from "lucide-react";

type Employee = {
  name: string;
  role: string;
  team: string;
  consultants: number;
  submissions: number;
};

type EmployeesTableProps = {
    employees: Employee[];
    page: number;
    setPage: (value: number) => void;
    totalEmployees: number;
    employeesPerPage: number;
  };
  
const EmployeesTable = ({ employees, page, setPage, totalEmployees, employeesPerPage }: EmployeesTableProps) => (
    <div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-600 text-sm border-b">
              {["Employee", "Role", "Team", "Consultants Assigned", "Number of Submissions", "Actions"].map(header => (
                <th key={header} className="px-4 py-2 font-medium">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {employees.map((emp, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="px-4 py-3 font-medium">{emp.name}</td>
                <td className="px-4 py-3 text-gray-600">{emp.role}</td>
                <td className="px-4 py-3 text-gray-600">{emp.team}</td>
                <td className="px-4 py-3 text-gray-600">{emp.consultants}</td>
                <td className="px-4 py-3 text-gray-600">{emp.submissions}</td>
                <td className="px-4 py-3 flex space-x-2">
                  <button className="p-2 bg-blue-500 text-white rounded-md"><Edit size={16} /></button>
                  <button className="p-2 bg-blue-500 text-white rounded-md"><Trash2 size={16} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  
      {/* Pagination */}
      <div className="flex justify-end items-center mt-6 border-t pt-4 space-x-2">
        <button
          onClick={() => setPage(Math.max(page - 1, 1))}
          disabled={page === 1}
          className="px-3 py-1 text-gray-500 bg-gray-200 rounded-md disabled:opacity-50"
        >
          Previous
        </button>
        <span className="px-3 py-1 bg-purple-500 text-white rounded-md">{page}</span>
        <button
          onClick={() => setPage(totalEmployees > page * employeesPerPage ? page + 1 : page)}
          disabled={totalEmployees <= page * employeesPerPage}
          className="px-3 py-1 text-gray-500 bg-gray-200 rounded-md disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );

  export default EmployeesTable;
