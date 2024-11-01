import React from "react";
import { motion } from "framer-motion";
import headerImg from '../img/7.webp'
export default function Component() {
  return(
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section
        className="relative h-screen overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Image */}
        <img
          src={headerImg}
          alt="Wind turbines in a field at sunset"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
        {/* Overlay Content */}
        <div className="relative z-20 h-full flex flex-col justify-between p-6 lg:p-12">
          <div>
            <motion.p
              className="text-white text-sm lg:text-base mb-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              #1 Energy provider in the world
            </motion.p>
            <motion.h1
              className="text-white text-4xl lg:text-7xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              New Energy
              <br />
              for the Future
            </motion.h1>
          </div>
          <motion.div
            className="flex justify-between items-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="flex space-x-4">
              <motion.button
                className="bg-white text-black px-4 py-2 rounded-full text-sm"
                whileHover={{ scale: 1.1 }}
              >
                Get in touch
              </motion.button>
              <motion.button
                className="text-green-500 border border-green-500 px-4 py-2 rounded-full text-sm"
                whileHover={{ scale: 1.1 }}
              >
                Our solutions
              </motion.button>
            </div>
            <motion.div
              className="bg-white p-2 rounded-lg shadow-lg hidden lg:block"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <img
                src="/img/7.webp"
                alt="Wind turbine close-up"
                width={100}
                height={100}
                className="rounded"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        className="py-12 px-6 lg:px-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <div className="flex flex-col md:flex-row justify-between max-w-4xl mx-auto">
          <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
            <p className="text-4xl font-bold">6 mil</p>
            <p className="text-sm text-gray-600">
              The company's annual revenue
            </p>
          </motion.div>
          <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
            <p className="text-4xl font-bold">315</p>
            <p className="text-sm text-gray-600">
              Projects completed worldwide
            </p>
          </motion.div>
          <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
            <p className="text-4xl font-bold">120K</p>
            <p className="text-sm text-gray-600">
              Employees work in all parts of the world
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Trust Section */}
      <motion.section
        className="py-12 px-6 lg:px-12 bg-gray-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold mb-6">
            Focusing on quality, we
            <br />
            maintain customer trust
          </h2>
          <p className="text-gray-600 mb-8">
            We ensure that every installation we build has strict quality
            control and meets the highest standards for an environmentally
            friendly and renewable future.
          </p>
          <div className="flex flex-wrap justify-between items-center">
            {["Green", "TataConsult", "Business", "Neospace", "Medtronic"].map(
              (company, index) => (
                <motion.div
                  key={index}
                  className="w-1/2 md:w-1/5 p-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="bg-white rounded-full p-4 shadow-md flex items-center justify-center h-20">
                    <p className="text-gray-400 font-semibold">{company}</p>
                  </div>
                </motion.div>
              )
            )}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
