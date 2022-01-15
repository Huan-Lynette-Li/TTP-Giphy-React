import Search from "./components/SearchField";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [search, setSearch] = useState([]);
  const [random, setRandom] = useState([]);
  const [list, setList] = useState([]);

  return (
    <div>
      <h1>Gif Finder</h1>
      <Search
        random={random}
        setRandom={setRandom}
        search={search}
        setSearch={setSearch}
        list={list}
        setList={setList}
      />
    </div>
  );
}

export default App;