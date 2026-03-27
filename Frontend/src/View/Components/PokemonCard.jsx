import React from 'react';

export default function PokemonCard({ pokemon }) {
  let healthColor = 'bg-green-500';
  if (pokemon.Life < 50) healthColor = 'bg-yellow-400';
  if (pokemon.Life < 25) healthColor = 'bg-red-500';

  return (
    <div className="w-full h-full max-w-[320px] max-h-[480px] border-4 border-black bg-[#ffde00] rounded-2xl p-4 flex flex-col shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] duration-300 relative overflow-hidden group cursor-pointer m-auto">

      <div className="flex justify-between items-center mt-2 mb-2">
        <h2 className="text-2xl font-black uppercase tracking-wider text-black truncate pr-2">
          {pokemon.Name}
        </h2>
        <div className="text-lg font-bold bg-white px-3 py-1 rounded-full border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex-shrink-0">
          Lv. {pokemon.Level}
        </div>
      </div>

      <span className="text-sm font-bold bg-black text-white px-3 py-1 w-max rounded-full mb-4 inline-flex items-center gap-1 shadow-[2px_2px_0px_0px_rgba(255,255,255,0.5)]">
        ⭐️ {pokemon.Type}
      </span>

      <div className="flex-grow w-full bg-white border-4 border-black rounded-xl overflow-hidden shadow-inner flex justify-center items-center relative mb-4 group-hover:bg-gray-100 transition-colors">
        {pokemon.Image ? (
          <img
            src={pokemon.Image}
            alt={pokemon.Name}
            className="object-contain w-full h-full p-4 group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="text-8xl flex flex-col items-center animate-bounce hover:animate-spin">
            👾
            <span className="text-sm mt-4 font-bold text-gray-400">Sin Imagen</span>
          </div>
        )}
      </div>

      <div className="w-full bg-white p-3 rounded-xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-2">
        <div className="flex justify-between items-center font-bold text-lg">
          <span>❤️ HP (Vida)</span>
          <span>{pokemon.Life}</span>
        </div>

        <div className="w-full h-5 bg-gray-200 rounded-full border-2 border-black overflow-hidden relative">
          <div
            className={`h-full ${healthColor} transition-all duration-500 ease-out`}
            style={{ width: `${Math.max(0, Math.min(100, pokemon.Life))}%` }}
          />
        </div>
      </div>
    </div>
  );
}
