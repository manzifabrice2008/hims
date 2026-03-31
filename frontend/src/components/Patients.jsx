import React from "react";
import { useState } from "react";

function Patients() {
  const [input,setInputs] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    ward: "",
    diagnosis: ""
  });
  const [name,setName] = useState("");
  const [age,setAge] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setPatient((prevPatient) => ({
      ...prevPatient,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10">
      <div className="mx-auto w-full max-w-3xl rounded-2xl bg-white p-6 shadow-lg sm:p-8">
        <h2 className="mb-6 text-2xl font-bold text-slate-800">Patient Details</h2>
        <form className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="flex flex-col">
            <label htmlFor="firstName" className="mb-2 text-sm font-semibold text-slate-700">
              Name
            </label>
            <input
              id="firstName"
              type="text"
              placeholder="Enter patient's first name"
              className="rounded-lg border border-slate-300 px-3 py-2 text-slate-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              value={input.firstname}
              onChange={(e)=>setInputs(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="Age" className="mb-2 text-sm font-semibold text-slate-700">
             Age
            </label>
            <input
              id="lastName"
              type="number"
              placeholder="Enter patient Age"
              className="rounded-lg border border-slate-300 px-3 py-2 text-slate-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              value={input.lastName}
              onChange={(e)=>setInputs(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="gender" className="mb-2 text-sm font-semibold text-slate-700">
              Gender
            </label>
            <select
              id="gender"
              className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              value={input.gender}
              onChange={(e)=>setInputs(e.target.value)}
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="ward" className="mb-2 text-sm font-semibold text-slate-700">
              Ward
            </label>
            <input
              id="ward"
              type="text"
              placeholder="Enter patient's ward"
              className="rounded-lg border border-slate-300 px-3 py-2 text-slate-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              value={input.age}
              onChange={(e)=>setInputs(e.target.value)}
            />
          </div>

          <div className="flex flex-col sm:col-span-2">
            <label htmlFor="diagnosis" className="mb-2 text-sm font-semibold text-slate-700">
              Diagnosis
            </label>
            <input
              id="diagnosis"
              type="text"
              placeholder="Enter patient's diagnosis"
              className="rounded-lg border border-slate-300 px-3 py-2 text-slate-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              value={input.diagnosis}
              onChange={(e)=>setInputs(e.target.value)}
            />
          </div>

          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 px-4 py-2.5 font-semibold text-white transition hover:bg-blue-700"
            >
              Save Patient
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Patients;
