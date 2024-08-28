import React from "react";
import { NavLink } from "react-router-dom";
import { FaCalculator, FaBook, FaHome } from "react-icons/fa";

function Sidebar() {
  return (
    <div className="sidebar bg-[#f8ccbc] p-4 h-screen w-64">
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
              <FaHome className="text-2xl" />
              <span className="hidden md:inline">My App</span>
            </NavLink>
            <NavLink
              to="/calculator"
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
