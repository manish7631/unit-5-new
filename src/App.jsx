import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { EmployeeList } from "./components/EmployeeList";
import { EmployeeDetails } from "./components/EmployeeDetails";
import { Admin } from "./components/Admin";

import { Navbar } from "./components/Navbar";
import { Logout } from "./components/Logout";
import './App.css';
import { RequireAuth } from './hoc/RequireAuth';
import { useState } from "react";
function App() {

  const [terminate, setTerminate] = useState(0)
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* Routes here */}
        <Route path="/" element={<Home terminate={terminate} />} />
        <Route path="/employees" element={<RequireAuth> <EmployeeList /></RequireAuth>} />
        <Route path="/employees/:id" element={<RequireAuth> <EmployeeDetails terminate={terminate} setTerminate={setTerminate} /></RequireAuth>} />
        <Route path="/admin" element={<RequireAuth>  <Admin /></RequireAuth>} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;
