"use client";

import Topbar from "@/app/components/common/topbar";
import Header from "@/app/components/consultants/header";
import ConsultantsTable from "@/app/components/consultants/table";
import { useState } from "react";

const consultantsData = [
  { name: "Ahmed Rashdan", role: "Software Developer", team: "Team one", assignedTo: "revanth", status: "On boarded" as const, submissions: 5, interviews: 1 },
  { name: "Ali Alhamdan", role: "Senior Executive", team: "Team two", assignedTo: "Santhosh", status: "Hotlisted" as const, submissions: 6, interviews: 0 },
  { name: "Mona Alghafar", role: "Senior Manager", team: "Satthwik", assignedTo: "Satthwik", status: "Interviewing" as const, submissions: 3, interviews: 2 },
  { name: "Moustafa Adel", role: "QA/BA", team: "Team two", assignedTo: "revanthi", status: "Offer stage" as const, submissions: 2, interviews: 0 },
  { name: "Jhon Neleson", role: "Director", team: "Sales", assignedTo: "Chandra", status: "Paused" as const, submissions: 1, interviews: 0 },
  { name: "Kadi Manela", role: "System coordinator", team: "IT Department", assignedTo: "shekar", status: "Placed" as const, submissions: 0, interviews: 0 },
];




const ConsultantsPage = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState<number>(1);
  const perPage = 5;

  const filteredConsultants = consultantsData.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );
  const paginatedConsultants = filteredConsultants.slice((page - 1) * perPage, page * perPage);

  return (
  <div className="p-6 bg-gray-100 min-h-screen">
          <Topbar 
        title="Consultants"
        company="Infotech"
        actionButton={
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
            New Consultant
          </button>
        }
      />
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <Header search={search} setSearch={setSearch} />
      <ConsultantsTable consultants={paginatedConsultants} page={page} setPage={setPage} total={filteredConsultants.length} perPage={perPage} />
    </div>
  </div>
  );
};

export default ConsultantsPage;
