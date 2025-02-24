import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { SiUpwork, SiFiverr } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-semibold mb-3">Follow Me</h2>
        <div className="flex justify-center space-x-4 text-lg ">
          <a
                        href="https://www.linkedin.com/in/seoabdur/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedin className="text-3xl  hover:text-blue-600 transition-colors duration-300" />
                      </a>
                      <a
                        href="https://www.facebook.com/seoabdur"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaFacebook className="text-3xl  hover:text-blue-500 transition-colors duration-300" />
                      </a>
                      <a
                        href="https://www.instagram.com/seoabdur/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaInstagram className="text-3xl  hover:text-pink-500 transition-colors duration-300" />
                      </a>
                      <a
                        href="https://www.upwork.com/freelancers/~seoabdur"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <SiUpwork className="text-3xl  hover:text-green-500 transition-colors duration-300" />
                      </a>
                      <a
                        href="https://www.fiverr.com/seoabdur"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <SiFiverr className="text-3xl  hover:text-green-400 transition-colors duration-300" />
                      </a>
        </div>
        <p className="mt-4 text-sm opacity-75 pb-6">&copy; {new Date().getFullYear()} Zahra IT. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;