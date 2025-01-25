"use client";
import React, { useState } from "react";

export default function AddCampaign() {

  // State to handle form inputs
  const [formData, setFormData] = useState({
    campaignName: "",
    companyName: "",
    rcNumber: "",
    CAC_Other: null, // File upload for registration documents
    additionalDocs: null, // File upload for additional docs
  });

  // State to handle submission feedback
  const [submissionStatus, setSubmissionStatus] = useState("");

  // To handle form input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  // To handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // this will simulate API submission
    setSubmissionStatus("Your campaign has been submitted for review. You will receive feedback within 24 hours.");

    // To log formData for debugging (to be remove in production)
    console.log(formData);
  };

  return (
    <div className="p-20">

      {/* Page Header */}
      <h1 className="text-xl font-bold mb-4 text-center">Add New Campaign</h1>

      {/* Campaign Submission Form */}
      <form
        className="space-y-4 max-w-lg mx-auto p-4 border rounded-lg shadow-sm"
        onSubmit={handleSubmit}
      >
        {/* Campaign Name */}
        <div>
          <label className="block font-medium mb-1">Campaign Name</label>
          <input
            type="text"
            name="campaignName"
            className="w-full p-2 border rounded"
            placeholder="Enter campaign name"
            value={formData.campaignName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Company Name */}
        <div>
          <label className="block font-medium mb-1">Company Name</label>
          <input
            type="text"
            name="companyName"
            className="w-full p-2 border rounded"
            placeholder="Enter company name"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
        </div>

        {/* RC Number */}
        <div>
          <label className="block font-medium mb-1">RC Number</label>
          <input
            type="text"
            name="rcNumber"
            className="w-full p-2 border rounded"
            placeholder="Enter RC number"
            value={formData.rcNumber}
            onChange={handleChange}
            required
          />
        </div>

        {/* Certification Upload */}
        <div>
          <label className="block mb-1 font-semibold">CAC or other Registration Documents</label>
          <input
            type="file"
            name="certification"
            className="w-full p-2"
            onChange={handleChange}
            required
          />
        </div>

        {/* Additional Documents Upload */}
        <div>
          <label className="block mb-1 font-semibold">Additional Documents</label>
          <input
            type="file"
            name="additionalDocs"
            className="w-full p-2"
            onChange={handleChange}
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded font-medium hover:bg-blue-600"
        >
          Submit Campaign
        </button>
      </form>

      {/* Submission Status */}
      {submissionStatus && (
        <div className="mt-4 p-4 bg-green-100 text-green-700 border rounded-lg">
          {submissionStatus}
        </div>
      )}
    </div>
  );
}
