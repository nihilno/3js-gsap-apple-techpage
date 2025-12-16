import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

function Highlights() {
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  useGSAP(() => {
    gsap.to([".left-column", ".right-column"], {
      scrollTrigger: {
        trigger: "#highlights",
        start: isMobile ? "bottom bottom" : "top top",
      },
      y: 0,
      opacity: 1,
      stagger: 0.5,
      duration: 1,
      ease: "power1.inOut",
    });
  }, []);
  return (
    <section id="highlights">
      <div id="title">
        <h2>There's never been a better time to upgrade.</h2>
        <h3>Here's what you get with the new MacBook Pro.</h3>
      </div>

      <div className="masonry">
        <div className="left-column">
          <div>
            <img src="/laptop.webp" alt="Laptop" />
            <p>Fly through demanding tasks up to 9.8x faster.</p>
          </div>
          <div>
            <img src="/sun.webp" alt="Sun" />
            <p>
              A stunning <br /> Liquid Retina XDR <br /> display.
            </p>
          </div>
        </div>
        <div className="right-column">
          <div className="apple-gradient">
            <img src="/ai.webp" alt="AI" />
            <p>
              Built for <br /> <span>Apple Intelligence.</span>
            </p>
          </div>
          <div>
            <img src="/battery.webp" alt="Battery" />
            <p>
              Up to <span className="green-gradient">14 more hours</span>{" "}
              battery life.{" "}
              <span className="text-dark-100">(Up to 24 hours total.)</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Highlights;
