export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-3 gap-6 mt-6">
        <div className="bg-blue-200 p-4 rounded">Patients: 120</div>
        <div className="bg-green-200 p-4 rounded">Doctors: 25</div>
        <div className="bg-yellow-200 p-4 rounded">Appointments: 80</div>
      </div>
    </div>
  );
}