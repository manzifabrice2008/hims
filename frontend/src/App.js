import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Patients from "./components/Patients";
import Navbar from "./components/Navbar";

function App() {
  return (
     
    <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patient" element={<Patients />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
