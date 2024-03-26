import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

//components
import ListCart from "./Component/TODO Comp/ListCart";
import Navbar from "./Component/Navbar";
import Class from "./Component/EmployeeComp/Class";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={<Class showComp={false} title={"THIS IS THE HOME PAGE 1"} />}
        />
        <Route exact path="/todolist" element={<ListCart />} />
        <Route
          exact
          path="/class-1-Employee"
          element={
            <Class
              showComp={true}
              title={"CLASS 1 EMPLOYEE LIST"}
              class={"1"}
            />
          }
        />
        <Route
          exact
          path="/class-2-Employee"
          element={
            <Class
              showComp={true}
              title={"CLASS 2 EMPLOYEE LIST"}
              class={"2"}
            />
          }
        />
        <Route
          exact
          path="/class-3-Employee"
          element={
            <Class
              showComp={true}
              title={"CLASS 3 EMPLOYEE LIST"}
              class={"3"}
            />
          }
        />
        <Route
          exact
          path="/class-4-Employee"
          element={
            <Class
              showComp={true}
              title={"CLASS 4 EMPLOYEE LIST"}
              class={"4"}
            />
          }
        />
        <Route
          exact
          path="/about"
          element={<Class showComp={false} title={"THIS IS THE ABOUT PAGE"} />}
        />
        <Route
          exact
          path="/contact"
          element={
            <Class showComp={false} title={"THIS IS THE CONTACT PAGE"} />
          }
        />
      </Routes>
    </Router>
  );
}
export default App;
