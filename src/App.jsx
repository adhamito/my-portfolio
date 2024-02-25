import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Hero from "./components/hero/Hero";
import SocialLinks from "./components/SocialLinks";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="container">
      <Header />

      <Hero />
      <SocialLinks />
      <Main />
      <Portfolio />
      <Experience />

      <Contact />
      <SocialLinks />
      <Footer />
    </div>
  );
}

export default App;
