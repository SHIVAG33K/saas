"use client";

import { useState } from "react";
import { Search, Calendar, Edit, Trash2 } from "lucide-react";
import Header from "@/app/components/employee/header";
import EmployeesTable from "@/app/components/employee/employeeTable";
import Topbar from "@/app/components/common/topbar";

type Employee = {
  name: string;
  role: string;
  team: string;
  consultants: number;
  submissions: number;
};

const employeesData: Employee[] = [
  { name: "Ahmed Rashdan", role: "Team Lead", team: "Team one", consultants: 3, submissions: 26 },
  { name: "Ali Alhamdan", role: "Technical Recruiter", team: "Team two", consultants: 4, submissions: 20 },
  { name: "Mona Alghafar", role: "Technical Recruiter", team: "Team two", consultants: 5, submissions: 15 },
  { name: "Moustafa Adel", role: "Technical Recruiter", team: "Team two", consultants: 1, submissions: 20 },
  { name: "Jhon Neleson", role: "Technical Recruiter", team: "Sales", consultants: 2, submissions: 0 },
  { name: "Kadi Manela", role: "Technical Recruiter", team: "IT Department", consultants: 4, submissions: 1 },
];

const EmployeesPage = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const employeesPerPage = 5;

  const filteredEmployees = employeesData.filter((emp) =>
    emp.name.toLowerCase().includes(search.toLowerCase())
  );

  const paginatedEmployees = filteredEmployees.slice((page - 1) * employeesPerPage, page * employeesPerPage);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <Topbar 
        title="Employees"
        company="Infotech"
        actionButton={
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
            New Employee
          </button>
        }
      />
      
      <div className="p-6 bg-white shadow-lg rounded-lg">
        <Header search={search} setSearch={setSearch} />
        <EmployeesTable 
          employees={paginatedEmployees} 
          page={page} 
          setPage={setPage} 
          totalEmployees={filteredEmployees.length} 
          employeesPerPage={employeesPerPage} 
        />
      </div>
    </div>
  );
};

export default EmployeesPage;