import { motion } from "framer-motion";
import { FaArrowUp, FaChartLine, FaGlobe, FaYoutube, FaFacebook } from "react-icons/fa";

const projects = [
  {
    title: "SEO Success - E-commerce Site",
    icon: <FaArrowUp className="text-green-500 text-5xl" />,
    description: "Increased organic traffic by 150% and ranked top 3 for competitive keywords.",
    image: "/images/seo-ranking.png",
  },
  {
    title: "High-Performing Facebook Ad Campaign",
    icon: <FaChartLine className="text-blue-500 text-5xl" />,
    description: "Achieved a 5x ROI with targeted ads, increasing sales and engagement.",
    image: "/images/facebook-ads.png",
  },
  {
    title: "WordPress Website for a SaaS Company",
    icon: <FaGlobe className="text-gray-700 text-5xl" />,
    description: "Built a responsive and SEO-optimized website that boosted lead generation.",
    image: "/images/wordpress-site.png",
  },
  {
    title: "YouTube Video SEO Optimization",
    icon: <FaYoutube className="text-red-500 text-5xl" />,
    description: "Successfully optimized a YouTube video using advanced SEO techniques, achieving a perfect 100/100 vidIQ SEO score. Improved visibility, rankings, and engagement.",
    image: "https://i.ibb.co/6JLmJxRk/youtube-video-seo-optimization.jpg",
  },
  {
    title: "Facebook Ads Campaign Management",
    icon: <FaFacebook className="text-blue-700 text-5xl" />,
    description: "Managed multiple Facebook ad campaigns, including engagement, promotion, and message campaigns. Optimized targeting, budget management, and high-performing ad strategies.",
    image: "https://i.ibb.co/1Gdd44bh/fscamp.jpg",
  },
];

const Portfolio = () => {
  return (
    <div className="container mx-auto py-16 px-4 text-center mt-24">
      <motion.h2
        className="text-4xl font-bold mb-6 text-blue-700 tracking-wide"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        My Portfolio
      </motion.h2>
      <p className="text-gray-600 text-lg mb-12">
        Explore my successful projects, from SEO case studies to high-performing ad campaigns.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="hover:shadow-lg transition-shadow duration-300 bg-white p-6 rounded-2xl border border-gray-200"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center text-center">
              {project.icon}
              <h3 className="text-xl font-semibold mt-4 text-gray-800">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <img
                src={project.image}
                alt={project.title}
                className="mt-4 rounded-lg shadow-md w-full h-48 object-cover"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
