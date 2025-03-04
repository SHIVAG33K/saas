

import { Search, Calendar, Info, Edit, Trash2, Filter } from "lucide-react";


const statusColors = {
    "On boarded": "bg-blue-200 text-blue-700",
    "Hotlisted": "bg-red-200 text-red-700",
    "Interviewing": "bg-yellow-200 text-yellow-700",
    "Offer stage": "bg-gray-200 text-gray-700",
    "Paused": "bg-indigo-200 text-indigo-700",
    "Placed": "bg-green-200 text-green-700",
  };
  


interface Consultant {
  name: string;
  role: string;
  team: string;
  assignedTo: string;
  status: keyof typeof statusColors;
  submissions: number;
  interviews: number;
}

interface ConsultantsTableProps {
    consultants: Consultant[];
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    total: number;
    perPage: number;
  }

const ConsultantsTable: React.FC<ConsultantsTableProps> = ({ consultants, page, setPage, total, perPage }) => (
    <div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-600  text-sm border-b">
              {["Consultant", "Role", "Team", "Assigned to", "Status", "Number of Submissions", "Number of Interviews", "Actions"].map(header => (
                <th key={header} className="px-4 py-2 font-medium">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {consultants.map((c, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="px-4 py-3 font-medium">{c.name}</td>
                <td className="px-4 py-3 text-gray-600">{c.role}</td>
                <td className="px-4 py-3 text-gray-600">{c.team}</td>
                <td className="px-4 py-3 text-gray-600">{c.assignedTo}</td>
                <td className="px-4 py-3">
                  <span className={`px-3 py-1 rounded-md text-xs ${statusColors[c.status]}`}>{c.status}</span>
                </td>
                <td className="px-4 py-3 text-center text-gray-600">{c.submissions}</td>
                <td className="px-4 py-3 text-center text-gray-600">{c.interviews}</td>
                <td className="px-4 py-3 flex space-x-2">
                  <button className="p-2 bg-gray-200 rounded-md"><Info size={16} /></button>
                  <button className="p-2 bg-blue-500 text-white rounded-md"><Edit size={16} /></button>
                  <button className="p-2 bg-blue-500 text-white rounded-md"><Trash2 size={16} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex  justify-between items-center mt-6 border-t pt-4">
        <span>Page {page} of {Math.ceil(total / perPage)}</span>
        <div className="space-x-2">
          <button
            onClick={() => setPage((prev: number) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className="px-3 py-1 text-gray-500 bg-gray-200 rounded-md disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={() => setPage((prev) => (total > prev * perPage ? prev + 1 : prev))}
            disabled={total <= page * perPage}
            className="px-3 py-1 text-gray-500 bg-gray-200 rounded-md disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );


export default ConsultantsTable;