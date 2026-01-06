import axios from "axios";
import { useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [allCardData, setallCardData] = useState([]);

  const getData = async () => {
    let rawData = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=10");

    let individualData = await rawData.data.results.map((elem) => {
      return elem.url;
    });

    let responseData = individualData.map(async (elem) => {
      return await axios.get(elem);
    });

    let actualData = await Promise.all(responseData);

    setallCardData(actualData);
  };

  return (
    <div className="app">
      <button onClick={getData}>click me to get data</button>
      <div className="cardContainers">
        {allCardData.map((elem, idx) => {
          return (
            <div key={idx}>
              <Card key={idx} elem={elem} />;
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
