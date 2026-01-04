import { useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [des, setDes] = useState("");

  let usersData = JSON.parse(localStorage.getItem("allData")) || [];

  const [allData, setAllData] = useState(usersData);

  const submitHandler = (e) => {
    e.preventDefault();

    const newData = [...allData];
    newData.push({ imageUrl, name, role, des });

    setAllData(newData);

    localStorage.setItem("allData", JSON.stringify(newData));
    setImageUrl("");
    setName("");
    setRole("");
    setDes("");
  };

  const deleteHandler = (idx) => {
    const oldData = [...allData];

    oldData.splice(idx, 1);

    setAllData(oldData);
    localStorage.setItem("allData", JSON.stringify(oldData));
  };
  return (
    <div className="app">
      <div className="form">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <div className="inputs">
            <input
              required
              type="text"
              placeholder="enter image url"
              value={imageUrl}
              onChange={(e) => {
                setImageUrl(e.target.value);
              }}
            />
            <input
              required
              type="text"
              placeholder="enter name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              required
              type="text"
              placeholder="enter role"
              value={role}
              onChange={(e) => {
                setRole(e.target.value);
              }}
            />
            <input
              required
              type="text"
              placeholder="enter description"
              value={des}
              onChange={(e) => {
                setDes(e.target.value);
              }}
            />
          </div>
          <button className="submitBtn">Submit</button>
        </form>
      </div>
      <div className="cards">
        {allData.map((elem, idx) => {
          return (
            <Card
              key={idx}
              idx={idx}
              elem={elem}
              deleteHandler={deleteHandler}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
