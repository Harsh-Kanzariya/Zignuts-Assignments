"use client";

import React, { useEffect, useState } from "react";
import GameCard from "./GameCard";
import SearchBar from "./SearchBar";
import PlatformFilter from "./PlatformFilter";

const GamesList = () => {
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);

//  Fetching data from API
  useEffect(() => {
    fetch(
      "https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json"
    )
      .then((response) => response.json())
      .then((data) => {
        const gameData = data.slice(1);
        setGames(gameData);
        setFilteredGames(gameData);
      })
      .catch((error) => console.log("Error: ", error.message));
  }, []);

  // Handling game search
    function handleSearch(gameSearched){
        const searched = games.filter((game) => game.title.toLowerCase().startsWith(gameSearched.toLowerCase()))
        setFilteredGames(searched)
    }

// Handling Platform filter
  function handlePlatformChange(e) {
    if (e.target.value === "All") {
      setFilteredGames([...games]);
    } else {
      const filtering = games.filter( (game) => game.platform === e.target.value)
      setFilteredGames(filtering);
    }
  }

  return (
    <>
      <h1 className="text-4xl font-serif m-4 flex justify-center items-center">
        Games List:
      </h1>
      <div className="flex mx-4 my-2 justify-center gap-3">
        <SearchBar games={games} onSearch={handleSearch} />
        <PlatformFilter games={games} onPlatformChange={handlePlatformChange} />
      </div>

      <div className="w-screen flex flex-col items-center gap-y-4">
        {filteredGames.map((game, index) => (
          <GameCard key={index} game={game} />
        ))}
      </div>
    </>
  );
};

export default GamesList;
