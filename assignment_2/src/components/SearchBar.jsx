"use client";

import React,{useState, useEffect, useRef} from "react";

const SearchBar = ({ games, onSearch }) => {
  const [gameSearched, setGameSearched] = useState('')
  const [suggestions, setsuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchBox = useRef(null)

  useEffect( () => {
    const handleClickOutside = (e) => {
      if(searchBox.current && !searchBox.current.contains(e.target)){
        setShowSuggestions(false)
      }
    }
    document.addEventListener('mousedown',handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  function handleInputChange(e){
    const value = e.target.value
    setGameSearched(value)
    onSearch(value)

    if(value.length >0){
      const filtered = games.filter(
        (game) => game.title.toLowerCase().startsWith(value.toLowerCase())
      )
       .map( (game) => game.title);
      setsuggestions(filtered)
      setShowSuggestions(true)
    } else{
      setsuggestions([])
      setShowSuggestions(false)
    }
  }


  function handleSelectedGame(selectedGame){
    setGameSearched(selectedGame)
    onSearch(selectedGame)
    setShowSuggestions(false)
  }

  return (
    <div className="relative" ref={searchBox}>
      <input
        type="text"
        value={gameSearched}
        className="border border-gray-300 hover:border-blue-400 p-1 rounded-md"
        placeholder="Search games..."
        onChange={handleInputChange}
      />

      {showSuggestions && suggestions.length > 0 && (
        <ul className="absolute z-10 w-64 mt-1 bg-white border rounded shadow-lg">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSelectedGame(suggestion)}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
