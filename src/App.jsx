import Nav from "./component/Nav";
import Body from "./component/Body";
import SideBox from "./component/SideBox";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const API =
    "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json";
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    axios
      .get(API)
      .then((res) => {
        setData(res.data);
        setFilteredData(res.data);
      })
      .catch((err) => console.error("error while getting data ", err));
  }, []);

  function findItem(e) {
    const searchItem = e.target.value.toLowerCase();
    setSearch(searchItem);

    const filtered = data.filter(
      (item) =>
        item.name.toLowerCase().includes(searchItem) ||
        item.color.toLowerCase().includes(searchItem) ||
        item.type.toLowerCase().includes(searchItem)
    );
    setFilteredData(filtered);
  }

  return (
    <div>
      <Nav />
      <div className="search-box">
        <input
          type="text"
          name="search"
          value={search}
          onChange={(e) => findItem(e)}
          className="sbar"
          placeholder="Looking for something....."
        />
      </div>
      <div className="container">
        <SideBox data={data} setFilteredData={setFilteredData} />
        <Body data={filteredData} />
      </div>
    </div>
  );
};

export default App;
