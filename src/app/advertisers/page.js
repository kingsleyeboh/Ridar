"use client";

export default function AdvertisersPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">Advertisers Page</h1>
      <p className="text-center mb-8">
        Welcome to the Advertisers page! Here you can manage advertisers.
      </p>
      <div className="flex flex-col items-center gap-4">
        {/* Links */}
        <a
          href="/advertisers/list"
          className="text-blue-500 hover:underline text-lg"
        >
          View Advertiser List
        </a>
        <a
          href="/advertisers/view"
          className="text-blue-500 hover:underline text-lg"
        >
          View Advertiser Details
        </a>
      </div>
      {/* Navigation Button */}
      <button
        onClick={() => (window.location.href = "/riders")}
        className="mt-10 bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-700"
      >
        Go to Riders Page
      </button>
    </div>
  );
}
