import { FaGraduationCap, FaCheckCircle } from "react-icons/fa";
const education = [
    {
      title: "Master’s in Business Administration (MBA)",
      institution: "National University, Bangladesh",
      year: "Graduated Sep 2022"
    },
    {
      title: "SEO Campaign Training",
      institution: "Banglayfreelancing",
      year: "Apr 2022 – Jul 2022"
    }
  ];
  
  const certifications = [
    {
      title: "Digital Marketing for Freelancing",
      provider: "E-learning and Earning Ltd."
    },
    {
      title: "SEO Full Course Certification",
      provider: "Skyline IT Institute"
    }
  ];
  
  const Education = () => {
    return (
      <div className="mx-auto p-10 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-extrabold text-center text-blue-700">Education & Certifications</h2>
  
        <div className="mt-8">
          <div className="flex items-center">
          <FaGraduationCap className="text-green-500 mr-2 text-2xl font-bold" /> 
          <h3 className="text-2xl font-bold text-gray-800">
          Education
            </h3>
          </div>
          <ul className="mt-3 space-y-3">
            {education.map((edu, index) => (
              <li key={index} className="text-gray-700 font-semibold">
                📚 {edu.title} - <span className="text-gray-500">{edu.institution} ({edu.year})</span>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center mt-8">
          <FaCheckCircle className="text-green-500 mr-2 text-2xl font-bold" /> 
          <h3 className="text-2xl font-bold text-gray-800">
          Certifications
            </h3>
          </div>
          <ul className="mt-3 space-y-3">
            {certifications.map((cert, index) => (
              <li key={index} className="text-gray-700 font-semibold">
                🏆 {cert.title} - <span className="text-gray-500">{cert.provider}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export default Education;
  