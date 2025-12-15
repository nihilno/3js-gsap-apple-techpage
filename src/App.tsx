import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Features from "./components/features";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Highlights from "./components/highlights";
import Navbar from "./components/navbar";
import Performance from "./components/performance";
import Showcase from "./components/showcase";
import StarProduct from "./components/star-product";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StarProduct />
      <Showcase />
      <Performance />
      <Features />
      <Highlights />
      <Footer />
    </main>
  );
}

export default App;
