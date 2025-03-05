"use client";

import { useState } from "react";
import { X, Users } from "lucide-react";

export default function AddTeamModal({
  onClose,
  onConfirm,
}: {
  onClose: () => void;
  onConfirm: () => void;
}) {
  const [formData, setFormData] = useState({
    teamName: "",
    teamLead: "",
    email: "",
    phone: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500/40 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[500px]">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-gray-600" />
            <h2 className="text-lg font-semibold">Add your Team</h2>
          </div>
          <button onClick={onClose}>
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        <p className="text-sm text-gray-500 mb-6">You can always edit this later!</p>

        {/* Form */}
        <form className="space-y-4">
          {[
            { label: "Team name*", name: "teamName", placeholder: "e.g. Team" },
            { label: "Team Lead", name: "teamLead", placeholder: "Name" },
            { label: "Team Lead email", name: "email", placeholder: "xyz@example.com" },
            { label: "Phone number*", name: "phone", placeholder: "999-999-9999" },
          ].map((field) => (
            <div key={field.name} className="flex items-center gap-4">
              <label className="w-32 text-sm font-medium">{field.label}</label>
              <input
                type="text"
                name={field.name}
                value={formData[field.name as keyof typeof formData]}
                onChange={handleChange}
                placeholder={field.placeholder}
                className="flex-1 p-2 border rounded-lg"
              />
            </div>
          ))}

          <div className="flex items-start gap-4">
            <label className="w-32 text-sm font-medium">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Write a few sentences about the company..."
              className="flex-1 p-2 border rounded-lg h-20"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-16 py-2 border rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-16 py-2 bg-indigo-500 text-white rounded-lg"
              onClick={onConfirm}
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}