import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-blue-900 text-white p-5">
      <h2 className="text-2xl font-bold mb-6">HMS</h2>
      <ul className="space-y-4">
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/patients">Patients</Link></li>
        <li><Link to="/doctors">Doctors</Link></li>
        <li><Link to="/appointments">Appointments</Link></li>
      </ul>
    </div>
  );
}