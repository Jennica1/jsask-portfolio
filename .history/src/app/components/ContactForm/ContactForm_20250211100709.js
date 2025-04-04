"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (This is a placeholder action)");
  };

  return (
    <>
      <div id="contact" className="max-w-6xl w-full p-6 bg-white rounded-lg">
      <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name:
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1  block w-full p-2 border rounded-lg shadow-sm focus:ring focus:ring-[#2C304F]"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message:
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="mt-1 block w-full p-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-300"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 border-2 border-[#AC0022] hover:bg-[#AC0022] hover:text-[#F9F3ED] rounded-2xl w-fit h-fit text-base text-black md:text-sm lg:text-sm transition-all duration-300 "
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
}
