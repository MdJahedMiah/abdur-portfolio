import { motion } from "framer-motion";

const testimonials = [
  { 
    name: "John Doe", 
    feedback: "Abdur is a fantastic digital marketer! My website traffic increased by 50% in 3 months.",
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  { 
    name: "Sarah Smith", 
    feedback: "Amazing social media ads! My business got more leads than ever before.",
    image: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  { 
    name: "Michael Lee", 
    feedback: "SEO expert! My website now ranks #1 on Google for my niche.",
    image: "https://randomuser.me/api/portraits/men/3.jpg"
  }
];

const TestimonialsSection = () => {
  return (
    <div className="p-12 bg-gradient-to-r from-purple-50 to-indigo-100 my-1">
      <h2 className="text-4xl font-extrabold text-center text-indigo-700 tracking-wide py-8">
        What My Clients Say
      </h2>
      
      <div className="mt-12 grid gap-8 md:grid-cols-3 mb-8">
        {testimonials.map((testimonial, index) => (
          <motion.div 
            key={index} 
            className="p-6 border rounded-lg shadow-lg bg-white flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-xl"
            whileHover={{ scale: 1.05, boxShadow: "0px 4px 20px rgba(75, 0, 130, 0.3)" }}
          >
            <img 
              src={testimonial.image} 
              alt={testimonial.name} 
              className="w-20 h-20 rounded-full shadow-md border-4 border-purple-300"
            />
            <h3 className="text-xl font-semibold mt-4 text-indigo-700">{testimonial.name}</h3>
            <p className="text-gray-600 leading-relaxed mt-2 italic font-light">
              {testimonial.feedback}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
