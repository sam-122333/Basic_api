import empData from "../../APIS/classAPI.json";
import ClassData from "./ClassData";
const class3EmpData = empData.filter((data) => {
  return data.classID === "3";
});
function Class3() {
  return (
    <div className="cart">
      <div>
        <h1
          style={{
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          CLASS 3 EMPLOYEE LIST
        </h1>
        <div style={{ textAlign: "center" }}>
          <hr
            style={{
              height: "3px",
              borderWidth: "1px",
              backgroundColor: "red",
              marginBottom: "10px",
              marginTop: "20px",
            }}
          />
        </div>{" "}
        <div>
          <table>
            <thead>
              <tr>
                <th>Sl.No</th>
                <th>Name of Employee & Designation</th>
                <th>Category of the Employee</th>
                <th>Employee Number</th>
                <th>Salary</th>
              </tr>
            </thead>
            <ClassData data={class3EmpData} />
          </table>
        </div>
      </div>
    </div>
  );
}
export default Class3;
