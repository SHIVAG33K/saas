"use client";

import SubmissionsTable from "@/app/components/submission/SubmissionsTable";
import { useState, useEffect } from "react";

const submissionsData = [
  {
    id: "2341421",
    employee: "Ahmed Rashdan",
    role: "Software Developer",
    team: "Team One",
    dateUpdated: "29 July 2023",
    status: "Submitted",
    vendorName: "Mona Alghafar",
    vendorCompany: "XYZ Corp",
  },
  {
    id: "3411421",
    employee: "Ali Alhamdan",
    role: "Senior Executive",
    team: "Team Two",
    dateUpdated: "29 July 2023",
    status: "Failed",
    vendorName: "sandeep",
    vendorCompany: "RBAC Corp",
  },
  {
    id: "2341121",
    employee: "Mona Alghafar",
    role: "Senior Manager",
    team: "Team One",
    dateUpdated: "29 July 2023",
    status: "Second Round",
    vendorName: "revanth",
    vendorCompany: "Ighafar Comp",
  },
  {
    id: "2341421",
    employee: "Moustafa Adel",
    role: "QA/BA",
    team: "Team Two",
    dateUpdated: "29 July 2023",
    status: "Offer Stage",
    vendorName: "sreekar",
    vendorCompany: "XYZ Corp",
  },
  {
    id: "2341421",
    employee: "Jhon Neleson",
    role: "Director",
    team: "Sales",
    dateUpdated: "29 July 2023",
    status: "First Round",
    vendorName: "rekha",
    vendorCompany: "RBAC Corp",
  },
  {
    id: "2341421",
    employee: "Kadi Manela",
    role: "System Coordinator",
    team: "IT Department",
    dateUpdated: "29 July 2023",
    status: "Second Round",
    vendorName: "Mona Alghafar",
    vendorCompany: "XYZ Corp",
  },
];

export default function SubmissionsPage() {
  const [page, setPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(5);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredSubmissions = submissionsData.filter(submission =>
    submission.employee.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const total = filteredSubmissions.length;
  const paginatedSubmissions = filteredSubmissions.slice((page - 1) * perPage, page * perPage);

  useEffect(() => {
    setPage(1); // Reset to first page when search query changes
  }, [searchQuery]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Submissions</h1>

      <input
        type="text"
        placeholder="Search by Employee"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        className="border p-2 mt-2 w-full"
      />

      <SubmissionsTable 
        submissions={paginatedSubmissions} 
        page={page} 
        setPage={setPage} 
        total={total} 
        perPage={perPage} 
      />

    </div>
  );
}
