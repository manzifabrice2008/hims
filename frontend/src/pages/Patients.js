import { useState } from "react";

export default function Patients() {
  const [patients, setPatients] = useState([]);
  const [name, setName] = useState("");

  const addPatient = () => {
    setPatients([...patients, { id: Date.now(), name }]);
    setName("");
  };

  const deletePatient = (id) => {
    setPatients(patients.filter(p => p.id !== id));
  };

  return (
    <div>
      <h1 className="text-2xl mb-4">Patients</h1>

      <input
        className="border p-2 mr-2"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter patient name"
      />
      <input
        className="border p-2 mr-2"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter patient age"
      />
      <input
        className="border p-2 mr-2"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter patient gender"
      />
      <input
        className="border p-2 mr-2"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter patient ward"
      />
      <input
        className="border p-2 mr-2"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter patient diagonisis"
      />
      
      <button onClick={addPatient} className="bg-blue-500 text-white px-4 py-2">
        Add
      </button>

      <ul className="mt-4">
        {patients.map(p => (
          <li key={p.id} className="flex justify-between border p-2">
            {p.name}
            <button onClick={() => deletePatient(p.id)} className="text-red-500">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}