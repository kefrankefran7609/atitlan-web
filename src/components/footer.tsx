import { LangProps, letsBuildYourProjectTogether } from "@/lib/utils";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer({ lang }: LangProps) {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!footerRef.current) return;

    gsap.to("body", {
      "--black": "#FFFFFF",
      "--white": "#000000",
      duration: 0.1,
      ease: "none",
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 50%",
        end: "top bottom",
        scrub: 1,
        toggleActions: "play none none reverse",
      },
    });

    // gsap.to(".sticky", {
    //   right: "47%",
    //   bottom: "10dvh",
    //   transform: "scale(2)",
    //   scrollTrigger: {
    //     trigger: footerRef.current,
    //     start: "90% bottom",
    //     end: "top bottom",
    //     scrub: 1,
    //   },
    // });
  }, []);

  return (
    <footer ref={footerRef} className="footer">
      <h2>
        <span
          dangerouslySetInnerHTML={{
            __html: letsBuildYourProjectTogether[lang],
          }}
        />
      </h2>
    </footer>
  );
}
