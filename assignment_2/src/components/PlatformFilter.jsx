"use client";

import React, { useMemo } from "react";

const PlatformFilter = ({ games, onPlatformChange }) => {
  let platforms = ["All"];

  //  Finding Unique platforms for filtering
  platforms = useMemo(() => {
    games.forEach((game) => platforms.push(game.platform));
    return [...new Set(platforms)];
  }, [games]);

  return (
    <>
      <h2>Platform :</h2>
      <select
        name="platforms"
        className="mb-2 p-1 border border-gray-300"
        onChange={onPlatformChange}
      >
        {platforms.map((platform) => (
          <option key={platform} value={platform}>
            {platform}
          </option>
        ))}
      </select>
    </>
  );
};

export default PlatformFilter;
