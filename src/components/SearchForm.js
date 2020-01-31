import React, { useState, useEffect } from "react";
import axios from "axios";

export default function SearchForm() {
  const [character, setCharacter] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        const data = response.data.results;
        console.log("Search form response", response)
        const result = data.filter(character => data.name.toLowerCase().includes(query.toLowerCase())
        );
        setCharacter(result);
      });
  }, [query]);

const handleInputChange = event => {
  setQuery(event.target.value);
};

  return (
    <section className="search-form">
      <form className="search">
        <input type="text" onChange={handleInputChange} value={query} name="name" tabIndex="0" className="prompt search-name" placeholder="search by name" autoComplete="off" />
      </form>
    </section>
  );
}
