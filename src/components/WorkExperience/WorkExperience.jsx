import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    title: "Digital Marketing Manager",
    company: "Prime Islami Life Insurance Company Ltd.",
    duration: "Jan 2020 – Feb 2024",
    description: "Led digital marketing campaigns, increasing online lead generation by 40%. Managed influencer marketing, boosting social media engagement by 25%."
  },
  {
    title: "Digital Marketing Specialist",
    company: "Fiverr",
    duration: "Jan 2022 – Present",
    description: "Managed email marketing campaigns, improving click-through rates by 15%. Implemented SEO strategies, increasing organic website traffic by 30%."
  }
];

const WorkExperience = () => {
  return (
    <div className="mx-auto p-10 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-center text-blue-600">Work Experience</h2>
      <div className="mt-6 space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-blue-50 p-5 rounded-lg shadow-lg border-l-4 border-blue-500">
            <h3 className="text-xl font-semibold flex items-center">
              <FaBriefcase className="text-blue-500 mr-2" /> {exp.title}
            </h3>
            <p className="text-gray-600">{exp.company} | {exp.duration}</p>
            <p className="text-gray-700 mt-2">{exp.description}</p>
          </div>
        ))}
        </div>
    </div>
  );
};

export default WorkExperience;
