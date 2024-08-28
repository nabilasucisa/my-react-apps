import React from "react";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-[#FFF2E5] text-black p-4">
      <div className="bg-[#f8ae91] p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-4 text-black font-sans">
          Hi! Welcome to the Application 🙆🏻‍♀️
        </h1>
        <p className="text-md italic text-[#5a5a5a]">
          🌷 Kindly click the sidebar menu to navigate to the application. 🌷
        </p>
      </div>
    </div>
  );
}

export default HomePage;
