"use client";
import React from "react";

function Navbar() {
  return (
    <div className="text-gray-300 rounded-xl sm:p-5 p-3 sm:ml-9 sm:mr-9 m-4 mt-6 border-2 border-zinc-950 bg-[#070707] font-semibold flex justify-between items-center">
      <button className="h-6 w-6" >
        <img src="menu.svg" alt="hamburger" />
        </button>
      {/* <span>Navbar</span> */}
      <button className="h-6 w-6" >
        <img src="info.svg" alt="info" />
        </button>
    </div>
  );
}

export default Navbar;

