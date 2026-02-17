"use client";

import { LangProps } from "@/lib/utils";
import SectionHomeHeader from "./sectionHomeHeader";
import SectionHomeServices from "./sectionHomeServices";
import SectionHomeProjects from "./sectionHomeProjects";
import useLenis from "@/hooks/lenis";
import GetInTouch from "./sticky-cta";
import Footer from "./footer";
import Navbar from "./navbar";
import SectionTestimonials from "./Section-testimonials";
import SectionPillars from "./section-pillars";

export default function ClientHome({ lang }: LangProps) {
  useLenis();
  return (
    <>
      <Navbar lang={lang} />
      <SectionHomeHeader lang={lang} />
      <SectionHomeServices lang={lang} />
      <SectionHomeProjects lang={lang} />
      <SectionPillars lang={lang} />
      <SectionTestimonials lang={lang} />
      <GetInTouch lang={lang} />
      <Footer lang={lang} />
    </>
  );
}
