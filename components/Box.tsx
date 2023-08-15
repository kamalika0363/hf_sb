"use client";

function Box() {
  return (
    <div className="rounded-xl sm:p-5 mt-1 p-5 border-2 border-zinc-900 bg-[#070707] font-semibold flex flex-col justify-between items-center sm:w-full w-full  text-xl sm:text-2xl">
      <div className="bg-black p-5 sm:mt-0 rounded-xl item-center justify-center w-full h-96 border-2 border-zinc-900">
        <p className="text-stone-400 mb-2 justify-center font-semibold text-lg sm:text-2xl">
          Summarized Data
        </p>
      </div>
      <form className="mt-10 rounded-lg flex space-x-4 sm:w-full w-full">
        <input
          className="rounded-xl p-2 pl-5 w-full border-2 border-zinc-900 bg-black font-semibold text-sm sm:text-xl  "
          placeholder="Add a link or text"
        />
        <button
          type="submit"
          className=" rounded-xl p-3 border-2 border-zinc-900 bg-[#272728]"
        >
          <img src="Icon.svg" alt="Add" />
        </button>
      </form>
    </div>
  );
}
export default Box;
