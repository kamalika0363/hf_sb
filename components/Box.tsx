"use client";

function Box() {
  return (
    <div className="text-gray-300 rounded-xl sm:p-5 mt-5 p-5 border-2 border-[#3a3a3a] bg-gradient-to-r from-[#131313] to-[#1e1d1d] font-semibold flex flex-col justify-between items-center sm:w-full w-full  text-xl sm:text-2xl">
      <div className="bg-[#141314] p-5 sm:mt-0 rounded-xl item-center justify-center w-full h-96 border-2 border-[#3a3a3a]">
        <p className="text-gray-300 mb-2 justify-center font-semibold text-lg sm:text-2xl">
          Summarized Data
        </p>
      </div>
      <form className="mt-10 rounded-lg flex space-x-4 sm:w-full w-full">
        <input
          className="text-gray-300 rounded-xl p-2 pl-5 w-full border-2 border-[#3a3a3a] bg-gradient-to-r from-[#131313] to-[#1e1d1d] font-semibold text-sm sm:text-2xl"
          placeholder="Add a link or text"
        />
        <button
          type="submit"
          className=" text-white rounded-xl p-3 border-2 border-[#3a3a3a] bg-[#272728]"
        >
          <img src="Icon.svg" alt="Add" />
        </button>
      </form>
    </div>
  );
}
export default Box;
