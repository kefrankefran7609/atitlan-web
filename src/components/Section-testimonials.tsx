import {
  LangProps,
  seeProject,
  testimonials,
  whatOurClientsSay,
} from "@/lib/utils";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperRef } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Arrow from "./icons/arrow";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function SectionTestimonials({ lang }: LangProps) {
  const swiperRef = useRef<SwiperRef>(null);
  const previousSlideRef = useRef<number>(0);

  const animateSlide = () => {
    if (!swiperRef.current?.swiper) return;

    const swiper = swiperRef.current.swiper;
    const activeIndex = swiper.activeIndex;
    const previousIndex = previousSlideRef.current;

    // Get slides
    const activeSlide = swiper.slides[activeIndex];
    const previousSlide = swiper.slides[previousIndex];

    // Animate out previous slide
    if (previousSlide && previousIndex !== activeIndex) {
      const previousElements = previousSlide.querySelectorAll(
        ".testimonial-content > *",
      );
      gsap.to(previousElements, {
        y: "10rem",
        opacity: 0,
        duration: 1.1,
        ease: "none",
        stagger: 0.05,
      });
    }

    // Animate in active slide
    if (activeSlide) {
      const activeElements = activeSlide.querySelectorAll(
        ".testimonial-content > *",
      );

      // Reset positions and opacity
      gsap.set(activeElements, { y: "10rem", opacity: 0 });

      // Animate in with stagger
      gsap.to(activeElements, {
        y: "0rem",
        opacity: 1,
        duration: 1.8,
        ease: "expo.out",
        stagger: 0.1,
        delay: 0.3, // Small delay to let previous slide animate out
      });
    }

    // Update previous slide reference
    previousSlideRef.current = activeIndex;
  };

  useEffect(() => {
    // Initial animation
    setTimeout(() => animateSlide(), 100);
  }, []);

  return (
    <section id="whatPeopleSay">
      <h2>{whatOurClientsSay[lang]}</h2>
      <div className="testimonials-layout">
        <Swiper
          ref={swiperRef}
          className="testimonials"
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          grabCursor={true}
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={1200}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
            disabledClass: "is-disabled",
          }}
          onSlideChange={animateSlide}
        >
          {testimonials[lang].map((testimonial, index) => (
            <SwiperSlide key={index} className="testimonial-card">
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <h3 className="testimonial">{testimonial.testimonial}</h3>
                  <p className="testimonial-name">{testimonial.name}</p>
                  <p className="testimonial-position">{testimonial.position}</p>
                  <div className="button-group aligned-center">
                    <a
                      href={testimonial.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button"
                    >
                      {seeProject[lang]}
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-buttons">
          <button className="swiper-button swiper-prev">
            <Arrow />
          </button>
          <button className="swiper-button is-right swiper-next">
            <Arrow />
          </button>
        </div>
      </div>
    </section>
  );
}
