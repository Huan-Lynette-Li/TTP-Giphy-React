import React, { useState } from "react";
import axios from "axios";
import Giphy from "./GifCard";


function Search(props) {
  const API_KEY = "q3fC3h8b7O0FNCg5o4rSJQoCXr2mraaj";
  const { random, setRandom, search, setSearch, list, setList } = props;
  const [input, setInput] = useState({});
  const [Random, setARandom] = useState(false);
  const [Searching, setSearching] = useState(false);
  const [Trend, setTrend] = useState(false);
  

  const handleTrend = async (event) => {
    event.preventDefault();
    setTrend(true);

    await axios.get("https://api.giphy.com/v1/gifs/trending?api_key=q3fC3h8b7O0FNCg5o4rSJQoCXr2mraaj").then((response) => {
      console.log(response.data.data);
      setList(response.data.data);
    }, []);
  };
  

  const handleRandom = async (event) => {
    event.preventDefault();
    setARandom(true);

    await axios.get("https://api.giphy.com/v1/gifs/random?api_key=q3fC3h8b7O0FNCg5o4rSJQoCXr2mraaj").then((response) => {
      setRandom([response.data.data]);
    }, {});
  };
  

  const handleSearch = async (event) => {
    event.preventDefault();
  
    setSearching(true);
    await axios
      .get(
        "https://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=" + API_KEY
      )
      .then((response) => {
        setSearch(response.data.data);
      }, []);
  };
  

  const handleChange = (event) => {
    console.log(event.target.value);
    setInput(event.target.value);
  };

  return (
    
    <>
      <div className="container">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            onChange={handleChange}
            placeholder="Enter a Keyword"
          ></input>
          <button value="submit" type="submit">
            GO
          </button>
          <p><button onClick={handleTrend}>Trending Gifs</button>
          <button onClick={handleRandom}>Random Gifs</button></p>
        </form>
        <div classNmae="container1">
        <Giphy
          random={random}
          search={search}
          list={list}
          randomsearch={Random}
          searching={Searching}
          trending={Trend}
        />
        </div>
      </div>
    </>
  );
}

export default Search;