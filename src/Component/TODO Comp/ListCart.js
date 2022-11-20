// import { useState, useEffect } from "react"; // remove this comment when use localStorage
import { useState } from "react"; // remove this line when use the localStorage
//component
import ListCartItem from "./ListCartItem";

//remove this line to use localStorage and save the data when page is reloaded

// const getLocalStorage = () => {
//   return JSON.parse(localStorage.getItem("list"));
// };
const ListCart = () => {
  const [itemChange, setItemChange] = useState("");

  //remove this line to use localStorage and save the data when page is reloaded

  // const [item, setItem] = useState(getLocalStorage());

  const [item, setItem] = useState([]); // remove this line when use localStorage
  const itemEvent = (event) => {
    setItemChange(event.target.value);
  };
  const addItemEvent = () => {
    if (itemChange === "") {
      alert("enter some text");
    } else {
      setItem((items) => {
        return [...items, itemChange];
      });
    }

    setItemChange("");
  };
  const deleteEvent = (id) => {
    console.log("deleted");
    setItem((items) => {
      return items.filter((element, index) => {
        return index !== id;
      });
    });
  };

  //remove this line to use localStorage and save the data when page is reloaded

  // useEffect(() => {
  //   localStorage.setItem("list", JSON.stringify(item));
  // }, [item]);

  return (
    <>
      <div className="cart">
        <div>
          <h1
            style={{
              textAlign: "center",
              marginBottom: "30px",
            }}
          >
            To Do List
          </h1>
          <div style={{ textAlign: "center" }}>
            <input
              type="text"
              placeholder="Enter some text here..."
              style={{
                height: "30px",
                width: "60%",
                borderRadius: "5px",
                marginRight: "20px",
              }}
              onChange={itemEvent}
              value={itemChange}
            />
            <button
              onClick={addItemEvent}
              style={{ height: "30px", width: "50px", borderRadius: "5px" }}
            >
              Add
            </button>
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
        </div>
        <ListCartItem item={item} deleteEvent={deleteEvent} />
      </div>
    </>
  );
};
export default ListCart;
