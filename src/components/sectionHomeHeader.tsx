import {
  fiftyPlus,
  heroAnimatedSubheading,
  heroAnimatedSubheadingWords,
  LangProps,
  liveProjects,
} from "@/lib/utils";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Webiste from "./icons/webiste";

gsap.registerPlugin(ScrollTrigger);

export default function SectionHomeHeader({ lang }: LangProps) {
  // const headerRef = useRef<HTMLDivElement>(null);
  const radialGradientRef = useRef<HTMLDivElement>(null);
  const radialGradient2Ref = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (!headerRef.current) return;

  //   gsap.to(".sticky", {
  //     right: "1.5rem",
  //     bottom: "1.5rem",
  //     transform: "scale(1)",
  //     scrollTrigger: {
  //       trigger: headerRef.current,
  //       start: "100% bottom",
  //       end: "75% bottom",
  //       scrub: 1,
  //     },
  //   });
  // }, []);

  useEffect(() => {
    if (!radialGradientRef.current) return;

    // Create a timeline for smooth continuous animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    // Add animations to the timeline
    tl.to(radialGradientRef.current, {
      y: "-50vh",
      ease: "none",
    })
      .to(radialGradientRef.current, {
        x: "70vw",
        ease: "none",
      })
      .to(radialGradientRef.current, {
        y: "0",
        ease: "none",
      })
      .to(radialGradientRef.current, {
        x: "0",
        ease: "none",
      });
  }, []);

  useEffect(() => {
    if (!radialGradient2Ref.current) return;

    // Create a timeline for smooth continuous animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    // Add animations to the timeline
    tl.to(radialGradient2Ref.current, {
      y: "50vh",
      ease: "none",
    })
      .to(radialGradient2Ref.current, {
        x: "-70vw",
        ease: "none",
      })
      .to(radialGradient2Ref.current, {
        y: "0",
        ease: "none",
      })
      .to(radialGradient2Ref.current, {
        x: "0",
        ease: "none",
      });
  }, []);

  return (
    <header>
      <div className="hero">
        <h1 className="hero-subheading">
          {heroAnimatedSubheading[lang]}
          <span className="hero-subheading-next-line">
            <span className="hero-subheading-animated">
              <ul className="hero-subheading-animated-list">
                {heroAnimatedSubheadingWords[lang].map((word, index) => (
                  <li key={index}>{word}</li>
                ))}
              </ul>
            </span>
          </span>
        </h1>
        <div className="hero-numbers">
          <div className="hero-icon">
            <Webiste />
          </div>
          <div>
            <p className="hero-number">{fiftyPlus[lang]}</p>
            <p className="hero-text">{liveProjects[lang]}</p>
          </div>
        </div>
        {/* <div className="hero-grid">
          <div className="hero-image">
            <Image src="/tierra-atitlan.png" alt="Hero Image 1" fill />
          </div>
          <div className="hero-numbers">
            <div className="hero-icon">
              <Webiste />
            </div>
            <div>
              <p className="hero-number">{fiftyPlus[lang]}</p>
              <p className="hero-text">{liveProjects[lang]}</p>
            </div>
          </div>
          <div className="hero-image">
            <Image src="/tierra-atitlan.png" alt="Hero Image 1" fill />
          </div>
        </div> */}
      </div>
      <div className="radial-gradient-wrapper" ref={radialGradientRef}>
        <div className="radial-gradient"></div>
      </div>
      <div
        className="radial-gradient-wrapper is-right"
        ref={radialGradient2Ref}
      >
        <div className="radial-gradient is-right"></div>
      </div>
    </header>
  );
}
