import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Import icons

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white py-8 mt-10">
      <div className="container mx-auto px-6 flex flex-col items-center justify-center">
        {/* Email Address */}
        <p className="text-lg font-medium mb-4">
          Contact:{" "}
          <a
            href="mailto:akashsamprince1@gmail.com"
            className="text-blue-400 hover:text-blue-500 transition duration-300"
          >
            akashsamprince1@gmail.com
          </a>
        </p>

        {/* Social Links */}
        <div className="flex space-x-6 text-2xl">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/akash-chandrasekar01/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-600 transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Akashchandrasekar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-600 transition duration-300"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>

        {/* Footer Copyright */}
        <p className="mt-6 text-sm text-gray-400">
          © 2025 Akash Samprince. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
