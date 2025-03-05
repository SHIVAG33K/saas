"use client"

import { useState } from "react";
import { X, Layers, Users, Zap, Building } from "lucide-react";

export default function SuccessModal({ onClose }: { onClose: () => void }) {
  const [selected, setSelected] = useState("addCompany");

  return (
    <div className="fixed top-20 left-1/2 transform -translate-x-1/2 flex items-center justify-center ">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[550px]">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <Building className="w-5 h-5 text-gray-600" />
            <h2 className="text-lg font-semibold flex items-center pl-2 ">
              🎉 Congratulations on adding your company
            </h2>
          </div>
          <button onClick={onClose}>
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Options */}
        <div className="space-y-6">
          {[
            { id: "addCompany", label: "Add another company", icon: Layers },
            { id: "addTeams", label: "Add teams to the company you just added", icon: Users },
            { id: "addEmployees", label: "Add employees to the company you added", icon: Zap },
          ].map((option) => (
            <label
              key={option.id}
              className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition ${
                selected === option.id ? "border-purple-500 bg-purple-100" : "border-gray-300"
              }`}
            >
              <option.icon className="w-5 h-5 text-gray-600" />
              <span className="flex-1 text-gray-800">{option.label}</span>
              <input
                type="radio"
                name="option"
                checked={selected === option.id}
                onChange={() => setSelected(option.id)}
                className="hidden"
              />
              <div
                className={`w-5 h-5 border-2 rounded-full flex items-center justify-center ${
                  selected === option.id ? "border-purple-600" : "border-gray-400"
                }`}
              >
                {selected === option.id && <div className="w-3 h-3 bg-purple-600 rounded-full"></div>}
              </div>
            </label>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-6 border-t border-gray-300 pt-4">
        <button
            onClick={onClose}
            className="px-6 py-2 border rounded-lg text-gray-700 bg-gray-100 hover:bg-gray-200"
          >
            Cancel
          </button>
          <button className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
