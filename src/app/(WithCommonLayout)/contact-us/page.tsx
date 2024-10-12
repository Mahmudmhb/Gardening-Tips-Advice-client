"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Importing react-icons

const ContactUs = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 bg-[#18191a] text-gray-300">
      {/* Header Section */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-bold mb-4 text-white">Contact Us</h1>
        <p className="text-lg text-gray-400">
          We&apos;d love to hear from you! Whether you have a question, need
          support, or just want to say hi, feel free to get in touch with us.
        </p>
      </motion.section>

      {/* Contact Form */}
      <motion.section
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-12"
      >
        <h2 className="text-4xl font-semibold mb-4 text-white">
          Send Us a Message
        </h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                className="block text-lg text-gray-400 mb-2"
                htmlFor="name"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-[#242526] text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div>
              <label
                className="block text-lg text-gray-400 mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-[#242526] text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>
          <div>
            <label
              className="block text-lg text-gray-400 mb-2"
              htmlFor="subject"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-[#242526] text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Subject of your message"
              required
            />
          </div>
          <div>
            <label
              className="block text-lg text-gray-400 mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-[#242526] text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows={6}
              placeholder="Write your message here"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors duration-300"
            >
              Send Message
            </motion.button>
          </div>
        </form>
      </motion.section>

      {/* Contact Information */}
      <motion.section
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mb-12"
      >
        <h2 className="text-4xl font-semibold mb-4 text-white">
          Contact Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-2">
              Support Email
            </h3>
            <p className="text-lg text-gray-400">support@mhbgarden.com</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-2">
              Phone Number
            </h3>
            <p className="text-lg text-gray-400">+1 (123) 456-7890</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-2">
              Our Office
            </h3>
            <p className="text-lg text-gray-400">
              1234 Green Thumb Lane,
              <br />
              Garden City, GA 12345
            </p>
          </div>
        </div>
      </motion.section>

      {/* Social Media Links */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-center"
      >
        <h2 className="text-4xl font-semibold mb-4 text-white">
          Follow Us on Social Media
        </h2>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-blue-400 hover:text-blue-500 text-3xl">
            <FaFacebook />
          </a>
          <a href="#" className="text-blue-400 hover:text-blue-500 text-3xl">
            <FaTwitter />
          </a>
          <a href="#" className="text-blue-400 hover:text-blue-500 text-3xl">
            <FaInstagram />
          </a>
          <a href="#" className="text-blue-400 hover:text-blue-500 text-3xl">
            <FaLinkedin />
          </a>
        </div>
      </motion.section>
    </div>
  );
};

export default ContactUs;
