import React from "react";
import {
  Shield,
  CheckCircle,
  Headphones,
  BookOpen,
  Truck,
  BrainCircuit,
} from "lucide-react";
import { motion } from "framer-motion"; // Import motion

<<<<<<< HEAD
const FeaturesSection = () =>{
  const features = [
    {
      icon: <Shield className="text-green-500"/>,
=======
const FeaturesSection = () => {
  const features = [
    {
      icon: <Shield className="text-green-500" />,
>>>>>>> a86adcb171c94eadcf933f64ac450cc0e814a574
      title: "Layered security",
      description:
        "With layered security, we ensure the safety of every unit we provide.",
    },
    {
<<<<<<< HEAD
      icon: <CheckCircle className="text-green-500"/>,
=======
      icon: <CheckCircle className="text-green-500" />,
>>>>>>> a86adcb171c94eadcf933f64ac450cc0e814a574
      title: "Quality control of each part",
      description: "Every unit you send is checked carefully for every detail.",
    },
    {
<<<<<<< HEAD
      icon: <Headphones className="text-green-500"/>,
=======
      icon: <Headphones className="text-green-500" />,
>>>>>>> a86adcb171c94eadcf933f64ac450cc0e814a574
      title: "Reliable customer service",
      description:
        "Our customer service is available 24 hours a week, with qualified people.",
    },
    {
<<<<<<< HEAD
      icon: <BookOpen className="text-green-500"/>,
=======
      icon: <BookOpen className="text-green-500" />,
>>>>>>> a86adcb171c94eadcf933f64ac450cc0e814a574
      title: "Maintenance manual book",
      description:
        "We provide a guidebook that can be used to ensure maximum care.",
    },
    {
<<<<<<< HEAD
      icon: <Truck className="text-green-500"/>,
=======
      icon: <Truck className="text-green-500" />,
>>>>>>> a86adcb171c94eadcf933f64ac450cc0e814a574
      title: "Delivered safely",
      description:
        "Every unit we send arrives safely and quickly, without any obstacles or drama.",
    },
    {
<<<<<<< HEAD
      icon: <BrainCircuit className="text-green-500"/>,
=======
      icon: <BrainCircuit className="text-green-500" />,
>>>>>>> a86adcb171c94eadcf933f64ac450cc0e814a574
      title: "Based on artificial intelligence",
      description:
        "You can control and view each unit from your phone. It’s very easy to use.",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="bg-gray-100 py-12 px-4 md:px-8 lg:px-16">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          We offer <span className="text-green-500">quality</span>, with the{" "}
          <br className="hidden md:block" /> best materials and service
        </h2>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow p-6 text-center flex flex-col items-center"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible" // Trigger animation when in view
            viewport={{ once: true, amount: 0.2 }} // Customize viewport behavior
          >
            <div className="mb-4 text-3xl">{feature.icon}</div>
            <h3 className="font-semibold text-gray-800">{feature.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
