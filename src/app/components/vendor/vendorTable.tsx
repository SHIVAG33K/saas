import React from "react";

interface Vendor {
  name: string;
  org: string;
  email: string;
  phone: string;
}

interface VendorTableProps {
  vendors: Vendor[];
}

const VendorTable: React.FC<VendorTableProps> = ({ vendors }) => {
  return (
    <table className="min-w-full mt-4">
      <thead className="bg-gray-200 text-left">
        <tr>
          <th className="p-2">Vendor Name</th>
          <th className="p-2">Vendor Organization</th>
          <th className="p-2">Vendor Email</th>
          <th className="p-2">Vendor Phone</th>
        </tr>
      </thead>
      <tbody>
        {vendors.map((vendor, index) => (
          <tr key={index} className="hover:bg-gray-100">
            <td className="p-2">{vendor.name}</td>
            <td className="p-2">{vendor.org}</td>
            <td className="p-2">{vendor.email}</td>
            <td className="p-2">{vendor.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default VendorTable;
