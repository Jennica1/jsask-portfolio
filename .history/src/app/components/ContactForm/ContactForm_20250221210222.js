"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import { Linkedin } from 'lucide-react';

export default function ContactForm() {

  const email = "jennicasask@gmail.com";

  return (
    <>
      <div id="contact" className="max-w-6xl w-full p-6 bg-white rounded-lg">
        <h2 className="text-3xl font-bold mb-2">Contact Me</h2>
        <p> Have a question or want to connect? Feel free to reach out.</p>
        <div className="flex flex-col">

        <a
            href={`mailto:${email}`}
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#890620] hover:bg-[#890620] hover:text-[#F9F3ED] transition-all duration-300 border-2"
          >
            <Mail className="w-5 h-5 text-zinc-700 group-hover:text-[#F9F3ED]" />
            <span className="text-zinc-800 group-hover:text-[#F9F3ED]">Send Email</span>
          </a>

          <a
            href="https://www.linkedin.com/in/jennica-sask-78000a306/"
            target="_blank"
            rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#890620] hover:bg-[#890620] hover:text-[#F9F3ED] transition-all duration-300 border-2"
          >

            <Linkedin className="w-5 h-5 text-zinc-700 group-hover:text-[#F9F3ED]" />

            <span className="text-zinc-800 group-hover:text-[#F9F3ED]">Linkedin</span>

          </a>

        </div>
      </div>
    </>
  );
}
