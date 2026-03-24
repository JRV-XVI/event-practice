import { React, useState, useEffect } from 'react';
import miGif from '/public/vs.gif';

const Info = {
  Name: "Pokemon",
  Life: "100",
  Image: "",
  Type: "Angry",
  Level: "89"
}

function HomePage(){
  const [lifeList, setLifeList] = useState([]);

  return(
    <div className="w-screen flex justify-start h-screen items-center bg-[#62B6DE]">
      <div className="w-[100%] flex flex-wrap gap-1 justify-center h-[100%] items-start text-4xl italic mt-[3%]">
        <h1 className="w-[40%] h-[10%] bg-white rounded-4xl flex justify-center items-center border-5 border-black">🔥 Observa la vida de tu pokemon! 🔥</h1>

        <div className="flex justify-center items-center w-[80%] h-[80%] bg-white mb-[3%] rounded-4xl border-5 border-black">
          <div className="w-[38%] h-[90%] bg-black">
          </div>
          <div className="w-[20%] h-[90%] flex justify-center items-center">
            <img 
                  src={miGif} 
                  alt="VS" 
                  className="w-[100%] h-[70%] w-full h-auto rounded-lg [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] "
                />
          </div>
          <div className="w-[38%] h-[90%] bg-black">
          </div>

        </div>
      </div>
    </div>
  );
}

export default HomePage
