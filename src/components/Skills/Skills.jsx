import { motion } from "framer-motion";
import { FaSearch, FaBullhorn, FaUsers, FaEnvelope, FaLaptopCode, FaYoutube } from "react-icons/fa";

const services = [
  { 
    title: "SEO Optimization", 
    description: "Improve your website's Google ranking, attract organic traffic, and increase conversions with data-driven SEO strategies.", 
    icon: <FaSearch className="text-blue-500 text-4xl" /> 
  },
  { 
    title: "Social Media Marketing", 
    description: "Boost your brand's visibility with strategic Facebook, Instagram, and Google Ads campaigns that drive real engagement and sales.", 
    icon: <FaBullhorn className="text-red-500 text-4xl" /> 
  },
  { 
    title: "Lead Generation", 
    description: "Find high-quality leads and turn them into loyal customers through advanced targeting and conversion-focused marketing funnels.", 
    icon: <FaUsers className="text-green-500 text-4xl" /> 
  },
  { 
    title: "Email Marketing", 
    description: "Maximize your customer retention and engagement with high-converting email campaigns tailored to your audience.", 
    icon: <FaEnvelope className="text-yellow-500 text-4xl" /> 
  },
  { 
    title: "WordPress Website Design", 
    description: "Get a stunning, mobile-friendly, and SEO-optimized website that enhances user experience and boosts business growth.", 
    icon: <FaLaptopCode className="text-purple-500 text-4xl" /> 
  },
  { 
    title: "YouTube SEO", 
    description: "Rank higher on YouTube, increase video views, and grow your audience with strategic video SEO and keyword optimization.", 
    icon: <FaYoutube className="text-red-600 text-4xl" /> 
  },
];


const Skills = () => {
  return (
    <div className="p-10 bg-gradient-to-r from-blue-50 to-blue-100 pt-20 pb-20">
      <h2 className="text-4xl font-extrabold text-center text-blue-700 tracking-wide pb-4">My Skills & Services</h2>
      
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {services.map((service, index) => (
          <motion.div 
            key={index} 
            className="p-8 border rounded-lg shadow-lg bg-white flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            whileHover={{ scale: 1.05, boxShadow: "0px 4px 20px rgba(0, 100, 255, 0.3)" }}
          >
            {service.icon}
            <h3 className="text-2xl font-bold mt-4 text-gray-800">{service.title}</h3>
            <p className="text-gray-600 leading-relaxed mt-2">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
