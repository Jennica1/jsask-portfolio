import { Mail } from "lucide-react";

export default function Contact() {

  const email = "jennicasask@gmail.com"; // Replace with the actual email

  return (

    <section className="w-full py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-6">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-zinc-100 text-zinc-800 rounded-full">

            Get in Touch

          </span>



          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">

            Contact Information

          </h2>



          <p className="text-zinc-600 max-w-2xl mx-auto">

            Have a question or want to connect? Feel free to reach out.

          </p>

          <a

            href={`mailto:${email}`}

            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-zinc-200 rounded-full hover:border-zinc-300 transition-all duration-300 shadow-sm hover:shadow"
          >

            <Mail className="w-5 h-5 text-zinc-700" />

            <span className="text-zinc-800">Send Email</span>

          </a>
        </div>
      </div>
    </section>

  );

};