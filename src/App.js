import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import About from "./Component/AboutComp/About";
import Contact from "./Component/ContactComp/Contact";
import Home from "./Component/HomeComp/Home";

//components
import ListCart from "./Component/TODO Comp/ListCart";
import Navbar from "./Component/Navbar";
import Class1 from "./Component/EmployeeComp/Class1";
import Class2 from "./Component/EmployeeComp/Class2";
import Class3 from "./Component/EmployeeComp/Class3";
import Class4 from "./Component/EmployeeComp/Class4";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/todolist" element={<ListCart />} />
        <Route exact path="/class1" element={<Class1 />} />
        <Route exact path="/class2" element={<Class2 />} />
        <Route exact path="/class3" element={<Class3 />} />
        <Route exact path="/class4" element={<Class4 />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
export default App;
