import ClientHome from "@/components/clientHome";
import { domain } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Homepage - Atitlan Web",
  description:
    "Atitlan Web is a full-service web development agency based at Lake Atitlan, Guatemala. We specialize in creating stunning, responsive websites that help businesses establish a strong online presence and reach their target audience effectively.",
  keywords:
    "Web development, web design, SEO, digital marketing, front-end development, back-end development, full-stack development, responsive design, e-commerce, content management systems, web apps, Lake Atitlan, Guatemala",
  openGraph: {
    title: "Homepage - Atitlan Web",
    description:
      "Atitlan Web is a full-service web development agency based at Lake Atitlan, Guatemala. We specialize in creating stunning, responsive websites that help businesses establish a strong online presence and reach their target audience effectively.",
    images: [
      {
        url: "/atitlan-web-og.jpg",
        width: 1200,
        height: 675,
        alt: "Atitlan Web - Full-Service Web Development Agency at Lake Atitlan, Guatemala",
      },
    ],
    url: `${domain}`,
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical: `${domain}`,
    languages: {
      "es-ES": `${domain}es/`,
      "fr-FR": `${domain}fr/`,
      "de-DE": `${domain}de/`,
      "pt-PT": `${domain}pt/`,
    },
  },
};

const lang = "en";

export default function Home() {
  return <ClientHome lang={lang} />;
}
