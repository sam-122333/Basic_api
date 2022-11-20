import empData from "../../APIS/classAPI.json";
import ClassData from "./ClassData";

function Class(props) {
  const classEmpData = empData.filter((data) => {
    return data.classID === props.class;
  });
  return (
    <div className="cart">
      <div>
        <h1
          style={{
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          CLASS {props.class} EMPLOYEE LIST
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
        </div>
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
            <ClassData data={classEmpData} />
          </table>
        </div>
      </div>
    </div>
  );
}
export default Class;
