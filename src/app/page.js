import React from 'react';

const LandingPage = () => {
  const campaigns = [
    { id: 1, title: 'Campaign 1', description: 'Reach new customers within and outside Abuja.' },
    { id: 2, title: 'Campaign 2', description: 'Advertise during peak hours for maximum visibility.' },
    { id: 3, title: 'Campaign 3', description: 'Target neighborhoods with Local ads.' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Ridar Platform</h1>
        <nav>
          <a
            href="/riders"
            className="mr-4 text-blue-500 hover:underline"
          >
            Riders
          </a>
          <a
            href="/advertisers"
            className="text-blue-500 hover:underline"
          >
            Advertisers
          </a>
        </nav>
      </header>

      <main className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Available Campaigns</h2>
        <ul className="space-y-4">
          {campaigns.map((campaign) => (
            <li key={campaign.id} className="bg-white p-4 rounded-md shadow-md">
              <h3 className="text-lg font-bold">{campaign.title}</h3>
              <p className="text-gray-600">{campaign.description}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default LandingPage;
