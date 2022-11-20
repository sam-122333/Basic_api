import logo from "./logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li className="liClass">
            <Link to="/">Home</Link>
          </li>
          <li className="liClass">
            <Link to="/todolist">To Do List</Link>
          </li>
          <li className="liClass menu">
            <div>
              Employee
              <div className={"DDMenu"}>
                <div className={"DDMenuItem"}>
                  <Link to="/class1">Class 1</Link>
                </div>
                <div className={"DDMenuItem"}>
                  <Link to="/class2">Class 2</Link>
                </div>
                <div className={"DDMenuItem"}>
                  <Link to="/class3">Class 3</Link>
                </div>
                <div className={"DDMenuItem"}>
                  <Link to="/class4">Class 4</Link>
                </div>
              </div>
            </div>
          </li>
          <li className="liClass">
            <Link to="/about">About</Link>
          </li>
          <li className="liClass">
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <img src={logo} alt="" />
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;
