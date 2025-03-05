"use client";

import { useState } from "react";
import OpenPoolTable from "@/app/components/teams/openpool";
import Teamstable from "@/app/components/teams/team";
import Topbar from "@/app/components/common/topbar";
import AddTeamModal from "@/app/components/teams/AddTeamModal";

const TeamsPage = () => {

  const [showAddTeam, setShowAddTeam] = useState(false);

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
            <Topbar 
        title="Teams"
        company="Infotech"
        actionButton={
          <button className="bg-indigo-500 text-white px-4 py-2 rounded-md" 
          onClick={() => setShowAddTeam(true)}>
            New Team
          </button>
        }
      />

      {showAddTeam && (
        <AddTeamModal
          onClose={() => setShowAddTeam(false)}
          onConfirm={() => {
            setShowAddTeam(false);
            // Handle form submission logic here
          }}
        />
      )}

      {/* Open Pool Table */}
      <OpenPoolTable title="Open Pool" employees={employees} />
      <Teamstable title="Team" employees={employees} teamLead="karthik" />
    </div>
  );
};

export default TeamsPage;