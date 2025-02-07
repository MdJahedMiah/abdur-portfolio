import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import profileImage from "../../assets/abdur.jpg"; // Import Image

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-500 to-indigo-600 text-white pt-46 pb-30 px-5">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center text-center md:text-left">
        
        {/* Image Section */}
        <motion.div 
          className="md:w-1/3 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src={profileImage} 
            alt="Abdur Rahman"
            className="w-52 h-52 md:w-64 md:h-64 rounded-full shadow-lg border-4 border-white"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div 
          className="md:w-2/3 mt-5 md:mt-0"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Hi, I'm <span className="text-yellow-300">Abdur Rahman</span>
          </h1>
          <motion.p 
            className="text-lg md:text-xl mt-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            A <span className="font-semibold text-yellow-300">Digital Marketer & SEO Expert</span>  
            helping businesses grow online through **SEO, Social Media, Ads, & Lead Generation.**
          </motion.p>

          {/* CTA Buttons */}
          <div className="mt-6 flex justify-center md:justify-start space-x-4">
            <Link to="/contact">
              <motion.button 
                className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded shadow-lg hover:bg-yellow-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Hire Me
              </motion.button>
            </Link>
            <Link to="/portfolio">
              <motion.button 
                className="px-6 py-3 bg-white text-blue-600 font-semibold rounded shadow-lg hover:bg-gray-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                View Portfolio
              </motion.button>
            </Link>
          </div>

          {/* Social Media Icons */}
          <div className="mt-6 flex justify-center md:justify-start space-x-6">
            <a href="https://www.linkedin.com/in/seoabdur/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-3xl hover:text-yellow-300 transition duration-300" />
            </a>
            <a href="https://www.facebook.com/seoabdur" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-3xl hover:text-yellow-300 transition duration-300" />
            </a>
            <a href="https://www.instagram.com/seoabdur/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-3xl hover:text-yellow-300 transition duration-300" />
            </a>
            <a href="https://x.com/seoabdur" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-3xl hover:text-yellow-300 transition duration-300" />
            </a>
          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
