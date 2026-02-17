import {
  LangProps,
  language,
  ourServices,
  projects,
  whatPeopleSay,
} from "@/lib/utils";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Navbar({ lang }: LangProps) {
  const firstLetterRef = useRef<HTMLSpanElement>(null);
  const secondLetterRef = useRef<HTMLSpanElement>(null);
  const firstLineRef = useRef<HTMLSpanElement>(null);
  const secondLineRef = useRef<HTMLSpanElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

    // // Initial state: letters are at the right end of their line
    // gsap.set([firstLetterRef.current, secondLetterRef.current], {
    //   position: "absolute",
    //   right: 0,
    //   top: "100%",
    //   xPercent: -100,
    // });

    // gsap.set([firstLineRef.current, secondLineRef.current], {
    //   clipPath: "inset(0 0 0 100%)",
    // });

    tl.to({}, { duration: 1 })
      // 1. Letters slide up — staggered
      .to([firstLetterRef.current, secondLetterRef.current], {
        top: "0%",
        duration: 1.6,
        stagger: 0.15,
      })

      // 2. Pause
      .to({}, { duration: 0.2 })
      .to(
        [firstLetterRef.current],
        {
          right: "82%",
          duration: 1.5,
        },

        "<0.15s",
      )
      .to(
        [firstLineRef.current],
        {
          clipPath: "inset(0 0 0 0%)",
          duration: 1.5,
        },
        "<0.05s",
      )
      .to(
        [secondLetterRef.current],
        {
          right: "65%",
          duration: 1.5,
        },
        "<0.15s",
      )
      .to(
        [secondLineRef.current],
        {
          clipPath: "inset(0 0 0 0%)",
          duration: 1.5,
        },
        "<0.05s",
      );
  }, []);

  useEffect(() => {
    let animation: gsap.core.Tween | null = null;

    animation = gsap.to(logoRef.current, {
      scale: 0.25,
      top: "-4.62rem",
      left: "-106.5%",
      scrollTrigger: {
        trigger: logoRef.current,
        start: () => 0,
        end: () => `${window.innerHeight * 0.3}`,
        scrub: 1,
        onUpdate: (self) => {
          if (logoRef.current) {
            logoRef.current.style.pointerEvents =
              self.progress === 1 ? "auto" : "none";
          }
        },
      },
      ease: "power2.out",
    });

    return () => {
      if (animation) animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <nav className="navbar">
      <Link className="navbar-link" href="#services">
        {ourServices[lang]}
      </Link>
      <Link className="navbar-link" href="#projects">
        {projects[lang]}
      </Link>

      <div className="navbar-logo-wrapper">
        <div ref={logoRef} className="navbar-logo">
          <div className="navbar-logo-word">
            <span ref={firstLetterRef} className="navbar-logo-first-letter">
              A
            </span>
            <span className="navbar-text" ref={firstLineRef}>
              titlan
            </span>
          </div>
          <div className="navbar-logo-word">
            <span ref={secondLetterRef} className="navbar-logo-first-letter">
              W
            </span>

            <span className="navbar-text is-second" ref={secondLineRef}>
              eb
            </span>
          </div>
        </div>
      </div>
      <Link className="navbar-link" href="#whatPeopleSay">
        {whatPeopleSay[lang]}
      </Link>
      <button className="navbar-link">{language[lang]}</button>
    </nav>
  );
}
