import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

function Showcase() {
  const isTablet = useMediaQuery({ maxWidth: 1024 });
  useGSAP(() => {
    gsap.fromTo(
      ".wrapper",
      {
        opacity: 0,
        yPercent: 5,
      },
      {
        opacity: 1,
        yPercent: 0,
        ease: "power1.inOut",
        duration: 0.7,
        scrollTrigger: {
          trigger: ".wrapper",
          start: "top 80%",
          end: "top center",
          scrub: true,
        },
      },
    );

    if (!isTablet) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#showcase",
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
        },
      });

      tl.to(".mask img", {
        transform: "scale(1.4)",
      }).to(".content", { opacity: 1, y: 0, ease: "power1.in" });
    }
  }, [isTablet]);

  return (
    <section id="showcase">
      <div className="media">
        <video src="/videos/game.mp4" loop muted playsInline autoPlay />
        <div className="mask">
          <img src="/mask-logo.svg" alt="Mask" />
        </div>
      </div>

      <div className="content">
        <div className="wrapper">
          <div className="lg:max-w-md">
            <h2>Rocket Chip</h2>
            <div className="mt-7 space-y-5 pe-10">
              <p>
                Introducing{" "}
                <span className="text-white">
                  M4, the next generation of Apple silicon
                </span>
                . M4 powers
              </p>
              <p>
                It drives Apple Intelligence on iPad Pro, so you can write,
                create, and accomplish more with ease. All in a design that’s
                unbelievably thin, light, and powerful.
              </p>
              <p>
                A brand-new display engine delivers breathtaking precision,
                color accuracy, and brightness. And a next-gen GPU with
                hardware-accelerated ray tracing brings console-level graphics
                to your fingertips.
              </p>
              <p className="text-primary cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:text-white">
                Learn more about Apple Intelligence
              </p>
            </div>
          </div>
          <div className="max-w-3xs space-y-14">
            <div className="space-y-2">
              <p>Up to </p>
              <h3>4x faster</h3>
              <p>pro rendering performance than M2</p>
            </div>
            <div className="space-y-2">
              <p>Up to </p>
              <h3>1.5x faster</h3>
              <p>CPU performance than M2</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Showcase;
