"use client";

export default function RidersPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">Riders Page</h1>
      <p className="text-center mb-8">
        Welcome to the Riders page! Here you can manage Riders.
      </p>
      <div className="flex flex-col items-center gap-4">

        {/* Links */}
        <a
          href="/riders/list"
          className="text-green-500 hover:underline text-lg"
        >
          View Riders List
        </a>
        <a
          href="/riders/view"
          className="text-green-500 hover:underline text-lg"
        >
          View Riders Details
        </a>
      </div>

      {/* Navigation Button */}
      <button
        onClick={() => (window.location.href = "/advertisers")}
        className="mt-10 bg-green-500 text-white px-6 py-3 rounded hover:bg-green-700"
      >
        Go to Advertisers Page
      </button>
    </div>
  );
}
