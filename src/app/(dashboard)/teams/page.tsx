"use client";

import { useState } from "react";
import OpenPoolTable from "@/app/components/teams/openpool";
import Teamstable from "@/app/components/teams/team";

const TeamsPage = () => {
  const [search, setSearch] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("Infotech");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const companies = ["Infotech", "TechSolutions", "GlobalTech", "InnovateX"];

  const employees = [
    {
      name: "Lynn Grant",
      contact: "+27 7363 456 989",
      email: "lynngrant@gmail.com",
      location: "Chicago",
      role: "Member",
    },
    {
      name: "John Doe",
      contact: "+44 7934 123 456",
      email: "johndoe@email.com",
      location: "London",
      role: "Manager",
    },
    {
      name: "Sarah Brown",
      contact: "+1 234 567 890",
      email: "sarahbrown@email.com",
      location: "New York",
      role: "Admin",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold mr-4">Teams</h1>
          <div className="text-gray-500 flex items-center">
            <span className="mr-1">Company:</span>
            <div className="relative inline-block">
              <button 
                className="flex items-center font-bold text-purple-700 px-2 py-1 rounded hover:bg-purple-50"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                {selectedCompany} 
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 ml-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isDropdownOpen && (
                <div className="absolute z-10 mt-1 bg-white shadow-lg rounded-md py-1 w-full min-w-[160px] border border-purple-100">
                  {companies.map((company) => (
                    <div 
                      key={company}
                      className={`px-4 py-2 cursor-pointer ${selectedCompany === company ? 'bg-purple-100 text-purple-700' : 'hover:bg-purple-50'}`}
                      onClick={() => {
                        setSelectedCompany(company);
                        setIsDropdownOpen(false);
                      }}
                    >
                      {company}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <button className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition-colors">
          New Team
        </button>
      </div>
      
      {/* Stats Section */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        {[
          { count: 2, label: "Number of Teams" },
          { count: 16, label: "Number of Employees" },
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"
          >
            <div className="relative w-16 h-16 flex items-center justify-center">
              <span className="text-xl font-bold text-purple-600">
                {stat.count}
              </span>
            </div>
            <p className="text-gray-600 mt-2">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Open Pool Table */}
      <OpenPoolTable title="Open Pool" employees={employees} />
      <Teamstable title="Team" employees={employees} teamLead="karthik" />
    </div>
  );
};

export default TeamsPage;