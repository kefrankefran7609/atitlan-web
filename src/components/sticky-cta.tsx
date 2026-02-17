import {
  firstConsultation,
  LangProps,
  letsSit,
  letsTalk,
  sendMessage,
} from "@/lib/utils";
import Close from "./icons/close";
import { useEffect, useState } from "react";
import EmailInput from "./input/email";
import Name from "./input/name";
import Message from "./input/message";
import Email from "./icons/email";
import Link from "next/link";
import Phone from "./icons/phone";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GetInTouch({ lang }: LangProps) {
  const [modalOpen, setModalOpen] = useState<"letsTalk" | null>(null);
  const [showH2, setShowH2] = useState<boolean>(false);
  const [showH3, setShowH3] = useState<boolean>(false);
  const [showH4, setShowH4] = useState<boolean>(false);
  const [showContent, setShowContent] = useState<boolean>(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Animation: Top of page -> Corner
      gsap.to(".sticky", {
        right: "1.5rem",
        bottom: "1.5rem",
        scale: 1,
        xPercent: 0,
        yPercent: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "header",
          start: "top top",
          end: "bottom top",
          toggleActions: "play none none reverse",
          invalidateOnRefresh: true,
        },
      });

      // 2. Animation: Corner -> Footer Center
      gsap.to(".sticky", {
        right: "46.05%",
        bottom: "10dvh",
        scale: 2,
        ease: "power2.out",
        // IMPORTANT: This prevents the footer animation from
        // capturing the "large" start values on page load
        immediateRender: false,
        scrollTrigger: {
          trigger: "footer",
          // Trigger slightly earlier to give it space
          start: "top 20%",
          end: "bottom bottom",
          // "play reverse play reverse" is good, but let's ensure
          // it knows where to go back to (the corner)
          toggleActions: "play reverse play reverse",
          invalidateOnRefresh: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setModalOpen(null);
      }
    };

    if (modalOpen) {
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [modalOpen]);

  const handleOpenModal = () => {
    setModalOpen("letsTalk");
    setTimeout(() => {
      setShowH2(true);
    }, 1000);
    setTimeout(() => {
      setShowH3(true);
    }, 1300);
    setTimeout(() => {
      setShowH4(true);
    }, 1400);
    setTimeout(() => {
      setShowContent(true);
    }, 1500);
  };

  const handleCloseModal = () => {
    setShowContent(false);
    setShowH3(false);
    setShowH2(false);
    setShowH4(false);
    setModalOpen(null);
  };

  return (
    <>
      <button className="sticky" onClick={handleOpenModal}>
        <div className="button">{letsTalk[lang]}</div>
      </button>
      <div
        className={`text-align-center sticky-modal${modalOpen === "letsTalk" ? " show" : ""}`}
      >
        <div
          className={`sticky-modal-bg${
            modalOpen === "letsTalk" ? " show" : ""
          }`}
        ></div>
        <div className="overflow-clip">
          <h2 className={`mb-2 hidden-on-load${showH2 ? " show" : ""}`}>
            {letsTalk[lang]}
          </h2>
        </div>
        <div className="overflow-clip">
          <h3
            className={`mb-1 hidden-on-load${showH3 ? " show" : ""}`}
            dangerouslySetInnerHTML={{ __html: firstConsultation[lang] }}
          ></h3>
        </div>
        <div className="mb-2 overflow-clip">
          <h4 className={`hidden-on-load${showH4 ? " show" : ""}`}>
            {letsSit[lang]}
          </h4>
        </div>
        <div className={`sticky-modal-layout${showContent ? " show" : ""}`}>
          <form action="" className="sticky-modal-form">
            <Name lang={lang} />
            <EmailInput lang={lang} />
            <Message lang={lang} />
            <button type="submit" className="button mt-2">
              {sendMessage[lang]}
            </button>
          </form>
          <div>
            <div className="flex mb-1">
              <div className="sticky-modal-icon">
                <Email />
              </div>
              <Link href="mailto:info@atitlanweb.com">info@atitlanweb.com</Link>
            </div>
            <div className="flex">
              <div className="sticky-modal-icon">
                <Phone />
              </div>
              <Link href="tel:+50257882921">+502 5788 2921</Link>
            </div>
          </div>
        </div>
        <button
          className={`sticky-modal-close${showH2 ? " show" : ""}`}
          onClick={handleCloseModal}
        >
          <Close />
        </button>
      </div>
    </>
  );
}
