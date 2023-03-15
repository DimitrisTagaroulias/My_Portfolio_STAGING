import "./css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Particles from "./components/Particles";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Particles />
      <Navbar />
      <Header />
      <div className="my-info">
        <AboutMe />
        <Services />
        <Experience />
        <Portfolio />
        <Testimonials />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
