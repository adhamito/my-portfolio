import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Hero from "./components/hero/Hero";
import SocialLinks from "./components/SocialLinks";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="container">
      <Header />

      <Hero />
      <SocialLinks />
      <Main />

      <Contact />

      <Footer />
    </div>
  );
}

export default App;
