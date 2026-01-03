import { useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [des, setDes] = useState("");

  const [allData, setAllData] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    setAllData([...allData, { imageUrl, name, role, des }]);

    setImageUrl("");
    setName("");
    setRole("");
    setDes("");
  };

  const deleteHandler = (idx) => {
    const oldData = [...allData];

    oldData.splice(idx, 1);

    setAllData(oldData);
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
              type="text"
              placeholder="enter image url"
              value={imageUrl}
              onChange={(e) => {
                setImageUrl(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="enter name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="enter role"
              value={role}
              onChange={(e) => {
                setRole(e.target.value);
              }}
            />
            <input
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
