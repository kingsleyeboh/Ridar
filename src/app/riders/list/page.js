"use client";
import React, { useState } from "react";

const RiderListPage = () => {
  const [riders, setRiders] = useState([
    { id: 1, name: "Ahmed Ike", vehicle: "Keke - AB123CD", status: "Active" },
    { id: 2, name: "Bode Musa", vehicle: "Keke - XY456EF", status: "Inactive" },
    { id: 3, name: "Okon Johnson", vehicle: "Keke - GH789IJ", status: "Active" },
  ]);

  const updateStatus = (id, newStatus) => {
    setRiders((prevRiders) =>
      prevRiders.map((rider) =>
        rider.id === id ? { ...rider, status: newStatus } : rider
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="bg-white shadow-md py-4 px-6">
        <h1 className="text-2xl font-bold">Rider List</h1>
      </header>
      <main className="mt-6 bg-white p-6 rounded-md shadow-md">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Vehicle</th>
              <th className="border px-4 py-2">Status</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {riders.map((rider) => (
              <tr key={rider.id}>
                <td className="border px-4 py-2">{rider.name}</td>
                <td className="border px-4 py-2">{rider.vehicle}</td>
                <td className="border px-4 py-2">{rider.status}</td>
                <td className="border px-4 py-2">

                  <button
                    onClick={() =>
                      updateStatus(rider.id, rider.status === "Active" ? "Inactive" : "Active")
                    }
                    className="bg-green-500 text-white px-3 py-1 rounded"
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
            href="/riders"
            className="text-green-500 hover:underline mr-4"
          >
            Go to riders Page
          </a>
          <a
            href="/riders/view"
            className="text-green-500 hover:underline"
          >
            Go to Riders Details Page
          </a>
        </div>
      </main>
    </div>
  );
};

export default RiderListPage;
