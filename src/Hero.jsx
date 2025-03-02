import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 bg-white text-center">
      {/* Watch Video Button */}
      <button className="watch-vdo w-64 h-12 flex items-center justify-center space-x-3 rounded-xl shadow-lg bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:from-red-600 hover:to-red-800 transform hover:scale-105 transition-all duration-300 ease-in-out mt-6">
        <img
          className="w-5 h-5"
          src="https://static.vecteezy.com/system/resources/previews/018/842/675/original/realistic-play-button-video-player-and-streaming-icon-live-stream-3d-render-illustration-free-png.png"
          alt="Play video icon"
        />
        <p className="text-white text-lg font-semibold">Watch Video Instructions</p>
      </button>

      {/* Heading Section */}
      <h1 className="font-[Outfit] text-6xl font-extrabold text-black leading-tight mt-8">
        Experience Next-Gen AI
        <br />
        Assistant With{" "}
        <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent">
          Ashna AI
        </span>
      </h1>

      {/* Subtitle Section */}
      <p className="font-[Barlow] text-xl text-gray-700 mt-4 max-w-3xl px-4">
        Elevate your chat, search, writing, and coding with cutting-edge Ashna AI models.  
        <br /> Access seamlessly on Chrome, Edge, and mobile apps.
      </p>

      <div class="flex justify-center gap-4 mt-10">
 
  <button className="flex items-center justify-center gap-3 w-64 h-12 rounded-lg border border-[#e5e5e5] bg-gradient-to-r from-red-500 via-red-600 to-red-700 px-6 py-1 text-white shadow-md transition-all hover:brightness-110">
  
    <svg
      aria-label="Google logo"
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <g>
        <path d="m0 0H512V512H0" fill="none"></path>
        <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
        <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
        <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
        <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
      </g>
    </svg>
   
    <span className="text-sm font-semibold">Add to Google – It's Free</span>
  </button>

 
  <button className="flex items-center justify-center gap-3 w-64 h-12 rounded-lg border border-red-700 bg-gradient-to-r from-red-500 via-red-600 to-red-700 px-6 py-3 text-white shadow-md transition-all hover:brightness-125">
  
    <svg
      aria-label="Apple logo"
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1195 1195"
    >
      <path
        fill="white"
        d="M1006.933 812.8c-32 153.6-115.2 211.2-147.2 249.6-32 25.6-121.6 25.6-153.6 6.4-38.4-25.6-134.4-25.6-166.4 0-44.8 32-115.2 19.2-128 12.8-256-179.2-352-716.8 12.8-774.4 64-12.8 134.4 32 134.4 32 51.2 25.6 70.4 12.8 115.2-6.4 96-44.8 243.2-44.8 313.6 76.8-147.2 96-153.6 294.4 19.2 403.2zM802.133 64c12.8 70.4-64 224-204.8 230.4-12.8-38.4 32-217.6 204.8-230.4z"
      />
    </svg>
   
    <span className="text-sm font-semibold">Desktop and Mobile Apps</span>
  </button>
</div>

    </div>
  );
};

export default Hero;





