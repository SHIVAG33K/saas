"use client";

import React from "react";

interface TopbarProps {
  title: string;
  company?: string;
  actionButton?: React.ReactNode;
}

export default function Topbar({ title, company = "Infotech", actionButton }: TopbarProps) {
  return (
    <div className="flex p-2 bg-white shadow-lg rounded-lg justify-between items-center mb-6">
      <h2 className="text-xl pl-3 font-semibold">{title}</h2>
      <div className="flex space-x-4">
        {company && (
          <select className="px-3 py-2 rounded-md text-gray-600">
            <option>Company : {company}</option>
          </select>
        )}
        {actionButton}
      </div>
    </div>
  );
}