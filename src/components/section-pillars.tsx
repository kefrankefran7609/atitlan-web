import {
  ourPillars,
  LangProps,
  performanceDescription,
  performance,
  flexibility,
  efficiency,
  communication,
  communicationDescription,
  flexibilityDescription,
  efficiencyDescription,
} from "@/lib/utils";
import Performance from "./icons/performance";
import PillarsCard from "./pillars-card";
import CostEfficient from "./icons/cost-efficient";
import Flexibility from "./icons/flexibility";
import Creativity from "./icons/creativity";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SectionPillars({ lang }: LangProps) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".pillars-card");

      cards.forEach((card) => {
        gsap.fromTo(
          card as gsap.TweenTarget,
          {
            opacity: 0,
            y: "10rem",
            z: "20rem",
            // rotateX: 15, // 3D Tilt
            //rotateZ: 9,
            transformPerspective: 1000, // Necessary for 3D effect
          },
          {
            opacity: 1,
            y: "0rem",
            //rotateX: 0,
            //rotateZ: 0,
            z: 0,
            ease: "power4.out",
            scrollTrigger: {
              trigger: card as Element,
              start: "top 60%", // Starts when card top reaches 90% of viewport
              end: "top 20%", // Finishes as it moves up
              scrub: true, // Smoothly ties animation to scroll
              // toggleActions: "play none none reverse", // Optional: alternative to scrub
            },
          },
        );
      });
    },
    { scope: container },
  );

  return (
    <section className="relative" ref={container}>
      <h2 className="pillars-heading">{ourPillars[lang]}</h2>
      <div className="pillars-layout">
        <PillarsCard
          lang={lang}
          icon={<Performance />}
          name={performance[lang]}
          description={performanceDescription[lang]}
          className="one"
        />
        <PillarsCard
          lang={lang}
          icon={<Creativity />}
          name={efficiency[lang]}
          description={efficiencyDescription[lang]}
          className="two"
        />
        <PillarsCard
          lang={lang}
          icon={<CostEfficient />}
          name={flexibility[lang]}
          description={flexibilityDescription[lang]}
          className="three"
        />
        <PillarsCard
          lang={lang}
          icon={<Flexibility />}
          name={communication[lang]}
          description={communicationDescription[lang]}
          className="four"
        />
      </div>
    </section>
  );
}
