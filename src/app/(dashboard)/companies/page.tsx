"use client";

import { PlusCircle } from "lucide-react";

const CompaniesPage = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
        {/* Top bar Section */}
        <div className="text-2xl mb-6 " >
            <div className="font-bold">Companies</div>
        </div>

      {/* Top Stats Section */}
      <div className="grid grid-cols-3 gap-4">
        {["Companies", "Teams", "Employees"].map((label, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm"
          >
            <div>
              <p className="text-gray-500 text-sm">Number of {label}</p>
              <h2 className="text-2xl font-bold">0</h2>
            </div>
            <button className="bg-purple-500 text-white px-4 py-2 rounded-md flex items-center gap-1">
              <PlusCircle size={16} /> Add
            </button>
          </div>
        ))}
      </div>

      {/* Graphs and Reports Section */}
      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm col-span-2 h-64">
          <h3 className="font-medium">Number of Submissions</h3>
          <p className="text-gray-500 text-sm">(Graph Placeholder)</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm h-64">
          <h3 className="font-medium">Employer Relevant Ratios</h3>
          <p className="text-gray-500 text-sm">(Graph Placeholder)</p>
        </div>
      </div>

      {/* Additional Stats Section */}
      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm h-64">
          <h3 className="font-medium">Employer Relevant Ratios</h3>
          <p className="text-gray-500 text-sm">(Graph Placeholder)</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm h-64"></div>
        <div className="bg-white p-4 rounded-lg shadow-sm h-64"></div>
      </div>
    </div>
  );
};

export default CompaniesPage;
