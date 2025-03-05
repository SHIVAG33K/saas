"use client";

import { useState } from "react";

export default function AddEmployeeForm(  {onClose}: {
    onClose: () => void}) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    teamName: "",
    country: "",
    mobile: "",
    alternateContact: "",
    email: "",
    pinCode: "",
    city: "",
    username: "",
    userEmail: "",
    password: "",
    repeatPassword: "",
    userRole: "",
    linkedinId: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className=" p-6 rounded-md">
        <h3 className="text-lg font-semibold text-black  mb-4">
          New User Information
        </h3>

        {/* Row 1 - First & Last Name */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium">First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              placeholder="First Name"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              placeholder="Last Name"
            />
          </div>
        </div>

        {/* Company & Team Name */}
        <div className="mt-4">
          <label className="text-sm font-medium">Company Name:</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            placeholder="Company Name"
          />
        </div>

        <div className="mt-4">
          <label className="text-sm font-medium">Team Name:</label>
          <input
            type="text"
            name="teamName"
            value={formData.teamName}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            placeholder="Team Name"
          />
        </div>

        {/* Country */}
        <div className="mt-4">
          <label className="text-sm font-medium">Country:</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          >
            <option>Select Country</option>
            <option>USA</option>
            <option>India</option>
            <option>Canada</option>
          </select>
        </div>

        {/* Mobile & Alternate Contact */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="text-sm font-medium">Mobile Number:</label>
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              placeholder="Mobile Number"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Alternate Contact:</label>
            <input
              type="text"
              name="alternateContact"
              value={formData.alternateContact}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              placeholder="Alternate Contact"
            />
          </div>
        </div>

        {/* Email & Pin Code */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="text-sm font-medium">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              placeholder="Email"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Pin Code:</label>
            <input
              type="text"
              name="pinCode"
              value={formData.pinCode}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              placeholder="Pin Code"
            />
          </div>
        </div>

        {/* Town/City */}
        <div className="mt-4">
          <label className="text-sm font-medium">Town/City:</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            placeholder="Town/City"
          />
        </div>

        {/* Security Section */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-black mb-4">Security</h3>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">User Name:</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                placeholder="User Name"
              />
            </div>
            <div>
              <label className="text-sm font-medium">User Email:</label>
              <input
                type="email"
                name="userEmail"
                value={formData.userEmail}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                placeholder="User Email"
              />
            </div>
          </div>

          {/* Password & Repeat Password */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label className="text-sm font-medium">Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                placeholder="Password"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Repeat Password:</label>
              <input
                type="password"
                name="repeatPassword"
                value={formData.repeatPassword}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                placeholder="Repeat Password"
              />
            </div>
          </div>

          {/* User Role & LinkedIn ID */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label className="text-sm font-medium">User Role:</label>
              <input
                type="text"
                name="userRole"
                value={formData.userRole}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                placeholder="User Role"
              />
            </div>
            <div>
              <label className="text-sm font-medium">LinkedIn ID:</label>
              <input
                type="text"
                name="linkedinId"
                value={formData.linkedinId}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                placeholder="LinkedIn ID"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6 text-right">
            <button className="px-6 py-2 bg-indigo-500 text-white rounded-md"
            onClick={onClose}>
              Add employee
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
