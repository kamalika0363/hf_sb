"use client";
import React, { useState } from "react";
import axios from "axios";

const Box = () => {
  const [translatedText, setTranslatedText] = useState("");
  const [inputText, setInputText] = useState("");
  const [language, setLanguage] = useState("en-de"); // Default language pair

  const fetchTranslation = async () => {
    const response = await axios({
      method: "post",
      url: "/api/huggingface", // Your serverless function endpoint
      data: { text: inputText, lang: language }, // Sending the selected language to the backend
      headers: { "Content-Type": "application/json" },
    });

    setTranslatedText(response.data.translation_text);
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };
  return (
    <div className="rounded-xl sm:p-5 mt-1 p-5 border-2 border-zinc-900 bg-[#070707] font-semibold flex flex-col justify-between items-center sm:w-full w-full  text-xl sm:text-2xl">
      <div className="bg-black p-5 sm:mt-0 rounded-xl item-center justify-center w-full h-96 border-2 border-zinc-900">
        <p className="text-stone-400 mb-2 justify-center font-semibold text-lg sm:text-2xl">
          Translated Data
        </p>
        <p>{translatedText}</p>
      </div>
      <div className="flex flex-col items-center p-2">
        <label className="leading-loose text-stone-600">Select Language</label>
        <select
          onChange={handleLanguageChange}
          value={language}
          className="p-2 border border-zinc-900 bg-black rounded-xl text-stone-400 focus:outline-none focus:border-stone-500 text-sm sm:text-md opacity "
        >
          <option value="en-es">English to Spanish</option>
          <option value="en-de">English to German</option>
          <option value="en-fr">English to French</option>
        </select>
      </div>
      <div className="mt-4 rounded-lg flex space-x-4 sm:w-full w-full">
        <input
          type="text"
          onChange={handleInputChange}
          value={inputText}
          className="rounded-xl p-2 pl-5 w-full border-2 border-zinc-900 bg-black font-semibold text-sm sm:text-xl  "
          placeholder="Add text"
        />
        <button
          onClick={fetchTranslation}
          className=" rounded-xl p-3 border-2 border-zinc-900 bg-[#272728]"
        >
          <img src="Icon.svg" alt="Add" />
        </button>
      </div>
    </div>
  );
};
export default Box;
