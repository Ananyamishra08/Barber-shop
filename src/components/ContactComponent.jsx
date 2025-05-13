import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <div className="bg-gray-900 text-white">
        {/* "Contact Us" Heading */}
        <h1 className="text-5xl font-bold text-orange-400 text-center py-8 ">
          Contact Us
        </h1>
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="flex flex-col md:flex-row w-full max-w-4xl">
            {/* Left Section: Contact Information */}
            <div className="md:w-1/2 p-6">
              <h1 className="text-4xl font-bold text-orange-400 mb-6">Get in Touch</h1>
              <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
              <p className="mb-2"><span className="font-bold">Status:</span> Open - Closes 7 p.m</p>
              <p className="mb-2">
                <span className="font-bold">Location:</span> 500 N Bell Ave #109, Denton, TX 76209, United States
              </p>
              <p className="mb-2"><span className="font-bold">Phone:</span> +1 940-612-9127</p>
              <p>
                <span className="font-bold">Directions:</span>{" "}
                <a href="#" className="text-orange-400 hover:underline">Google Maps</a>
              </p>
            </div>

            {/* Right Section: Contact Form */}
            <div className="md:w-1/2 p-6">
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-orange-400"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-orange-400"
                />
                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-orange-400"
                />
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-orange-400 resize-none"
                ></textarea>
                <button
                  type="button"
                  className="w-full p-3 bg-orange-400 text-black font-semibold rounded hover:bg-orange-500 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;