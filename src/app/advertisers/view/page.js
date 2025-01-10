import React from 'react';

const ViewAdvertiserPage = () => {
  const advertiser = {
    id: 1,
    name: 'ABC Nig. Ltd',
    email: 'contact@abcng.com',
    campaigns: [
      { id: 1, title: 'Abuja Urban Reach Campaign' },
      { id: 2, title: 'FCT Market Campaign' },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="bg-white shadow-md py-4 px-6">
        <h1 className="text-2xl font-bold">View Advertiser</h1>

        {/* Easy links */}
        <div className="mt-6">
        <a
          href="/advertisers"
          className="text-blue-500 hover:underline mr-4"
        >
          Go to Advertisers Page
        </a>
        <a
          href="/advertisers/list"
          className="text-blue-500 hover:underline"
        >
          Go to Advertiser List Page
        </a>
      </div>
      </header>

      <main className="mt-6 bg-white p-6 rounded-md shadow-md">
        <h2 className="text-xl font-bold mb-4">{advertiser.name}</h2>
        <p className="mb-2">
          <strong>Email:</strong> {advertiser.email}
        </p>
        <div>
          <strong>Campaigns:</strong>
          <ul className="list-disc pl-6 mt-2">
            {advertiser.campaigns.map((campaign) => (
              <li key={campaign.id}>{campaign.title}</li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default ViewAdvertiserPage;
