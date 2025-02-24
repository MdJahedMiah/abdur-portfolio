import Hero from "../../components/Hero/Hero"
import Navbar from "../../components/Navbar/Navbar"
import Skills from "../../components/Skills/Skills"
import SocialLinks from "../../components/Footer/Footer"
import Testimonials from "../../components/Testimonials/Testimonials"

const Home = () => {
  return (
    <div>
        <Hero/>
        <Skills/>
        <Testimonials/>
        <SocialLinks/>
    </div>
  )
}

export default Home
