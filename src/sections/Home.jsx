import Navbar from '../components/Navbar';
import HeroSlider from '../components/HeroSlider';
import About from '../components/About';
import Services from '../components/Services';
import Products from '../components/Products';
import Management from '../components/Management';
import HSE from '../components/HSE';
import Clients from '../components/Clients';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="min-h-screen bg-light-bg">
            <Navbar />
            <HeroSlider />
            <About />
            <Services />
            <Products />
            <Management />
            <HSE />
            <Clients />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;
