import Employeechart from "./components/Employeechart";
import Genderchart from "./components/Genderchart";
import Navbar from "./components/Navbar";
import * as mdb from "mdb-ui-kit"; // lib
import { Input } from "mdb-ui-kit"; // module
import "./styles.css";
import bootstrap from "bootstrap";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/gender" element={<Genderchart />} />
        <Route path="/employement" element={<Employeechart />} />
      </Routes>
      {/* <Genderchart /> */}

      {/* <Employeechart /> */}
    </div>
  );
}
