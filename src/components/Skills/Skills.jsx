import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaBullhorn, FaUsers, FaEnvelope, FaLaptopCode, FaYoutube } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

const services = [
  { 
    title: "SEO Optimization", 
    description: "Improve your website's Google ranking, attract organic traffic, and increase conversions with data-driven SEO strategies.", 
    icon: <FaSearch className="text-blue-500 text-4xl" />,
    metaDescription: "Improve your website's SEO ranking and boost organic traffic with expert SEO optimization services.",
    metaKeywords: "SEO, website optimization, SEO strategies, increase traffic, SEO expert"
  },
  { 
    title: "Social Media Marketing", 
    description: "Boost your brand's visibility with strategic Facebook, Instagram, and Google Ads campaigns that drive real engagement and sales.", 
    icon: <FaBullhorn className="text-red-500 text-4xl" />,
    metaDescription: "Increase brand visibility with effective social media marketing and Facebook, Instagram, and Google Ads campaigns.",
    metaKeywords: "social media marketing, Facebook Ads, Instagram Ads, Google Ads, social media"
  },
  { 
    title: "Lead Generation", 
    description: "Find high-quality leads and turn them into loyal customers through advanced targeting and conversion-focused marketing funnels.", 
    icon: <FaUsers className="text-green-500 text-4xl" />,
    metaDescription: "Generate high-quality leads and boost sales with conversion-focused marketing strategies and funnels.",
    metaKeywords: "lead generation, marketing funnels, high-quality leads, sales conversion"
  },
  { 
    title: "Email Marketing", 
    description: "Maximize your customer retention and engagement with high-converting email campaigns tailored to your audience.", 
    icon: <FaEnvelope className="text-yellow-500 text-4xl" />,
    metaDescription: "Improve customer retention and engagement with targeted, high-converting email marketing campaigns.",
    metaKeywords: "email marketing, customer retention, high-converting campaigns, email campaigns"
  },
  { 
    title: "WordPress Website Design", 
    description: "Get a stunning, mobile-friendly, and SEO-optimized website that enhances user experience and boosts business growth.", 
    icon: <FaLaptopCode className="text-purple-500 text-4xl" />,
    metaDescription: "Get a beautiful, mobile-optimized, and SEO-friendly WordPress website to improve your business presence online.",
    metaKeywords: "WordPress design, website design, mobile-friendly website, SEO website"
  },
  { 
    title: "YouTube SEO", 
    description: "Rank higher on YouTube, increase video views, and grow your audience with strategic video SEO and keyword optimization.", 
    icon: <FaYoutube className="text-red-600 text-4xl" />,
    metaDescription: "Boost your YouTube video rankings and views with expert YouTube SEO strategies and keyword optimization.",
    metaKeywords: "YouTube SEO, video SEO, YouTube ranking, video optimization, YouTube views"
  }
];

const Skills = () => {
  return (
    <section className="p-10 bg-gradient-to-r from-blue-50 to-blue-100 pt-20 pb-20">
      <h2 className="text-4xl font-extrabold text-center text-blue-700 tracking-wide pb-4">My Skills</h2>
      <p className="text-lg text-center text-gray-600 max-w-5xl mx-auto">
  I specialize in creating result-driven digital marketing strategies. With years of experience, I help businesses enhance their online presence, attract high-quality traffic, and convert leads into loyal customers.
</p>
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {services.map((service, index) => (
          <motion.article 
            key={index} 
            className="p-8 rounded-lg shadow-lg bg-white flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            whileHover={{ scale: 1.05, boxShadow: "0px 4px 20px rgba(0, 100, 255, 0.3)" }}
          >
            {/* Set dynamic meta tags using Helmet */}
            {/* <Helmet>
              <title>{service.title} | Abdur Rahman</title>
              <meta name="description" content={service.metaDescription} />
              <meta name="keywords" content={service.metaKeywords} />
              <meta property="og:title" content={service.title} />
              <meta property="og:description" content={service.metaDescription} />
              <meta property="og:image" content="/path/to/image.jpg" /> {/* Add appropriate image 
            </Helmet> */}

            {service.icon}
            <h3 className="text-2xl font-bold mt-4 text-gray-800">{service.title}</h3>
            <p className="text-gray-600 leading-relaxed mt-2">{service.description}</p>
            <a href={`/service/${service.title.toLowerCase().replace(/\s+/g, '-')}`} className="text-blue-600 hover:text-blue-700 mt-4">
              Learn More
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
