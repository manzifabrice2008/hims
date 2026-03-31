import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="bg-blue-300 h-20 w-full flex items-center justify-center text-white text-2xl font-bold">
        <h1>HOSPITAL MANAGEMENT SYSTEM</h1>
      </div>
      <div className="bg-gray-200 h-10 w-full flex items-center justify-center text-gray-700 text-lg font-semibold">
        <nav>
          <Link to="/patient" className="bg-red-200 p-2 mr-1 hover:bg-green-400">
            Patient
          </Link>
          <Link to="/doctor" className="bg-red-200 p-2 mr-1 hover:bg-green-400">
            Doctor
          </Link>
          <Link to="/appointment" className="bg-red-200 p-2 mr-1 hover:bg-green-400">
            Appointment
          </Link>
          <Link to="/billing" className="bg-red-200 p-2 mr-1 hover:bg-green-400">
            Billing
          </Link>
        </nav>
      </div>
    </>
  );
}
export default Navbar;
