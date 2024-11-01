import React from "react";
import { motion } from "framer-motion";
//Haider

const Navbar = () => (
  <motion.nav
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="flex justify-between items-center p-6 bg-white  h-14"
  >
    <div className="text-2xl font-bold text-green-600">Xurya</div>
    <ul className="hidden md:flex space-x-6">
      {["Home", "About Us", "Features", "Services", "Contact"].map((item) => (
        <li key={item} className="text-gray-700 hover:text-green-600">
          <a href={`#${item.toLowerCase().replace(" ", "-")}`}>{item}</a>
        </li>
      ))}
    </ul>
    <div className="space-x-4">
      <button className="text-gray-700 py-1 px-4 border-black border rounded-full">Log in</button>
      <button className="bg-green-600 text-white py-1.5 px-3 rounded-full">
        Get in touch
      </button>
    </div>
  </motion.nav>
);

export default Navbar;
