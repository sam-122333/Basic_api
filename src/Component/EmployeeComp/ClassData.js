function ClassData(props) {
  return (
    <tbody>
      {props.data.map((data, index) => {
        return (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>
              {data.firstname} {data.lastname}
            </td>
            <td>{data.category}</td>
            <td>{data.employeeId}</td>
            <td>{data.salary}</td>
          </tr>
        );
      })}
    </tbody>
  );
}
export default ClassData;
