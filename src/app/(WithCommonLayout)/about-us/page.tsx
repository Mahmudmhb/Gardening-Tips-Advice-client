"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="max-w-6xl mx-auto p-8 bg-[#18191a] text-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-bold mb-4">About MHB Garden</h1>
        <p className="text-lg text-gray-400 font-medium">
          Welcome to MHB Garden, your go-to platform for gardening tips, plant
          care advice, and a thriving community of gardening enthusiasts.
        </p>
      </motion.section>

      {/* Mission and Vision */}
      <motion.section
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-12"
      >
        <h2 className="text-4xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg text-gray-400">
          At MHB Garden, our mission is to empower gardening enthusiasts and
          professionals alike with expert gardening tips, seasonal advice, and
          plant care techniques. We aim to build a vibrant community where
          everyone can share their gardening knowledge and experiences.
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mb-12"
      >
        <h2 className="text-4xl font-semibold mb-4">Our Vision</h2>
        <p className="text-lg text-gray-400">
          Our vision is to create a comprehensive, all-in-one platform where
          gardeners from all walks of life can enhance their skills, engage with
          like-minded individuals, and access premium gardening content. MHB
          Garden strives to make gardening accessible, enjoyable, and
          collaborative for everyone.
        </p>
      </motion.section>

      {/* Platform Features */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-4xl font-semibold mb-4">Platform Features</h2>
        <ul className="list-disc list-inside text-lg text-gray-400">
          <li className="mb-2">
            <strong>Rich Content Creation:</strong> A powerful rich text editor
            for users to create and share gardening guides, tips, and
            techniques.
          </li>
          <li className="mb-2">
            <strong>Community Engagement:</strong> Interact with other users
            through upvotes, comments, and sharing, fostering a lively
            community.
          </li>
          <li className="mb-2">
            <strong>Premium Content:</strong> Access exclusive gardening advice
            and tips through seamless payment integration.
          </li>
          <li className="mb-2">
            <strong>Seasonal Gardening Guides:</strong> Explore tailored content
            based on seasonal gardening needs and plant care.
          </li>
          <li className="mb-2">
            <strong>User Authentication:</strong> Secure login and registration
            to safeguard user accounts and interactions.
          </li>
        </ul>
      </motion.section>

      {/* Our Team */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mb-12"
      >
        <h2 className="text-4xl font-semibold mb-4">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <Image
              src="/path-to-image.jpg"
              alt="Team Member"
              height={200}
              width={200}
              className="w-32 h-32 mx-auto rounded-full mb-4 border-4 border-gray-500"
            />
            <h3 className="text-2xl font-bold text-gray-300">John Doe</h3>
            <p className="text-gray-400">Founder & Lead Gardener</p>
            <p className="mt-2 text-gray-300">
              John brings over 15 years of gardening expertise, with a passion
              for sustainable and organic gardening techniques.
            </p>
          </div>

          <div className="text-center">
            <Image
              src="/path-to-image.jpg"
              height={200}
              width={200}
              alt="Team Member"
              className="w-32 h-32 mx-auto rounded-full mb-4 border-4 border-gray-500"
            />
            <h3 className="text-2xl font-bold text-gray-300">Jane Smith</h3>
            <p className="text-gray-400">Chief Content Officer</p>
            <p className="mt-2 text-gray-300">
              Jane oversees content creation, ensuring that all gardening tips
              and guides are both insightful and easy to follow.
            </p>
          </div>

          {/* Add more team members as needed */}
        </div>
      </motion.section>

      {/* Our Values */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="mb-12"
      >
        <h2 className="text-4xl font-semibold mb-4">Our Values</h2>
        <ul className="list-disc list-inside text-lg text-gray-400">
          <li className="mb-2">
            <strong>Sustainability:</strong> We believe in sustainable gardening
            practices that benefit both the environment and our communities.
          </li>
          <li className="mb-2">
            <strong>Community Focus:</strong> Our platform fosters
            collaboration, learning, and growth among passionate gardeners.
          </li>
          <li className="mb-2">
            <strong>Innovation:</strong> We continuously strive to enhance our
            platform with new features and better user experiences.
          </li>
        </ul>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="text-center"
      >
        <h2 className="text-4xl font-semibold mb-4">
          Join the MHB Garden Community
        </h2>
        <p className="text-lg text-gray-400 mb-6">
          Ready to explore the world of gardening? Join MHB Garden today and
          connect with a passionate community of gardeners.
        </p>
        <a
          href="/contact-us"
          className="text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition-colors duration-300"
        >
          Contact Us
        </a>
      </motion.section>
    </div>
  );
};

export default AboutUs;
