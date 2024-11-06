import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
//Haider

const Navbar = () => (
  <motion.nav
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="flex justify-between items-center p-6 bg-white  h-22"
  >
    <Link to={'/'}>
    <div className="text-3xl font-bold text-green-600">Xurya</div>
    </Link>
    <ul className="hidden md:flex space-x-6">
      <Link to={'/'}>
      <li className="text-gray-700 text-[20px] hover:text-green-600">Home</li>
      </Link>
      <Link to={'/contact'}>
      <li className="text-gray-700 text-[20px] hover:text-green-600">Contact Us</li>
      </Link>
      <Link to={'/test'}>
      <li className="text-gray-700 text-[20px] hover:text-green-600">Testimonials</li>
      </Link>
      <li className="text-gray-700 text-[20px] hover:text-green-600">About Us</li>
    </ul>
    <div className="space-x-4">
      <button className="text-gray-700 py-1 px-4  border-black border rounded-full">Log in</button>
      <button className="bg-green-600 text-white py-1.5 px-3 rounded-full">
        Get in touch
      </button>
    </div>
  </motion.nav>
);

export default Navbar;
