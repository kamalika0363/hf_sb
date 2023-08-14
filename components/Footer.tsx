import React from "react";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black sm-bg-gradient text-white  flex flex-col items-center mix-blend-screen">
      <a
        href="https://github.com/kamalika0363/Supabase_LlaMa"
        target="_blank"
        rel="noopener noreferrer"
        className="mb-2"
      >
        <FaGithub size={48} />
      </a>
      <p className="text-sm">©2023</p>
    </footer>
  );
}
