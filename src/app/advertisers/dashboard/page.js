import React from "react";

export default function AdvertiserDashboard() {
  
  // Dummy data for campaigns
  const campaigns = [
    { id: 1, name: "Campaign A", status: "Pending Review" },
    { id: 2, name: "Campaign B", status: "Approved" },
    { id: 3, name: "Campaign C", status: "Launched" },
  ];

  // Dummy data for notifications
  const notifications = [
    { id: 1, message: "Campaign A is under review." },
    { id: 2, message: "Congratulations! Campaign B has been approved! Payment link below." },
  ];

  return (

    <>
    <div className="p-20">

      {/* Dashboard Header */}
      <h1 className="text-xl font-bold mb-4 text-center">Advertiser Dashboard</h1>

      {/* Campaign List Section */}
      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Your Campaigns</h2>
        <ul className="space-y-2">
          {campaigns.map((campaign) => (
            <li
              key={campaign.id}
              className="p-3 border rounded-lg shadow-sm flex justify-between"
            >
              <span>{campaign.name}</span>
              <span
                className={`text-sm font-medium ${
                  campaign.status === "Approved"
                    ? "text-green-500 font-semibold" 
                    : campaign.status === "Pending Review"
                    ? "text-red-500 font-semibold"
                    : "text-blue-500 font-semibold"
                }`}
              >
                {campaign.status}
              </span>
            </li>
          ))}
        </ul>
        </section>
        
        <div className="text-center mt-4">
          <a
            href="/advertisers/add-campaign"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add Campaign
          </a>
        </div>

      {/* Notifications Section */}
      <section className="mb-6 pt-10">
        <h2 className="text-lg font-semibold mb-2">Notifications</h2>
        <ul className="space-y-2">
          {notifications.map((note) => (
            <li
              key={note.id}
              className="p-3 bg-gray-100 border rounded-lg shadow-sm"
            >
              {note.message}
              {/* Payment Link Example */}
              {note.message.includes("approved") && (
                <div className="mt-2">
                  <a
                    href="#"
                    className="text-blue-500 underline text-sm"
                  >
                    Proceed to Payment
                  </a>
                </div>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>

    
</>
  );
}
