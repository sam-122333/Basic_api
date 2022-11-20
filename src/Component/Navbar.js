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
                  <Link to="/class-1-Employee">Class 1</Link>
                </div>
                <div className={"DDMenuItem"}>
                  <Link to="/class-2-Employee">Class 2</Link>
                </div>
                <div className={"DDMenuItem"}>
                  <Link to="/class-3-Employee">Class 3</Link>
                </div>
                <div className={"DDMenuItem"}>
                  <Link to="/class-4-Employee">Class 4</Link>
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
