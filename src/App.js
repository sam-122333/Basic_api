import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import About from "./Component/AboutComp/About";
import Contact from "./Component/ContactComp/Contact";
import Home from "./Component/HomeComp/Home";

//components
import ListCart from "./Component/TODO Comp/ListCart";
import Navbar from "./Component/Navbar";
import Class from "./Component/EmployeeComp/Class";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/todolist" element={<ListCart />} />
        <Route exact path="/class-1-Employee" element={<Class class={"1"} />} />
        <Route exact path="/class-2-Employee" element={<Class class={"2"} />} />
        <Route exact path="/class-3-Employee" element={<Class class={"3"} />} />
        <Route exact path="/class-4-Employee" element={<Class class={"4"} />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
export default App;
