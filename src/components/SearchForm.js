import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function SearchForm() {
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState("");

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/").then(response => {
      // const data = response.data.results;
      console.log("Search form response", response);
      const result = response.data.results.filter(character =>
        character.name.toLowerCase().includes(query.toLowerCase())
      );
      setCharacters(result);
    });
  }, [query]);

  return (
    <section className="search-form">
      <form className="search">
        <input
          type="text"
          onChange={handleInputChange}
          value={query}
          name="name"
          tabIndex="0"
          className="prompt search-name"
          placeholder="search by name"
          autoComplete="off"
        />
      </form>
      {characters.map(character => (
        <CharacterCard
          key={character.name}
          id={character.name}
          name={character.name}
          image={character.image}
        />
      ))}
    </section>
  );
}
