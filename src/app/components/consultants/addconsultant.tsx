"use client";

import { useState } from "react";

export default function AddConsultantsForm({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", education: "", experience: "", country: "",
    mobile: "", alternateContact: "", email: "", pinCode: "", city: "",
    username: "", userEmail: "", password: "", repeatPassword: "", skills: "", linkedinId: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputField = (label: string, name: keyof typeof formData, placeholder?: string, type = "text") => (
    <div>
      <label className="text-sm font-medium">{label}:</label>
      <input
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        className="w-full p-2 border rounded-md"
        placeholder={placeholder || label}
      />
    </div>
  );

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500/40 z-50">
      <div className="bg-white rounded-lg shadow-lg relative max-w-3xl w-full max-h-[80vh]">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="p-6 h-[80vh] overflow-y-auto">
          <h3 className="text-lg font-semibold text-black mb-4">New User Information</h3>

          {/* Basic Info */}
          <div className="grid grid-cols-2 gap-4">
            {inputField("First Name", "firstName")}
            {inputField("Last Name", "lastName")}
          </div>

          {inputField("Education", "education", "", "text")}
          {inputField("Experience", "experience", "", "text")}

          <div className="mt-4">
            <label className="text-sm font-medium">Country:</label>
            <select name="country" value={formData.country} onChange={handleChange} className="w-full p-2 border rounded-md">
              <option>Select Country</option>
              <option>USA</option>
              <option>India</option>
              <option>Canada</option>
            </select>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            {inputField("Mobile Number", "mobile")}
            {inputField("Alternate Contact", "alternateContact")}
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            {inputField("Email", "email", "", "email")}
            {inputField("Pin Code", "pinCode")}
          </div>

          {inputField("Town/City", "city")}

          {/* Security Section */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-black mb-4">Security</h3>

            <div className="grid grid-cols-2 gap-4">
              {inputField("User Name", "username")}
              {inputField("User Email", "userEmail", "", "email")}
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              {inputField("Password", "password", "", "password")}
              {inputField("Repeat Password", "repeatPassword", "", "password")}
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              {inputField("Skills", "skills")}
              {inputField("LinkedIn ID", "linkedinId")}
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="pt-4 mt-6 border-t border-gray-200">
            <div className="flex justify-between">
              <button className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50" onClick={onClose}>
                Cancel
              </button>
              <button className="px-6 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600" onClick={onClose}>
                Add Consultant
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}