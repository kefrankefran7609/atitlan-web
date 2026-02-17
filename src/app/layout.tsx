import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/provider";

export const metadata: Metadata = {
  title:
    "Atitlan Web - #1 Website agency at Lake Atitlan | Web Design & Development",
  description:
    "Atitlan Web is your go-to destination for top-notch web design and development services. We're expert in Webflow and Next.js webistes, delivering stunning, responsive designs that captivate your audience. Elevate your online presence with our tailored solutions today!",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  keywords:
    "Atitlan Web, Atitlan, Web Agency, Website Agency, Web Design, Web Development, Digital Marketing, SEO, Social Media Management, Branding, Graphic Design, E-commerce Solutions, Custom Websites, Responsive Design, User Experience, UX/UI Design, Online Presence, Website Maintenance",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body data-theme="dark">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
