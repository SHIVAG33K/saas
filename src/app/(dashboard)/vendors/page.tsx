"use client";

import VendorTable from "@/app/components/vendor/vendorTable";
import { useState, useEffect } from "react";

const vendorsData = [
  { name: "Aditi", org: "Aditi", email: "aditi@aditiorg.org", phone: "9745643233" },
  { name: "apexstaffing", org: "apexstaff", email: "apexsystem@gmail.com", phone: "3854745548" },
  { name: "compunnel", org: "compunnel", email: "compunnel@compunnel", phone: "654846458" },
  { name: "damn", org: "damn", email: "damn@damn.org", phone: "4684768634" },
  { name: "epic consulting", org: "epic consulting", email: "epic@epic", phone: "588798686" },
  { name: "Insight Global", org: "insightglobal", email: "insight@gmail", phone: "4547584558" },
  { name: "Mastech", org: "Mastech", email: "mastech@mastech.com", phone: "9465854983" },
  { name: "test", org: "test", email: "test@maryland", phone: "9450596945" },
];

export default function VendorsPage() {
  const [page, setPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(5);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredVendors = vendorsData.filter(vendor =>
    vendor.org.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const total = filteredVendors.length;
  const paginatedVendors = filteredVendors.slice((page - 1) * perPage, page * perPage);

  useEffect(() => {
    setPage(1); 
  }, [searchQuery]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Vendor List</h1>

      <input
        type="text"
        placeholder="Search by organization"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        className="border p-2 mt-2 w-full"
      />

      <VendorTable vendors={paginatedVendors} />

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => setPage(prev => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="px-3 py-1 text-gray-500 bg-gray-200 rounded-md disabled:opacity-50"
        >
          Previous
        </button>

        <span>
          Page {page} of {Math.ceil(total / perPage)}
        </span>

        <button
          onClick={() => setPage(prev => (total > prev * perPage ? prev + 1 : prev))}
          disabled={total <= page * perPage}
          className="px-3 py-1 text-gray-500 bg-gray-200 rounded-md disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
