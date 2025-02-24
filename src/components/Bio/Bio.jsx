import profileImage from "../../assets/abdur.jpg";
import { motion } from "framer-motion";

const AboutBio = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-center text-center md:text-left mt-30 p-12">
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
          className="w-52 h-52 md:w-64 md:h-64 rounded-full shadow-lg border-4 border-blue-500"
        />
      </motion.div>

      {/* Text Section */}
      <motion.div 
        className="md:w-2/3 mt-5 md:mt-0 px-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
          <h1 className="text-4xl font-bold text-blue-600">About Me</h1>
      <p className="text-gray-700 text-lg mt-4 leading-relaxed">
        I’m <span className="font-semibold text-blue-500">Abdur Rahman</span>, a passionate <strong>Digital Marketer & SEO Expert</strong> 
        with over <strong>2+ years of experience</strong> in helping businesses grow online. I specialize in 
        <strong> SEO, Social Media Marketing, Paid Ads, Lead Generation, and Website Design.</strong> 
        My mission is to provide <strong>data-driven strategies</strong> that maximize your 
        <strong> brand visibility and revenue.</strong>
      </p>
      </motion.div>
    </div>
  );
};

export default AboutBio;
