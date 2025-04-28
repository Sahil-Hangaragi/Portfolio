"use client";

import { Github, Linkedin, Mail, FileUser } from "lucide-react";

export default function Socials() {
  return (
    <div className="py-4">
      <div className="flex flex-row justify-center gap-4">
        <a
          href="https://drive.google.com/file/d/1FRSXx0wUNhWxo9FbWdElGBa7g4Kc7V_S/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Resume"
          className="bg-white rounded-full p-2"
        >
          <FileUser className="w-4 h-4 text-black hover:opacity-70 transition" />
        </a>
        <a
          href="https://github.com/Sahil-Hangaragi"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="bg-white rounded-full p-2"
        >
          <Github className="w-4 h-4 text-black hover:opacity-70 transition" />
        </a>
        <a
          href="https://www.linkedin.com/in/sahil-hangaragi-395782248"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="bg-white rounded-full p-2"
        >
          <Linkedin className="w-4 h-4 text-black hover:opacity-70 transition" />
        </a>
        <a
          href="mailto:sahilhangaragi4@gmail.com"
          aria-label="Email"
          className="bg-white rounded-full p-2"
        >
          <Mail className="w-4 h-4 text-black hover:opacity-70 transition" />
        </a>
      </div>
    </div>
  );
}
