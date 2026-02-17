import {
  LangProps,
  ourServices,
  relatedTools,
  seeProjects,
  servicesCards,
} from "@/lib/utils";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SectionHomeServices({ lang }: LangProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        ".animated-line-wrapper",
        {
          top: "-1.5rem",
        },
        {
          top: "calc(100% + 0.25rem)",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 25%",
            end: "bottom 65%",
            scrub: 1,
          },
        },
      );
    }
  }, []);

  return (
    <section ref={sectionRef} id="services">
      <h2>{ourServices[lang]}</h2>
      <div className="service-cards">
        {servicesCards.map((service, i) => (
          <div className="service-card" key={i}>
            {i === 0 && (
              <div className="animated-line-wrapper">
                <div className="animated-line"></div>
              </div>
            )}
            <div className="service-card-image mb-1">
              <Image
                src={service.logo}
                alt={service.name[lang]}
                fill
                sizes="100%"
              />
            </div>
            <h3>{service.name[lang]}</h3>
            <div
              className="text-md mb-1"
              dangerouslySetInnerHTML={{ __html: service.description[lang] }}
            />
            <h3>{relatedTools[lang]}</h3>
            <div className="flex flex-wrap w-full gap-075 mb-1">
              {service.tools.map((tool, i) => (
                <p key={i} className="service-card-tool">
                  {tool}
                </p>
              ))}
            </div>
            <button className="button">{seeProjects[lang]}</button>
          </div>
        ))}
      </div>
    </section>
  );
}
