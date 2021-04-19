import React, { useEffect, useState } from "react";
import "./App.css";
import ListItem from "./components/ListItem";

function App() {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTermTwo, setSearchTermTwo] = useState("");

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await fetch("http://localhost:8000/api/students");
    const items = await data.json();
    setItems(items);
  };
  console.log(items);

  const handleChange = (e) => {
    console.log(e.target.value);
    setSearchTerm(e.target.value);
  };

  const handleChangeTwo = (e) => {
    console.log(e.target.value);
    setSearchTermTwo(e.target.value);
  };

  let filteredResult = items
    .filter((item) => {
      return item.name.toLowerCase().includes(searchTerm.toLowerCase());
    })
    .filter((item) => {
      return item.subject.toLowerCase().includes(searchTermTwo.toLowerCase());
    });

  return (
    <div className="App">
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
      </svg>

      <h1>Senior students</h1>
      <div className="inputs">
        <input
          className="input-name"
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleChange}
        />
        <input
          className="input-study"
          type="text"
          placeholder="Search by study field"
          value={searchTermTwo}
          onChange={handleChangeTwo}
        />
      </div>
      <div className="cards">
        {filteredResult.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
