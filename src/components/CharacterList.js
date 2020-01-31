import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        console.log(response);
        setData(response.data.results);
      })
      .catch(error => {
        console.log("Data didn't return", error);
      });
  }, []);

  return (
    <div className="character-container">
      {data.map(data => {
        return (
          <CharacterCard key={data.name} name={data.name} image={data.image} />
        );
      })}
    </div>
  );
}
