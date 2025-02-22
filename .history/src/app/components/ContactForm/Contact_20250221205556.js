import { Mail } from "lucide-react";
import { Linkedin } from 'lucide-react';


export default function Contact() {

  const email = "jennicasask@gmail.com"; 

  return (

    <section className="w-full py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-6">



          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Contact Information
          </h2>



          <p className="text-zinc-600 max-w-2xl mx-auto">
            Have a question or want to connect? Feel free to reach out.
          </p>

          <a

            href={`mailto:${email}`}

            className="inline-flex items-center gap-2 px-6 py-3 border-[#890620] hover:bg-[#890620] hover:text-[#F9F3ED] transition-all duration-300 rounded-full  transition-all duration-300 shadow-sm hover:shadow"
          >

            <Mail className="w-5 h-5 text-zinc-700" />

            <span className="text-zinc-800">Send Email</span>

          </a>

          <a
            href="https://www.linkedin.com/in/jennica-sask-78000a306/"
            target="_blank"
              rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-zinc-200 rounded-full hover:border-zinc-300 transition-all duration-300 shadow-sm hover:shadow"
          >

            <Linkedin className="w-5 h-5 text-zinc-700" />

            <span className="text-zinc-800">Linkedin</span>

          </a>
        </div>
      </div>
    </section>

  );

};