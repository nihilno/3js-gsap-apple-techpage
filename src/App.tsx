import Features from "./components/features";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Highlights from "./components/highlights";
import LoaderOverlay from "./components/loader";
import Navbar from "./components/navbar";
import Performance from "./components/performance";
import Showcase from "./components/showcase";
import StarProduct from "./components/star-product";

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
      <LoaderOverlay />
    </main>
  );
}

export default App;
