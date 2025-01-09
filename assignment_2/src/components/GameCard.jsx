import React from 'react';

const GameCard = ({game}) => {
    return (
      <div className="w-3/4 flex justify-between bg-slate-200 border border-gray-400 rounded-3xl p-3 my-2">
        <div className="flex m-2">
          <img src={null} alt='game image' className="m-2 w-28 h-40 object-contain border border-gray-400" />
          <div className="p-3">
            <h1 className="text-3xl mb-2">{game.title}</h1>
            <h2>Platform : {game.platform}</h2>
            <h2> Genre : {game.genre}</h2>
            <h2>
              Editors Choice : {game.editors_choice === "Y" ? "Yes" : "No"}
            </h2>
          </div>
        </div>
        <div className="flex justify-center items-center bg-green-400 text-white h-12 w-12 m-3 rounded-2xl">
          <h2 className="text-3xl px-1">{game.score}</h2>
        </div>
      </div>
    );
}

export default GameCard;
