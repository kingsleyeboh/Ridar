"use client";
import React, { useState } from "react";

const AdvertiserListPage = () => {
  const [advertisers, setAdvertisers] = useState([
    { id: 1, name: "ABC Nig. Ltd", email: "contact@abcng.com", status: "Active" },
    { id: 2, name: "Shama Furniture Solutions", email: "info@shamasolutions.com", status: "Inactive" },
    { id: 3, name: "Vammeh Foods", email: "service@vammeh.com", status: "Active" },
  ]);

  const updateStatus = (id, newStatus) => {
    setAdvertisers((prevAdvertisers) =>
      prevAdvertisers.map((advertiser) =>
        advertiser.id === id ? { ...advertiser, status: newStatus } : advertiser
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="bg-white shadow-md py-4 px-6">
        <h1 className="text-2xl font-bold">Advertiser List</h1>
      </header>
      <main className="mt-6 bg-white p-6 rounded-md shadow-md">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Status</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {advertisers.map((advertiser) => (
              <tr key={advertiser.id}>
                <td className="border px-4 py-2">{advertiser.name}</td>
                <td className="border px-4 py-2">{advertiser.email}</td>
                <td className="border px-4 py-2">{advertiser.status}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() =>
                      updateStatus(advertiser.id, advertiser.status === "Active" ? "Inactive" : "Active")
                    }
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                  >
                    Toggle Status
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

         {/* Easy links */}
        <div className="mt-6">

          <a
            href="/advertisers"
            className="text-blue-500 hover:underline mr-4"
          >
            Go to Advertisers Page
            </a>
            
          <a
            href="/advertisers/view"
            className="text-blue-500 hover:underline"
          >
            Go to Advertiser Details Page
          </a>
        </div>

      </main>
    </div>
  );
};

export default AdvertiserListPage;
