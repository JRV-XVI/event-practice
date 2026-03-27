import React from 'react';
import { usePokemonController } from '../Controller/usePokemonController';
import PokemonCard from './Components/PokemonCard';
import miGif from '/public/vs.gif';

function HomePage() {
  const { mensaje, pokemonList } = usePokemonController();

  return (
    <div className="w-screen flex justify-start h-screen items-center bg-[#62B6DE] relative">
      <div className="w-[100%] flex flex-wrap gap-1 justify-center h-[100%] items-start text-4xl italic mt-[3%]">
        <h1 className="w-[40%] h-[10%] bg-white rounded-4xl flex justify-center items-center border-5 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">🔥 Observa la vida de tu pokemon! 🔥</h1>

        {mensaje && (
          <div className="mt-4 p-4 bg-yellow-300 border-2 border-black rounded-xl text-2xl font-bold flex justify-center w-[40%] text-center shadow-[4px_4px_0px_#000]">
            Mensaje del backend: {mensaje}
          </div>
        )}

        <div className="flex justify-center items-center w-[80%] h-[80%] bg-white mb-[3%] rounded-4xl border-5 border-black mt-4 p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="w-[38%] h-[90%] flex justify-center items-center">
            <PokemonCard pokemon={pokemonList[0]} />
          </div>
          <div className="w-[20%] h-[90%] flex justify-center items-center">
            <img
              src={miGif}
              alt="VS"
              className="w-[100%] h-[70%] w-full h-auto rounded-lg [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] "
            />
          </div>
          <div className="w-[38%] h-[90%] flex justify-center items-center">
            <PokemonCard pokemon={pokemonList[1]} />
          </div>

        </div>
      </div>
    </div>
  );
}

export default HomePage;