import React from "react";
import { NavLink } from "react-router-dom";
import { FaCalculator, FaBook } from "react-icons/fa";

function Sidebar() {
  return (
    <div className="sidebar bg-[#f8ccbc] p-4 h-screen w-64">
      <div className="logo text-center text-xl font-bold mb-6">
        <h1>My App</h1>
      </div>
      <nav>
        <ul className="space-y-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center space-x-2 py-4 text-lg ${
                  isActive ? "text-[#e8a546]" : "text-[#000000]"
                } hover:text-[#e8a546]`
              }
            >
              <FaCalculator className="text-2xl" />
              <span className="hidden md:inline">Calculator</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/quran"
              className={({ isActive }) =>
                `flex items-center space-x-2 text-lg ${
                  isActive ? "text-[#e8a546]" : "text-[#000000]"
                } hover:text-[#e8a546]`
              }
            >
              <FaBook className="text-2xl" />
              <span className="hidden md:inline">Quran Verse</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
