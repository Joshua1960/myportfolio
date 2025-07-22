import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <section
      id="contact"
      className="font-main bg-neutral-950 px-10 lg:px-30 pt-24 pb-20 lg:pt-36 lg:pb-36"
    >
      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-2 items-center">
        {/* Left Side */}
        <div>
          <p className="text-neutral-200 tracking-wide text-lg">Get In Touch</p>
          <h1 className="mt-2 text-white text-3xl sm:text-4xl lg:text-5xl font-semibold">
            Let’s discuss your next Project
          </h1>
          <p className="mt-4 text-white max-w-xl text-lg font-light">
            We’d love to hear from you. Please fill out this form or shoot a direct message.
          </p>

          <div className="mt-4 grid grid-cols-3 max-w-md gap-4">
            {/* EMAIL */}
            <div className="flex flex-col items-start">
              <a
                href="mailto:joeljoshua250@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300"
              >
                <FontAwesomeIcon icon={faEnvelope} className="text-yellow-400 w-6 h-6" />
              </a>
              <h2 className="mt-4 text-white font-semibold text-base">Email</h2>
            </div>

            {/* LINKEDIN */}
            <div className="flex flex-col items-start">
              <a
                href="https://www.linkedin.com/in/joshua-joel-0960b4238/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300"
              >
                <FontAwesomeIcon icon={faLinkedin} className="text-yellow-400 w-6 h-6" />
              </a>
              <h2 className="mt-4 text-white font-semibold text-base">LinkedIn</h2>
            </div>

            {/* WHATSAPP */}
            <div className="flex flex-col items-start">
              <a
                href="https://wa.link/jyk08s"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="text-yellow-400 w-6 h-6" />
              </a>
              <h2 className="mt-4 text-white font-semibold text-base">Whatsapp</h2>
            </div>
          </div>
        </div>

        {/* Right Side (Form) */}
        <form
          className="bg-black bg-opacity-60 p-8 rounded-xl shadow-lg md:w-lg w-full"
          onSubmit={(e) => e.preventDefault()}
        >
          <h2 className="text-white text-2xl font-semibold mb-6">Send a Message</h2>
          <label className="block mb-4">
            <span className="text-gray-300 mb-1 block">Name</span>
            <input
              type="text"
              required
              placeholder="Your full name"
              className="w-full rounded-md px-4 py-3 bg-neutral-900 border border-gray-700 focus:border-blue-400 focus:outline-none text-white"
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-300 mb-1 block font-medium">Email</span>
            <input
              type="email"
              required
              placeholder="Your email address"
              className="w-full rounded-md px-4 py-3 bg-neutral-900 border border-gray-700 focus:border-blue-400 focus:outline-none text-white"
            />
          </label>
          <label className="block mb-6">
            <span className="text-gray-300 mb-1 block">Message</span>
            <textarea
              rows="4"
              required
              placeholder="Write your message here..."
              className="w-full rounded-md px-4 py-3 bg-neutral-900 border border-gray-700 focus:border-blue-400 focus:outline-none text-white resize-none"
            ></textarea>
          </label>
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-medium py-3 rounded-md hover:bg-yellow-300 transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
