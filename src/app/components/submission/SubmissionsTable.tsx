import { Info, Edit, Trash2 } from "lucide-react";

const statusColors: Record<string, string> = {
  "Submitted": "bg-blue-200 text-blue-700",
  "Failed": "bg-red-200 text-red-700",
  "Second Round": "bg-yellow-200 text-yellow-700",
  "Offer Stage": "bg-gray-200 text-gray-700",
  "First Round": "bg-indigo-200 text-indigo-700"
};

interface Submission {
  id: string;
  employee: string;
  role: string;
  team: string;
  dateUpdated: string;
  status: keyof typeof statusColors;
  vendorName: string;
  vendorCompany: string;
}

interface SubmissionsTableProps {
  submissions: Submission[];
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  total: number;
  perPage: number;
}

const SubmissionsTable: React.FC<SubmissionsTableProps> = ({ submissions, page, setPage, total, perPage }) => (
  <div>
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-600 text-sm border-b">
            {["ID", "Employee", "Role", "Team", "Last Updated", "Status", "Vendor Name", "Vendor Company", "Actions"].map(header => (
              <th key={header} className="px-4 py-2 font-medium">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {submissions.map((submission, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="px-4 py-3 font-medium">{submission.id}</td>
              <td className="px-4 py-3 text-gray-600">{submission.employee}</td>
              <td className="px-4 py-3 text-gray-600">{submission.role}</td>
              <td className="px-4 py-3 text-gray-600">{submission.team}</td>
              <td className="px-4 py-3 text-gray-600">{submission.dateUpdated}</td>
              <td className="px-4 py-3">
                <span className={`px-3 py-1 rounded-md text-xs ${statusColors[submission.status]}`}>{submission.status}</span>
              </td>
              <td className="px-4 py-3 text-gray-600">{submission.vendorName}</td>
              <td className="px-4 py-3 text-gray-600">{submission.vendorCompany}</td>
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
    <div className="flex justify-between items-center mt-6 border-t pt-4">
      <span>Page {page} of {Math.ceil(total / perPage)}</span>
      <div className="space-x-2">
        <button
          onClick={() => setPage(prev => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="px-3 py-1 text-gray-500 bg-gray-200 rounded-md disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={() => setPage(prev => (total > prev * perPage ? prev + 1 : prev))}
          disabled={total <= page * perPage}
          className="px-3 py-1 text-gray-500 bg-gray-200 rounded-md disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  </div>
);

export default SubmissionsTable;
