import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import StarProduct from "./components/star-product";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StarProduct />
    </main>
  );
}

export default App;
