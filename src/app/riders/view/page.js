import React from 'react';

const ViewRiderPage = () => {
  const rider = {
    id: 1,
    name: 'Ahmed Ike',
    vehicle: 'Keke Tricycle - AB123CD',
    routes: ['Route 1', 'Route 2', 'Route 3'],
    activeCampaigns: 2,
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="bg-white shadow-md py-4 px-6">
        <h1 className="text-2xl font-bold">View Rider</h1>

         {/* Easy links */}
        <div className="mt-6">
          <a
            href="/riders"
            className="text-green-500 hover:underline mr-4"
          >
            Go to Riders Page
          </a>
          <a
            href="/riders/list"
            className="text-green-500 hover:underline"
          >
            Go to Riders List Page
          </a>
        </div>

      </header>
      <main className="mt-6 bg-white p-6 rounded-md shadow-md">
        <h2 className="text-xl font-bold mb-4">{rider.name}</h2>
        <p className="mb-2">
          <strong>Vehicle:</strong> {rider.vehicle}
        </p>
        <p className="mb-2">
          <strong>Active Campaigns:</strong> {rider.activeCampaigns}
        </p>
        <div>
          <strong>Routes:</strong>
          <ul className="list-disc pl-6 mt-2">
            {rider.routes.map((route, index) => (
              <li key={index}>{route}</li>
            ))}
          </ul>
        </div>
      </main>
    </div>

  );
};

export default ViewRiderPage;
