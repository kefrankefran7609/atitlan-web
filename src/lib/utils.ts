import { url } from "inspector";

// Types
export type SupportedLang = "en" | "es" | "fr" | "pt" | "de";

export type LangProps = {
  lang: SupportedLang;
};

export type langLinkProps = {
  name: string;
  short: string;
  href: string;
};

export type NavbarProps = {
  lang: SupportedLang;
  navLangLink: langLinkProps[];
  className?: string;
  logoAnimation?: boolean;
  slug?: string;
};

export const domain = "https://atitlanweb.com/";

export const h1 = {
  en: "#1 website agency at lake Atitlan",
  es: "#1 agencia de sitios web en el lago Atitlán",
  fr: "#1 agence web au lac Atitlan",
  de: "#1 Webagentur am Lago Atitlan",
  pt: "#1 agência web no lago Atitlan",
};

export const h1sub = {
  en: "We create stunning websites that drive results.",
  es: "Creamos sitios web impresionantes que generan resultados.",
  fr: "Nous créons des sites web époustouflants qui génèrent des résultats.",
  de: "Wir erstellen atemberaubende Websites, die Ergebnisse liefern.",
  pt: "Criamos sites impressionantes que geram resultados.",
};

export const tags = [
  {
    en: "Web Design",
    es: "Diseño Web",
    fr: "Conception Web",
    de: "Webdesign",
    pt: "Design de Sites",
  },
  {
    en: "Web Development",
    es: "Desarrollo Web",
    fr: "Développement Web",
    de: "Webentwicklung",
    pt: "Desenvolvimento Web",
  },
  {
    en: "Automation",
    es: "Automatización",
    fr: "Automatisation",
    de: "Automatisierung",
    pt: "Automação",
  },
  {
    en: "SEO",
    es: "SEO",
    fr: "SEO",
    de: "SEO",
    pt: "SEO",
  },
  {
    en: "Performance",
    es: "Rendimiento",
    fr: "Performance",
    de: "Leistung",
    pt: "Desempenho",
  },
  {
    en: "Accessibility",
    es: "Accesibilidad",
    fr: "Accessibilité",
    de: "Barrierefreiheit",
    pt: "Acessibilidade",
  },
];

export const cta = {
  en: "Let's talk",
  es: "Hablemos",
  fr: "Parlons-en",
  de: "Lass uns reden",
  pt: "Vamos conversar",
};

export const expertise = {
  en: "Our Expertise",
  es: "Nuestra Experiencia",
  fr: "Notre Expertise",
  de: "Unsere Expertise",
  pt: "Nossa Especialização",
};

export const ourServices = {
  en: "Services",
  es: "Servicios",
  fr: "Services",
  de: "Dienstleistungen",
  pt: "Serviços",
};

export const nextjsTools = [
  "Payload CMS",
  "Cloudflare",
  "PostgreSQL",
  "NoSQL",
  "MongoDB",
  "Railway",
  "Vercel",
  "Netlify",
  "SendGrid",
  "Resend",
  "Plausible",
  "Stripe",
  "N8N",
  "GSAP",
  "Typescript",
  "MCP server",
  "Custom Booking System",
  "Lenis Scroll",
  "Lottie",
];

export const webflowTools = [
  "Airtable",
  "Xano",
  "Make",
  "N8N",
  "Zapier",
  "Weglot",
  "Memberstack",
  "Finsweet",
  "Client first",
  "Plausible",
  "Google Analytics",
  "GSAP",
  "CMS",
  "E-commerce",
  "Foxy.io",
  "Enzuzo",
  "Lenis Scroll",
  "Lottie",
  "Swiper",
];

export const focusOn = [
  {
    en: "Speed",
    es: "Velocidad",
    fr: "Vitesse",
    de: "Geschwindigkeit",
    pt: "Velocidade",
  },
  {
    en: "SEO",
    es: "SEO",
    fr: "SEO",
    de: "SEO",
    pt: "SEO",
  },
  {
    en: "Accessibility",
    es: "Accesibilidad",
    fr: "Accessibilité",
    de: "Barrierefreiheit",
    pt: "Acessibilidade",
  },
  {
    en: "Security",
    es: "Seguridad",
    fr: "Sécurité",
    de: "Sicherheit",
    pt: "Segurança",
  },
  {
    en: "Unique design",
    es: "Diseño único",
    fr: "Design unique",
    de: "Einzigartiges Design",
    pt: "Design único",
  },
  {
    en: "Analitics",
    es: "Analítica",
    fr: "Analytique",
    de: "Analytik",
    pt: "Análise",
  },
];

export const servicesCards = [
  {
    name: {
      en: "Why Next.js?",
      es: "¿Por qué Next.js?",
      fr: "Pourquoi Next.js ?",
      de: "Warum Next.js?",
      pt: "Por que Next.js?",
    },
    logo: "/next.js-white.png",
    description: {
      en: "I use Next.js because it’s one of the most powerful and flexible frameworks for building modern, high-performance web applications. As a web developer, I value speed, scalability, and control — and Next.js delivers all three. It allows me to build fast, SEO-friendly websites and apps with server-side rendering (SSR), static generation, and API routes all in one unified environment. <br /> <br />When combined with Payload CMS, MongoDB or PostgreSQL, and deployments on Railway or Vercel, it becomes a complete ecosystem — giving me the freedom to manage both content and backend logic efficiently while keeping everything secure and maintainable. This stack is ideal for complex, data-driven projects like marketplaces, booking platforms, or custom dashboards where performance and scalability matter most. <br /> <br /> Next.js is more than just a framework — it’s a full toolkit for creating web experiences that are lightning-fast, dynamic, and future-proof, while maintaining developer efficiency and long-term flexibility.",
      es: "Utilizo Next.js porque es uno de los frameworks más potentes y flexibles para construir aplicaciones web modernas y de alto rendimiento. Como desarrollador web, valoro la velocidad, la escalabilidad y el control, y Next.js ofrece los tres. Me permite crear sitios web y aplicaciones rápidas y optimizadas para SEO con renderizado del lado del servidor (SSR), generación estática y rutas API, todo en un entorno unificado. <br /> <br />Cuando se combina con Payload CMS, MongoDB o PostgreSQL y despliegues en Railway o Vercel, se convierte en un ecosistema completo, brindándome la libertad de gestionar tanto el contenido como la lógica del backend de manera eficiente, manteniendo todo seguro y mantenible. Esta pila es ideal para proyectos complejos y basados en datos como mercados, plataformas de reservas o paneles personalizados donde el rendimiento y la escalabilidad son lo más importante. <br /> <br /> Next.js es más que un framework: es un conjunto completo de herramientas para crear experiencias web que son ultrarrápidas, dinámicas y a prueba de futuro, manteniendo la eficiencia del desarrollador y la flexibilidad a largo plazo.",
      fr: "J'utilise Next.js car c'est l'un des frameworks les plus puissants et flexibles pour construire des applications web modernes et performantes. En tant que développeur web, j'apprécie la vitesse, l'évolutivité et le contrôle - et Next.js offre les trois. Il me permet de créer des sites web et des applications rapides et optimisées pour le référencement avec le rendu côté serveur (SSR), la génération statique et les routes API, le tout dans un environnement unifié. <br /> <br /> Lorsqu'il est combiné avec Payload CMS, MongoDB ou PostgreSQL et des déploiements sur Railway ou Vercel, il devient un écosystème complet, me donnant la liberté de gérer à la fois le contenu et la logique backend de manière efficace tout en gardant tout sécurisé et maintenable. Cette pile est idéale pour les projets complexes et axés sur les données tels que les places de marché, les plateformes de réservation ou les tableaux de bord personnalisés où la performance et l'évolutivité sont primordiales. <br /> <br /> Next.js est plus qu'un framework - c'est une boîte à outils complète pour créer des expériences web ultra-rapides, dynamiques et à l'épreuve du temps, tout en maintenant l'efficacité du développeur et la flexibilité à long terme.",
      de: "Ich verwende Next.js, weil es eines der leistungsstärksten und flexibelsten Frameworks zum Erstellen moderner, leistungsstarker Webanwendungen ist. Als Webentwickler schätze ich Geschwindigkeit, Skalierbarkeit und Kontrolle – und Next.js bietet alle drei. Es ermöglicht mir, schnelle, SEO-freundliche Websites und Apps mit serverseitigem Rendering (SSR), statischer Generierung und API-Routen in einer einheitlichen Umgebung zu erstellen. <br /> <br /> In Kombination mit Payload CMS, MongoDB oder PostgreSQL und Deployments auf Railway oder Vercel wird es zu einem kompletten Ökosystem – das mir die Freiheit gibt, sowohl Inhalte als auch Backend-Logik effizient zu verwalten und dabei alles sicher und wartbar zu halten. Dieser Stack ist ideal für komplexe, datengetriebene Projekte wie Marktplätze, Buchungsplattformen oder benutzerdefinierte Dashboards, bei denen Leistung und Skalierbarkeit am wichtigsten sind. <br /> <br /> Next.js ist mehr als nur ein Framework – es ist ein vollständiges Toolkit zur Erstellung von Web-Erlebnissen, die blitzschnell, dynamisch und zukunftssicher sind und gleichzeitig die Effizienz der Entwickler und die langfristige Flexibilität bewahren.",
      pt: "Eu uso o Next.js porque é um dos frameworks mais poderosos e flexíveis para construir aplicações web modernas e de alto desempenho. Como desenvolvedor web, valorizo velocidade, escalabilidade e controle - e o Next.js oferece os três. Ele me permite criar sites e aplicativos rápidos e otimizados para SEO com renderização do lado do servidor (SSR), geração estática e rotas de API, tudo em um ambiente unificado. <br /> <br /> Quando combinado com o Payload CMS, MongoDB o PostgreSQL e implantações no Railway ou Vercel, torna-se um ecossistema completo - dando-me a liberdade de gerenciar tanto o conteúdo quanto a lógica de backend de forma eficiente, mantendo tudo seguro e sustentável. Essa pilha é ideal para projetos complexos e orientados por dados, como marketplaces, plataformas de reservas ou painéis personalizados, onde desempenho e escalabilidade são mais importantes. <br /> <br /> O Next.js é mais do que apenas um framework - é um conjunto completo de ferramentas para criar experiências web que são incrivelmente rápidas, dinâmicas e à prova de futuro, mantendo a eficiência do desenvolvedor e a flexibilidade a longo prazo.",
    },
    tools: nextjsTools,
    buttonLink: "#webflow-projects",
  },
  {
    name: {
      en: "Why Webflow?",
      es: "¿Por qué Webflow?",
      fr: "Pourquoi Webflow ?",
      de: "Warum Webflow?",
      pt: "Por que Webflow?",
    },
    logo: "/webflow-white.png",
    description: {
      en: "I use Webflow because it combines the freedom of custom development with the speed and precision of a modern design tool. As a web developer, I value full creative control — and Webflow allows me to build visually stunning, responsive websites without sacrificing clean, efficient code. It bridges the gap between design and functionality, making it easier to create dynamic, CMS-powered sites that clients can easily edit and manage themselves. <br /> <br /> With Webflow, I can focus on crafting seamless user experiences, optimizing performance, and bringing ideas to life visually — all while maintaining the flexibility to integrate advanced interactions, animations, and custom logic when needed. It’s an all-in-one platform that empowers both developers and designers to build professional, scalable websites faster and smarter. <br /> <br /> Simply put: Webflow lets me design, build, and launch high-quality websites that look great, perform flawlessly, and allow clients to confidently update their own content while their business grows.",
      es: "Utilizo Webflow porque combina la libertad del desarrollo personalizado con la velocidad y precisión de una herramienta de diseño moderna. Como desarrollador web, valoro el control creativo total, y Webflow me permite crear sitios web visualmente impresionantes y responsivos sin sacrificar un código limpio y eficiente. Cierra la brecha entre el diseño y la funcionalidad, facilitando la creación de sitios dinámicos impulsados por CMS que los clientes pueden editar y gestionar fácilmente por sí mismos. <br /> <br /> Con Webflow, puedo centrarme en crear experiencias de usuario fluidas, optimizar el rendimiento y dar vida a las ideas visualmente, todo mientras mantengo la flexibilidad para integrar interacciones avanzadas, animaciones y lógica personalizada cuando sea necesario. Es una plataforma todo en uno que empodera tanto a desarrolladores como a diseñadores para construir sitios web profesionales y escalables de manera más rápida e inteligente. <br /> <br /> En resumen: Webflow me permite diseñar, construir y lanzar sitios web de alta calidad que se ven geniales, funcionan perfectamente y permiten a los clientes actualizar su propio contenido con confianza mientras su negocio crece.",
      fr: "J'utilise Webflow car il combine la liberté du développement personnalisé avec la vitesse et la précision d'un outil de conception moderne. En tant que développeur web, j'apprécie le contrôle créatif total - et Webflow me permet de créer des sites web visuellement époustouflants et responsives sans sacrifier un code propre et efficace. Il comble le fossé entre le design et la fonctionnalité, facilitant la création de sites dynamiques alimentés par CMS que les clients peuvent facilement éditer et gérer eux-mêmes. <br /> <br /> Avec Webflow, je peux me concentrer sur la création d'expériences utilisateur fluides, l'optimisation des performances et la mise en vie des idées visuellement - tout en maintenant la flexibilité d'intégrer des interactions avancées, des animations et une logique personnalisée lorsque cela est nécessaire. C'est une plateforme tout-en-un qui permet aux développeurs et aux designers de construire des sites web professionnels et évolutifs plus rapidement et plus intelligemment. <br /> <br /> En résumé : Webflow me permet de concevoir, construire et lancer des sites web de haute qualité qui ont fière allure, fonctionnent parfaitement et permettent aux clients de mettre à jour leur propre contenu en toute confiance pendant que leur entreprise se développe.",
      de: "Ich verwende Webflow, weil es die Freiheit der individuellen Entwicklung mit der Geschwindigkeit und Präzision eines modernen Design-Tools kombiniert. Als Webentwickler schätze ich volle kreative Kontrolle – und Webflow ermöglicht es mir, visuell beeindruckende, responsive Websites zu erstellen, ohne sauberen, effizienten Code zu opfern. Es überbrückt die Lücke zwischen Design und Funktionalität und erleichtert die Erstellung dynamischer, CMS-gesteuerter Websites, die Kunden selbst einfach bearbeiten und verwalten können. <br /> <br /> Mit Webflow kann ich mich darauf konzentrieren, nahtlose Benutzererlebnisse zu schaffen, die Leistung zu optimieren und Ideen visuell zum Leben zu erwecken – und dabei die Flexibilität beibehalten, bei Bedarf fortschrittliche Interaktionen, Animationen und benutzerdefinierte Logik zu integrieren. Es ist eine All-in-One-Plattform, die sowohl Entwicklern als auch Designern ermöglicht, professionelle, skalierbare Websites schneller und intelligenter zu erstellen. <br /> <br /> Kurz gesagt: Webflow ermöglicht es mir, hochwertige Websites zu entwerfen, zu erstellen und zu starten, die großartig aussehen, einwandfrei funktionieren und es den Kunden ermöglichen, ihre eigenen Inhalte selbstbewusst zu aktualisieren, während ihr Geschäft wächst.",
      pt: "Eu uso o Webflow porque ele combina a liberdade do desenvolvimento personalizado com a velocidade e precisão de uma ferramenta de design moderna. Como desenvolvedor web, valorizo o controle criativo total - e o Webflow me permite construir sites visualmente impressionantes e responsivos sem sacrificar um código limpo e eficiente. Ele preenche a lacuna entre design e funcionalidade, facilitando a criação de sites dinâmicos alimentados por CMS que os clientes podem facilmente editar e gerenciar por conta própria. <br /> <br /> Com o Webflow, posso me concentrar em criar experiências de usuário perfeitas, otimizar o desempenho e dar vida às ideias visualmente - tudo isso mantendo a flexibilidade para integrar interações avançadas, animações e lógica personalizada quando necessário. É uma plataforma tudo-em-um que capacita tanto desenvolvedores quanto designers a construir sites profissionais e escaláveis de forma mais rápida e inteligente. <br /> <br /> Simplificando: o Webflow me permite projetar, construir e lançar sites de alta qualidade que têm uma ótima aparência, funcionam perfeitamente e permitem que os clientes atualizem seu próprio conteúdo com confiança enquanto seus negócios crescem.",
    },
    tools: webflowTools,
    buttonLink: "#webflow-projects",
  },
];

export const projectsCards = [
  {
    name: "Lake Atitlan Community",
    image: "/lake-atitlan-community.png",
    platform: "Next.js",
    shortDescription: {
      en: "The Lake Atitlán Community is a comprehensive listing and resource hub designed for both residents and tourists around Lake Atitlán, Guatemala. The platform serves as a central space where users can discover, share, and interact with local content, from events and accommodations to services and activities, creating a vibrant and connected community online.",
      es: "La Comunidad del Lago Atitlán es un centro integral de listados y recursos diseñado tanto para residentes como para turistas alrededor del Lago Atitlán, Guatemala. La plataforma sirve como un espacio central donde los usuarios pueden descubrir, compartir e interactuar con contenido local, desde eventos y alojamientos hasta servicios y actividades, creando una comunidad vibrante y conectada en línea.",
      fr: "Lake Atitlan Community est une plateforme complète de listes et de ressources conçue à la fois pour les résidents et les touristes autour du Lac Atitlán, au Guatemala. La plateforme sert d'espace central où les utilisateurs peuvent découvrir, partager et interagir avec du contenu local, des événements et hébergements aux services et activités, créant ainsi une communauté en ligne dynamique et connectée.",
      de: "Die Lake Atitlán Community ist ein umfassendes Verzeichnis- und Ressourcenportal, das sowohl für Einwohner als auch für Touristen rund um den Lake Atitlán in Guatemala konzipiert wurde. Die Plattform dient als zentraler Ort, an dem Benutzer lokale Inhalte entdecken, teilen und interagieren können – von Veranstaltungen und Unterkünften bis hin zu Dienstleistungen und Aktivitäten – und so eine lebendige und vernetzte Online-Community schaffen.",
      pt: "A Lake Atitlán Community é um hub abrangente de listagens e recursos projetado tanto para residentes quanto para turistas ao redor do Lago Atitlán, Guatemala. A plataforma serve como um espaço central onde os usuários podem descobrir, compartilhar e interagir com conteúdo local, desde eventos e acomodações até serviços e atividades, criando uma comunidade vibrante e conectada online.",
    },
    description: {
      en: "The Lake Atitlán Community is a comprehensive listing and resource hub designed for both residents and tourists around Lake Atitlán, Guatemala. The platform serves as a central space where users can discover, share, and interact with local content, from events and accommodations to services and activities, creating a vibrant and connected community online. <br /> <br /> This project was built using Next.js for the frontend and Payload CMS for flexible content management, providing a scalable and maintainable structure. The platform is deployed and hosted on Railway, using PostgreSQL as the database for reliable and secure data storage. User behavior and engagement are tracked with Plausible Analytics, allowing insights without compromising privacy. <br /> <br /> Key features include user sign-up and login, allowing registered members to post their own content and media, save favorites, leave reviews, and subscribe to premium content or notifications. Payments and subscriptions are securely handled through Stripe, ensuring a smooth and trustworthy transaction process. <br /> <br /> During development, the main focus areas were unique design, security, SEO, accessibility, analytics, speed, and performance. The platform emphasizes a visually appealing and intuitive user interface while maintaining rigorous standards for web accessibility and search engine optimization. Performance was optimized to ensure fast loading times and smooth interactions, providing a seamless experience for users on any device. <br /> <br />This project demonstrates the integration of a modern tech stack to build a complex, community-driven platform that balances functionality, security, and aesthetics. By combining dynamic content management, interactive features, and real-time analytics, the Lake Atitlán Community website not only connects locals and visitors but also sets a standard for high-quality, sustainable, and user-focused web development.",
      es: "La Comunidad del Lago Atitlán es un centro integral de listados y recursos diseñado tanto para residentes como para turistas alrededor del Lago Atitlán, Guatemala. La plataforma sirve como un espacio central donde los usuarios pueden descubrir, compartir e interactuar con contenido local, desde eventos y alojamientos hasta servicios y actividades, creando una comunidad vibrante y conectada en línea. <br /> <br /> Este proyecto fue construido utilizando Next.js para el frontend y Payload CMS para una gestión de contenido flexible, proporcionando una estructura escalable y mantenible. La plataforma está desplegada y alojada en Railway, utilizando PostgreSQL como base de datos para un almacenamiento de datos confiable y seguro. El comportamiento y la participación de los usuarios se rastrean con Plausible Analytics, permitiendo obtener información sin comprometer la privacidad. <br /> <br /> Las características clave incluyen el registro e inicio de sesión de usuarios, permitiendo a los miembros registrados publicar su propio contenido y medios, guardar favoritos, dejar reseñas y suscribirse a contenido premium o notificaciones. Los pagos y suscripciones se manejan de manera segura a través de Stripe, asegurando un proceso de transacción fluido y confiable. <br /> <br /> Durante el desarrollo, las áreas principales de enfoque fueron el diseño único, la seguridad, el SEO, la accesibilidad, la analítica, la velocidad y el rendimiento. La plataforma enfatiza una interfaz de usuario visualmente atractiva e intuitiva mientras mantiene rigurosos estándares de accesibilidad web y optimización para motores de búsqueda. El rendimiento se optimizó para garantizar tiempos de carga rápidos e interacciones fluidas, proporcionando una experiencia perfecta para los usuarios en cualquier dispositivo. <br /> <br /> Este proyecto demuestra la integración de una pila tecnológica moderna para construir una plataforma compleja impulsada por la comunidad que equilibra funcionalidad, seguridad y estética. Al combinar la gestión dinámica de contenido, características interactivas y análisis en tiempo real, el sitio web de la Comunidad del Lago Atitlán no solo conecta a locales y visitantes sino que también establece un estándar para el desarrollo web de alta calidad, sostenible y centrado en el usuario.",
      fr: "Lake Atitlan Community est une plateforme complète de listes et de ressources conçue à la fois pour les résidents et les touristes autour du Lac Atitlán, au Guatemala. La plateforme sert d'espace central où les utilisateurs peuvent découvrir, partager et interagir avec du contenu local, des événements et hébergements aux services et activités, créant ainsi une communauté en ligne dynamique et connectée. <br /> <br /> Ce projet a été construit en utilisant Next.js pour le frontend et Payload CMS pour une gestion de contenu flexible, offrant une structure évolutive et maintenable. La plateforme est déployée et hébergée sur Railway, utilisant PostgreSQL comme base de données pour un stockage de données fiable et sécurisé. Le comportement et l'engagement des utilisateurs sont suivis avec Plausible Analytics, permettant d'obtenir des insights sans compromettre la vie privée. <br /> <br /> Les fonctionnalités clés incluent l'inscription et la connexion des utilisateurs, permettant aux membres enregistrés de publier leur propre contenu et médias, d'enregistrer des favoris, de laisser des avis et de s'abonner à du contenu premium ou à des notifications. Les paiements et abonnements sont gérés en toute sécurité via Stripe, assurant un processus de transaction fluide et fiable. <br /> <br /> Pendant le développement, les principaux domaines d'attention étaient le design unique, la sécurité, le SEO, l'accessibilité, l'analytique, la vitesse et la performance. La plateforme met l'accent sur une interface utilisateur visuellement attrayante et intuitive tout en maintenant des normes rigoureuses en matière d'accessibilité web et d'optimisation pour les moteurs de recherche. La performance a été optimisée pour garantir des temps de chargement rapides et des interactions fluides, offrant une expérience transparente aux utilisateurs sur n'importe quel appareil. <br /> <br /> Ce projet démontre l'intégration d'une pile technologique moderne pour construire une plateforme complexe axée sur la communauté qui équilibre fonctionnalité, sécurité et esthétique. En combinant une gestion dynamique du contenu, des fonctionnalités interactives et des analyses en temps réel, le site web de la Communauté du Lac Atitlán connecte non seulement les locaux et les visiteurs mais établit également une norme pour le développement web de haute qualité, durable et axé sur l'utilisateur.",
      de: "Die Lake Atitlán Community ist ein umfassendes Verzeichnis- und Ressourcenportal, das sowohl für Einwohner als auch für Touristen rund um den Lake Atitlán in Guatemala konzipiert wurde. Die Plattform dient als zentraler Ort, an dem Benutzer lokale Inhalte entdecken, teilen und interagieren können – von Veranstaltungen und Unterkünften bis hin zu Dienstleistungen und Aktivitäten – und so eine lebendige und vernetzte Online-Community schaffen. <br /> <br /> Dieses Projekt wurde mit Next.js für das Frontend und Payload CMS für ein flexibles Content-Management aufgebaut, was eine skalierbare und wartbare Struktur bietet. Die Plattform wird auf Railway bereitgestellt und gehostet, wobei PostgreSQL als Datenbank für eine zuverlässige und sichere Datenspeicherung verwendet wird. Das Verhalten und die Interaktion der Benutzer werden mit Plausible Analytics verfolgt, was Einblicke ermöglicht, ohne die Privatsphäre zu gefährden. <br /> <br /> Zu den Hauptfunktionen gehören die Registrierung und Anmeldung von Benutzern, die es registrierten Mitgliedern ermöglichen, eigene Inhalte und Medien zu veröffentlichen, Favoriten zu speichern, Bewertungen abzugeben und sich für Premium-Inhalte oder Benachrichtigungen anzumelden. Zahlungen und Abonnements werden sicher über Stripe abgewickelt, was einen reibungslosen und vertrauenswürdigen Transaktionsprozess gewährleistet. <br /> <br /> Während der Entwicklung lagen die Hauptfokusbereiche auf einzigartigem Design, Sicherheit, SEO, Zugänglichkeit, Analytik, Geschwindigkeit und Leistung. Die Plattform legt Wert auf eine visuell ansprechende und intuitive Benutzeroberfläche und hält gleichzeitig strenge Standards für Webzugänglichkeit und Suchmaschinenoptimierung ein. Die Leistung wurde optimiert, um schnelle Ladezeiten und reibungslose Interaktionen zu gewährleisten und so ein nahtloses Erlebnis für Benutzer auf jedem Gerät zu bieten. <br /> <br /> Dieses Projekt demonstriert die Integration eines modernen Tech-Stacks zum Aufbau einer komplexen, gemeinschaftsorientierten Plattform, die Funktionalität, Sicherheit und Ästhetik in Einklang bringt. Durch die Kombination von dynamischem Content-Management, interaktiven Funktionen und Echtzeit-Analysen verbindet die Lake Atitlán Community-Website nicht nur Einheimische und Besucher, sondern setzt auch einen Standard für hochwertige, nachhaltige und benutzerorientierte Webentwicklung.",
      pt: "A Lake Atitlán Community é um hub abrangente de listagens e recursos projetado tanto para residentes quanto para turistas ao redor do Lago Atitlán, na Guatemala. A plataforma serve como um espaço central onde os usuários podem descobrir, compartilhar e interagir com conteúdo local, desde eventos e acomodações até serviços e atividades, criando uma comunidade online vibrante e conectada. <br /> <br /> Este projeto foi construído usando Next.js para o frontend e Payload CMS para gerenciamento de conteúdo flexível, proporcionando uma estrutura escalável e sustentável. A plataforma é implantada e hospedada no Railway, usando PostgreSQL como banco de dados para armazenamento de dados confiável e seguro. O comportamento e o engajamento dos usuários são rastreados com Plausible Analytics, permitindo insights sem comprometer a privacidade. <br /> <br /> As principais características incluem inscrição e login de usuários, permitindo que membros registrados publiquem seu próprio conteúdo e mídia, salvem favoritos, deixem avaliações e assinem conteúdo premium ou notificações. Pagamentos e assinaturas são tratados com segurança através do Stripe, garantindo um processo de transação suave e confiável. <br /> <br /> Durante o desenvolvimento, as principais áreas de foco foram design exclusivo, segurança, SEO, acessibilidade, análise, velocidade e desempenho. A plataforma enfatiza uma interface de usuário visualmente atraente e intuitiva, mantendo rigorosos padrões de acessibilidade web e otimização para mecanismos de busca. O desempenho foi otimizado para garantir tempos de carregamento rápidos e interações suaves, proporcionando uma experiência perfeita para os usuários em qualquer dispositivo. <br /> <br /> Este projeto demonstra a integração de uma pilha tecnológica moderna para construir uma plataforma complexa orientada pela comunidade que equilibra funcionalidade, segurança e estética. Ao combinar gerenciamento dinâmico de conteúdo, recursos interativos e análises em tempo real, o site da Lake Atitlán Community não apenas conecta moradores locais e visitantes, mas também estabelece um padrão para desenvolvimento web de alta qualidade, sustentável e focado no usuário.",
    },
    tools: [
      "Payload CMS",
      "Couldflare",
      "PostgreSQL",
      "Railway",
      "Resend",
      "Plausible",
      "Stripe",
      "Typescript",
      "GSAP",
    ],
    buttonLink: {
      en: "/next.js-projects/lake-atitlan-community",
      es: "/es/next.js-proyectos/lake-atitlan-community",
      fr: "/fr/next.js-projets/lake-atitlan-community",
      de: "/de/next.js-projekte/lake-atitlan-community",
      pt: "/pt/next.js-projetos/lake-atitlan-community",
    },
    liveLink: "https://www.lakeatitlancommunity.com/",
  },
  {
    name: "Tierra Atitlan",
    image: "/tierra-atitlan.png",
    platform: "Next.js",
    shortDescription: {
      en: "Tierra Atitlán is a modern web platform designed to simplify real estate discovery, vacation rentals, and property management around Lake Atitlán, Guatemala. The project brings together property owners, renters, and potential buyers in one intuitive, high-performance environment that prioritizes usability, transparency, and aesthetics.",
      es: "Tierra Atitlán es una plataforma web moderna diseñada para simplificar el descubrimiento de bienes raíces, alquileres vacacionales y la gestión de propiedades alrededor del Lago Atitlán, Guatemala. El proyecto reúne a propietarios, inquilinos y compradores potenciales en un entorno intuitivo y de alto rendimiento que prioriza la usabilidad, la transparencia y la estética.",
      fr: "Tierra Atitlán est une plateforme web moderne conçue pour simplifier la découverte de biens immobiliers, les locations de vacances et la gestion de propriétés autour du lac Atitlán, au Guatemala. Le projet réunit les propriétaires, les locataires et les acheteurs potentiels dans un environnement intuitif et performant qui privilégie l'utilisabilité, la transparence et l'esthétique.",
      de: "Tierra Atitlán ist eine moderne Webplattform, die darauf ausgelegt ist, die Entdeckung von Immobilien, Ferienvermietungen und Immobilienverwaltung rund um den Lake Atitlán in Guatemala zu vereinfachen. Das Projekt bringt Eigentümer, Mieter und potenzielle Käufer in einer intuitiven, leistungsstarken Umgebung zusammen, die Benutzerfreundlichkeit, Transparenz und Ästhetik priorisiert.",
      pt: "Tierra Atitlán é uma plataforma web moderna projetada para simplificar a descoberta de imóveis, aluguel de temporada e gestão de propriedades ao redor do Lago Atitlán, Guatemala. O projeto reúne proprietários, locatários e compradores potenciais em um ambiente intuitivo e de alto desempenho que prioriza usabilidade, transparência e estética.",
    },
    description: {
      en: "Tierra Atitlán is a modern web platform designed to simplify real estate discovery, vacation rentals, and property management around Lake Atitlán, Guatemala. The project brings together property owners, renters, and potential buyers in one intuitive, high-performance environment that prioritizes usability, transparency, and aesthetics. <br /> <br /> Built with Next.js and powered by Payload CMS, the platform delivers a fully dynamic and scalable system for managing listings and user interactions. It’s hosted and deployed with Railway, using PostgreSQL as the primary database to ensure secure, reliable, and high-speed data operations. Plausible Analytics was integrated to provide privacy-friendly insights into user behavior, helping refine both performance and user experience. <br /> <br /> A key focus of this project was developing an advanced listing system featuring rich filters, categories, and sorting options that allow users to easily explore properties based on their preferences—such as price, location, or property type. To support seamless collaboration between owners and renters, I implemented a custom dashboard that facilitates real-time communication, payment tracking, maintenance requests, and access to important property details. <br /> <br /> The platform also features a custom-built booking system, developed to minimize reliance on third-party platforms like Booking.com or Airbnb. This solution provides full control over transactions, user data, and commissions—resulting in significant cost savings for property owners while maintaining a user-friendly booking experience for guests. <br /> <br /> Throughout development, I placed strong emphasis on unique design, security, SEO, accessibility, analytics, speed, and performance. The result is a site that not only looks modern and professional but also performs flawlessly across devices and connection speeds. Every detail—from server optimization to content structure—was crafted to ensure the site ranks well, loads fast, and offers an inclusive experience for all users. <br /> <br /> Tierra Atitlán represents a perfect balance between technology, design, and functionality—showcasing how custom web solutions can empower local communities and businesses through efficient, secure, and beautifully designed digital platforms.",
      es: "Tierra Atitlán es una plataforma web moderna diseñada para simplificar el descubrimiento de bienes raíces, alquileres vacacionales y la gestión de propiedades alrededor del Lago Atitlán, Guatemala. El proyecto reúne a propietarios, inquilinos y compradores potenciales en un entorno intuitivo y de alto rendimiento que prioriza la usabilidad, la transparencia y la estética. <br /> <br /> Construida con Next.js y potenciada por Payload CMS, la plataforma ofrece un sistema totalmente dinámico y escalable para gestionar listados e interacciones de usuarios. Está alojada y desplegada con Railway, utilizando PostgreSQL como base de datos principal para garantizar operaciones de datos seguras, confiables y de alta velocidad. Se integró Plausible Analytics para proporcionar información amigable con la privacidad sobre el comportamiento del usuario, ayudando a refinar tanto el rendimiento como la experiencia del usuario. <br /> <br /> Un enfoque clave de este proyecto fue desarrollar un sistema avanzado de listados con filtros ricos, categorías y opciones de clasificación que permiten a los usuarios explorar fácilmente las propiedades según sus preferencias, como precio, ubicación o tipo de propiedad. Para apoyar la colaboración fluida entre propietarios e inquilinos, implementé un panel personalizado que facilita la comunicación en tiempo real, el seguimiento de pagos, las solicitudes de mantenimiento y el acceso a detalles importantes de la propiedad. <br /> <br /> La plataforma también cuenta con un sistema de reservas personalizado, desarrollado para minimizar la dependencia de plataformas de terceros como Booking.com o Airbnb. Esta solución proporciona control total sobre las transacciones, los datos de los usuarios y las comisiones, lo que resulta en ahorros significativos para los propietarios mientras se mantiene una experiencia de reserva fácil para los huéspedes. <br /> <br /> Durante el desarrollo, puse un fuerte énfasis en el diseño único, la seguridad, el SEO, la accesibilidad, la analítica, la velocidad y el rendimiento. El resultado es un sitio que no solo se ve moderno y profesional, sino que también funciona perfectamente en todos los dispositivos y velocidades de conexión. Cada detalle, desde la optimización del servidor hasta la estructura del contenido, fue diseñado para garantizar que el sitio tenga un buen ranking, cargue rápido y ofrezca una experiencia inclusiva para todos los usuarios. <br /> <br /> Tierra Atitlán representa un equilibrio perfecto entre tecnología, diseño y funcionalidad, demostrando cómo las soluciones web personalizadas pueden empoderar a las comunidades y negocios locales a través de plataformas digitales eficientes, seguras y bellamente diseñadas.",
      fr: "Tierra Atitlán est une plateforme web moderne conçue pour simplifier la découverte de biens immobiliers, les locations de vacances et la gestion de propriétés autour du lac Atitlán, au Guatemala. Le projet réunit les propriétaires, les locataires et les acheteurs potentiels dans un environnement intuitif et performant qui privilégie l'utilisabilité, la transparence et l'esthétique. <br /> <br /> Construit avec Next.js et propulsé par Payload CMS, la plateforme offre un système entièrement dynamique et évolutif pour gérer les annonces et les interactions des utilisateurs. Elle est hébergée et déployée avec Railway, utilisant PostgreSQL comme base de données principale pour garantir des opérations de données sécurisées, fiables et à haute vitesse. Plausible Analytics a été intégré pour fournir des insights respectueux de la vie privée sur le comportement des utilisateurs, aidant à affiner à la fois les performances et l'expérience utilisateur. <br /> <br /> Un aspect clé de ce projet a été le développement d'un système d'annonces avancé avec des filtres riches, des catégories et des options de tri qui permettent aux utilisateurs d'explorer facilement les propriétés en fonction de leurs préférences, telles que le prix, l'emplacement ou le type de propriété. Pour soutenir une collaboration fluide entre les propriétaires et les locataires, j'ai mis en place un tableau de bord personnalisé qui facilite la communication en temps réel, le suivi des paiements, les demandes de maintenance et l'accès aux détails importants de la propriété. <br /> <br /> La plateforme dispose également d'un système de réservation personnalisé, développé pour minimiser la dépendance aux plateformes tierces telles que Booking.com ou Airbnb. Cette solution offre un contrôle total sur les transactions, les données des utilisateurs et les commissions, ce qui se traduit par des économies significatives pour les propriétaires tout en maintenant une expérience de réservation conviviale pour les invités. <br /> <br /> Tout au long du développement, j'ai mis un fort accent sur le design unique, la sécurité, le SEO, l'accessibilité, l'analytique, la vitesse et la performance. Le résultat est un site qui non seulement a une apparence moderne et professionnelle, mais qui fonctionne également parfaitement sur tous les appareils et vitesses de connexion. Chaque détail - de l'optimisation du serveur à la structure du contenu - a été conçu pour garantir que le site soit bien classé, se charge rapidement et offre une expérience inclusive à tous les utilisateurs. <br /> <br /> Tierra Atitlán représente un équilibre parfait entre technologie, design et fonctionnalité, démontrant comment des solutions web personnalisées peuvent autonomiser les communautés et les entreprises locales grâce à des plateformes numériques efficaces, sécurisées et magnifiquement conçues.",
      de: "Tierra Atitlán ist eine moderne Webplattform, die darauf ausgelegt ist, die Entdeckung von Immobilien, Ferienvermietungen und das Immobilienmanagement rund um den Lake Atitlán in Guatemala zu vereinfachen. Das Projekt bringt Eigentümer, Mieter und potenzielle Käufer in einer intuitiven, leistungsstarken Umgebung zusammen, die Benutzerfreundlichkeit, Transparenz und Ästhetik priorisiert. <br /> <br /> Die Plattform wurde mit Next.js erstellt und wird von Payload CMS unterstützt, was ein vollständig dynamisches und skalierbares System zur Verwaltung von Einträgen und Benutzerinteraktionen bietet. Sie wird mit Railway gehostet und bereitgestellt, wobei PostgreSQL als primäre Datenbank verwendet wird, um sichere, zuverlässige und schnelle Datenoperationen zu gewährleisten. Plausible Analytics wurde integriert, um datenschutzfreundliche Einblicke in das Benutzerverhalten zu bieten und so Leistung und Benutzererfahrung zu verbessern. <br /> <br /> Ein Schwerpunkt dieses Projekts war die Entwicklung eines fortschrittlichen Eintragungssystems mit umfangreichen Filtern, Kategorien und Sortieroptionen, die es den Benutzern ermöglichen, Immobilien basierend auf ihren Vorlieben wie Preis, Standort oder Immobilientyp einfach zu erkunden. Um eine nahtlose Zusammenarbeit zwischen Eigentümern und Mietern zu unterstützen, habe ich ein benutzerdefiniertes Dashboard implementiert, das Echtzeitkommunikation, Zahlungsnachverfolgung, Wartungsanfragen und den Zugriff auf wichtige Immobiliendetails erleichtert. <br /> <br /> Die Plattform verfügt auch über ein maßgeschneidertes Buchungssystem, das entwickelt wurde, um die Abhängigkeit von Drittanbieterplattformen wie Booking.com oder Airbnb zu minimieren. Diese Lösung bietet volle Kontrolle über Transaktionen, Benutzerdaten und Provisionen – was zu erheblichen Kosteneinsparungen für Eigentümer führt und gleichzeitig ein benutzerfreundliches Buchungserlebnis für Gäste gewährleistet. <br /> <br /> Während der Entwicklung legte ich großen Wert auf einzigartiges Design, Sicherheit, SEO, Zugänglichkeit, Analytik, Geschwindigkeit und Leistung. Das Ergebnis ist eine Website, die nicht nur modern und professionell aussieht, sondern auch auf allen Geräten und Verbindungsgeschwindigkeiten einwandfrei funktioniert. Jedes Detail – von der Serveroptimierung bis zur Inhaltsstruktur – wurde sorgfältig gestaltet, um sicherzustellen, dass die Website gut rankt, schnell lädt und allen Benutzern ein inklusives Erlebnis bietet. <br /> <br /> Tierra Atitlán repräsentiert die perfekte Balance zwischen Technologie, Design und Funktionalität und zeigt, wie maßgeschneiderte Weblösungen lokale Gemeinschaften und Unternehmen durch effiziente, sichere und wunderschön gestaltete digitale Plattformen stärken können.",
      pt: "Tierra Atitlán é uma plataforma web moderna projetada para simplificar a descoberta de imóveis, aluguel de temporada e gestão de propriedades ao redor do Lago Atitlán, na Guatemala. O projeto reúne proprietários, locatários e compradores em potencial em um ambiente intuitivo e de alto desempenho que prioriza usabilidade, transparência e estética. <br /> <br /> Construída com Next.js e alimentada pelo Payload CMS, a plataforma oferece um sistema totalmente dinâmico e escalável para gerenciar listagens e interações dos usuários. Ela é hospedada e implantada com Railway, usando PostgreSQL como banco de dados principal para garantir operações de dados seguras, confiáveis e de alta velocidade. O Plausible Analytics foi integrado para fornecer insights amigáveis à privacidade sobre o comportamento do usuário, ajudando a refinar tanto o desempenho quanto a experiência do usuário. <br /> <br /> Um foco chave deste projeto foi desenvolver um sistema avançado de listagens com filtros ricos, categorias e opções de classificação que permitem aos usuários explorar facilmente as propriedades com base em suas preferências, como preço, localização ou tipo de propriedade. Para apoiar a colaboração perfeita entre proprietários e locatários, implementei um painel personalizado que facilita a comunicação em tempo real, o rastreamento de pagamentos, solicitações de manutenção e acesso a detalhes importantes da propriedade. <br /> <br /> A plataforma também apresenta um sistema de reservas personalizado, desenvolvido para minimizar a dependência de plataformas terceirizadas como Booking.com ou Airbnb. Esta solução oferece controle total sobre transações, dados do usuário e comissões – resultando em economias significativas para os proprietários enquanto mantém uma experiência de reserva amigável para os hóspedes. <br /> <br /> Ao longo do desenvolvimento, coloquei forte ênfase em design único, segurança, SEO, acessibilidade, análise, velocidade e desempenho. O resultado é um site que não apenas parece moderno e profissional, mas também funciona perfeitamente em todos os dispositivos e velocidades de conexão. Cada detalhe – desde a otimização do servidor até a estrutura do conteúdo – foi elaborado para garantir que o site tenha uma boa classificação, carregue rapidamente e ofereça uma experiência inclusiva para todos os usuários. <br /> <br /> Tierra Atitlán representa um equilíbrio perfeito entre tecnologia, design e funcionalidade – mostrando como soluções web personalizadas podem capacitar comunidades e negócios locais por meio de plataformas digitais eficientes, seguras e lindamente projetadas.",
    },
    tools: [
      "Payload CMS",
      "Couldflare",
      "PostgreSQL",
      "Railway",
      "Resend",
      "Plausible",
      "Typescript",
      "GSAP",
      "Lenis Scroll",
    ],
    buttonLink: {
      en: "/next.js-projects/tierra-atitlan",
      es: "/es/next.js-proyectos/tierra-atitlan",
      fr: "/fr/next.js-projets/tierra-atitlan",
      de: "/de/next.js-projekte/tierra-atitlan",
      pt: "/pt/next.js-projetos/tierra-atitlan",
    },
    liveLink: "https://www.tierraatitlan.com/",
  },
  {
    name: "Le passé composé",
    image: "/passe-compose.png",
    platform: "Webflow",
    shortDescription: {
      en: "Le Passé Composé is a refined and modern website created for a renowned fine dining restaurant located in Montréal, Canada. The project’s main objective was to capture the essence of the restaurant’s atmosphere — elegant, creative, and authentic — while ensuring a seamless, intuitive experience for visitors exploring the menu, making reservations, or discovering the restaurant’s story.",
      es: "Le Passé Composé es un sitio web refinado y moderno creado para un renombrado restaurante de alta cocina ubicado en Montreal, Canadá. El objetivo principal del proyecto era capturar la esencia del ambiente del restaurante: elegante, creativo y auténtico, al tiempo que se garantiza una experiencia fluida e intuitiva para los visitantes que exploran el menú, hacen reservas o descubren la historia del restaurante.",
      fr: "Le Passé Composé est un site web raffiné et moderne créé pour un restaurant gastronomique renommé situé à Montréal, Canada. L'objectif principal du projet était de capturer l'essence de l'atmosphère du restaurant - élégant, créatif et authentique - tout en assurant une expérience fluide et intuitive pour les visiteurs explorant le menu, effectuant des réservations ou découvrant l'histoire du restaurant.",
      de: "Le Passé Composé ist eine raffinierte und moderne Website, die für ein renommiertes Feinschmeckerrestaurant in Montréal, Kanada, erstellt wurde. Das Hauptziel des Projekts war es, die Essenz der Atmosphäre des Restaurants einzufangen - elegant, kreativ und authentisch - und gleichzeitig ein nahtloses, intuitives Erlebnis für Besucher zu gewährleisten, die die Speisekarte erkunden, Reservierungen vornehmen oder die Geschichte des Restaurants entdecken.",
      pt: "Le Passé Composé é um site refinado e moderno criado para um renomado restaurante de alta gastronomia localizado em Montréal, Canadá. O principal objetivo do projeto era capturar a essência da atmosfera do restaurante - elegante, criativa e autêntica - ao mesmo tempo em que garantia uma experiência perfeita e intuitiva para os visitantes que exploram o menu, fazem reservas ou descobrem a história do restaurante.",
    },
    description: {
      en: "Le Passé Composé is a refined and modern website created for a renowned fine dining restaurant located in Montréal, Canada. The project’s main objective was to capture the essence of the restaurant’s atmosphere — elegant, creative, and authentic — while ensuring a seamless, intuitive experience for visitors exploring the menu, making reservations, or discovering the restaurant’s story. <br /> <br /> Built entirely in Webflow, this project makes extensive use of the CMS to structure and organize dynamic content efficiently. One of the key challenges was building a highly complex CMS architecture with multiple levels of nested collections to manage interconnected data between menus, meals, cocktails, and extras. This intricate structure was made possible thanks to Finsweet’s nesting solution, allowing the restaurant team to update their content effortlessly while maintaining consistent relationships between items. <br /> <br /> The site also features a custom-built mega menu, designed to enhance navigation and showcase the restaurant’s offerings in a visually engaging, user-friendly way. Every aspect of the layout and animation was tailored to reflect the restaurant’s personality — sophisticated yet inviting, modern yet warm. <br /> <br /> Throughout the project, the main focus was on unique design, SEO, accessibility, and speed optimization. The design process emphasized visual storytelling through elegant typography, balanced white space, and rich imagery, creating an immersive digital experience aligned with the restaurant’s identity. Performance was carefully optimized to ensure fast loading times, smooth transitions, and excellent SEO results, all while keeping the site accessible to every user. <br /> <br /> The Le Passé Composé website demonstrates how the flexibility of Webflow, combined with a well-planned CMS structure and creative design, can deliver a visually striking and technically advanced solution. It not only elevates the restaurant’s online presence but also provides a solid foundation for easy content management and long-term scalability.",
      es: "Tierra Atitlán es una plataforma web moderna diseñada para simplificar el descubrimiento de bienes raíces, alquileres vacacionales y la gestión de propiedades alrededor del Lago Atitlán, Guatemala. El proyecto reúne a propietarios, inquilinos y compradores potenciales en un entorno intuitivo y de alto rendimiento que prioriza la usabilidad, la transparencia y la estética. <br /> <br /> Construida con Next.js y potenciada por Payload CMS, la plataforma ofrece un sistema totalmente dinámico y escalable para gestionar listados e interacciones de usuarios. Está alojada y desplegada con Railway, utilizando PostgreSQL como base de datos principal para garantizar operaciones de datos seguras, confiables y de alta velocidad. Se integró Plausible Analytics para proporcionar información amigable con la privacidad sobre el comportamiento del usuario, ayudando a refinar tanto el rendimiento como la experiencia del usuario. <br /> <br /> Un enfoque clave de este proyecto fue desarrollar un sistema avanzado de listados con filtros ricos, categorías y opciones de clasificación que permiten a los usuarios explorar fácilmente las propiedades según sus preferencias, como precio, ubicación o tipo de propiedad. Para apoyar la colaboración fluida entre propietarios e inquilinos, implementé un panel personalizado que facilita la comunicación en tiempo real, el seguimiento de pagos, las solicitudes de mantenimiento y el acceso a detalles importantes de la propiedad. <br /> <br /> La plataforma también cuenta con un sistema de reservas personalizado, desarrollado para minimizar la dependencia de plataformas de terceros como Booking.com o Airbnb. Esta solución proporciona control total sobre las transacciones, los datos de los usuarios y las comisiones, lo que resulta en ahorros significativos para los propietarios mientras se mantiene una experiencia de reserva fácil para los huéspedes. <br /> <br /> Durante el desarrollo, puse un fuerte énfasis en el diseño único, la seguridad, el SEO, la accesibilidad, la analítica, la velocidad y el rendimiento. El resultado es un sitio que no solo se ve moderno y profesional, sino que también funciona perfectamente en todos los dispositivos y velocidades de conexión. Cada detalle, desde la optimización del servidor hasta la estructura del contenido, fue diseñado para garantizar que el sitio tenga un buen ranking, cargue rápido y ofrezca una experiencia inclusiva para todos los usuarios. <br /> <br /> Tierra Atitlán representa un equilibrio perfecto entre tecnología, diseño y funcionalidad, demostrando cómo las soluciones web personalizadas pueden empoderar a las comunidades y negocios locales a través de plataformas digitales eficientes, seguras y bellamente diseñadas.",
      fr: "Tierra Atitlán est une plateforme web moderne conçue pour simplifier la découverte de biens immobiliers, les locations de vacances et la gestion de propriétés autour du lac Atitlán, au Guatemala. Le projet réunit les propriétaires, les locataires et les acheteurs potentiels dans un environnement intuitif et performant qui privilégie l'utilisabilité, la transparence et l'esthétique. <br /> <br /> Construit avec Next.js et propulsé par Payload CMS, la plateforme offre un système entièrement dynamique et évolutif pour gérer les annonces et les interactions des utilisateurs. Elle est hébergée et déployée avec Railway, utilisant PostgreSQL comme base de données principale pour garantir des opérations de données sécurisées, fiables et à haute vitesse. Plausible Analytics a été intégré pour fournir des insights respectueux de la vie privée sur le comportement des utilisateurs, aidant à affiner à la fois les performances et l'expérience utilisateur. <br /> <br /> Un aspect clé de ce projet a été le développement d'un système d'annonces avancé avec des filtres riches, des catégories et des options de tri qui permettent aux utilisateurs d'explorer facilement les propriétés en fonction de leurs préférences, telles que le prix, l'emplacement ou le type de propriété. Pour soutenir une collaboration fluide entre les propriétaires et les locataires, j'ai mis en place un tableau de bord personnalisé qui facilite la communication en temps réel, le suivi des paiements, les demandes de maintenance et l'accès aux détails importants de la propriété. <br /> <br /> La plateforme dispose également d'un système de réservation personnalisé, développé pour minimiser la dépendance aux plateformes tierces telles que Booking.com ou Airbnb. Cette solution offre un contrôle total sur les transactions, les données des utilisateurs et les commissions, ce qui se traduit par des économies significatives pour les propriétaires tout en maintenant une expérience de réservation conviviale pour les invités. <br /> <br /> Tout au long du développement, j'ai mis un fort accent sur le design unique, la sécurité, le SEO, l'accessibilité, l'analytique, la vitesse et la performance. Le résultat est un site qui non seulement a une apparence moderne et professionnelle, mais qui fonctionne également parfaitement sur tous les appareils et vitesses de connexion. Chaque détail - de l'optimisation du serveur à la structure du contenu - a été conçu pour garantir que le site soit bien classé, se charge rapidement et offre une expérience inclusive à tous les utilisateurs. <br /> <br /> Tierra Atitlán représente un équilibre parfait entre technologie, design et fonctionnalité, démontrant comment des solutions web personnalisées peuvent autonomiser les communautés et les entreprises locales grâce à des plateformes numériques efficaces, sécurisées et magnifiquement conçues.",
      de: "Tierra Atitlán ist eine moderne Webplattform, die darauf ausgelegt ist, die Entdeckung von Immobilien, Ferienvermietungen und das Immobilienmanagement rund um den Lake Atitlán in Guatemala zu vereinfachen. Das Projekt bringt Eigentümer, Mieter und potenzielle Käufer in einer intuitiven, leistungsstarken Umgebung zusammen, die Benutzerfreundlichkeit, Transparenz und Ästhetik priorisiert. <br /> <br /> Die Plattform wurde mit Next.js erstellt und wird von Payload CMS unterstützt, was ein vollständig dynamisches und skalierbares System zur Verwaltung von Einträgen und Benutzerinteraktionen bietet. Sie wird mit Railway gehostet und bereitgestellt, wobei PostgreSQL als primäre Datenbank verwendet wird, um sichere, zuverlässige und schnelle Datenoperationen zu gewährleisten. Plausible Analytics wurde integriert, um datenschutzfreundliche Einblicke in das Benutzerverhalten zu bieten und so Leistung und Benutzererfahrung zu verbessern. <br /> <br /> Ein Schwerpunkt dieses Projekts war die Entwicklung eines fortschrittlichen Eintragungssystems mit umfangreichen Filtern, Kategorien und Sortieroptionen, die es den Benutzern ermöglichen, Immobilien basierend auf ihren Vorlieben wie Preis, Standort oder Immobilientyp einfach zu erkunden. Um eine nahtlose Zusammenarbeit zwischen Eigentümern und Mietern zu unterstützen, habe ich ein benutzerdefiniertes Dashboard implementiert, das Echtzeitkommunikation, Zahlungsnachverfolgung, Wartungsanfragen und den Zugriff auf wichtige Immobiliendetails erleichtert. <br /> <br /> Die Plattform verfügt auch über ein maßgeschneidertes Buchungssystem, das entwickelt wurde, um die Abhängigkeit von Drittanbieterplattformen wie Booking.com oder Airbnb zu minimieren. Diese Lösung bietet volle Kontrolle über Transaktionen, Benutzerdaten und Provisionen – was zu erheblichen Kosteneinsparungen für Eigentümer führt und gleichzeitig ein benutzerfreundliches Buchungserlebnis für Gäste gewährleistet. <br /> <br /> Während der Entwicklung legte ich großen Wert auf einzigartiges Design, Sicherheit, SEO, Zugänglichkeit, Analytik, Geschwindigkeit und Leistung. Das Ergebnis ist eine Website, die nicht nur modern und professionell aussieht, sondern auch auf allen Geräten und Verbindungsgeschwindigkeiten einwandfrei funktioniert. Jedes Detail – von der Serveroptimierung bis zur Inhaltsstruktur – wurde sorgfältig gestaltet, um sicherzustellen, dass die Website gut rankt, schnell lädt und allen Benutzern ein inklusives Erlebnis bietet. <br /> <br /> Tierra Atitlán repräsentiert die perfekte Balance zwischen Technologie, Design und Funktionalität und zeigt, wie maßgeschneiderte Weblösungen lokale Gemeinschaften und Unternehmen durch effiziente, sichere und wunderschön gestaltete digitale Plattformen stärken können.",
      pt: "Tierra Atitlán é uma plataforma web moderna projetada para simplificar a descoberta de imóveis, aluguel de temporada e gestão de propriedades ao redor do Lago Atitlán, na Guatemala. O projeto reúne proprietários, locatários e compradores em potencial em um ambiente intuitivo e de alto desempenho que prioriza usabilidade, transparência e estética. <br /> <br /> Construída com Next.js e alimentada pelo Payload CMS, a plataforma oferece um sistema totalmente dinâmico e escalável para gerenciar listagens e interações dos usuários. Ela é hospedada e implantada com Railway, usando PostgreSQL como banco de dados principal para garantir operações de dados seguras, confiáveis e de alta velocidade. O Plausible Analytics foi integrado para fornecer insights amigáveis à privacidade sobre o comportamento do usuário, ajudando a refinar tanto o desempenho quanto a experiência do usuário. <br /> <br /> Um foco chave deste projeto foi desenvolver um sistema avançado de listagens com filtros ricos, categorias e opções de classificação que permitem aos usuários explorar facilmente as propriedades com base em suas preferências, como preço, localização ou tipo de propriedade. Para apoiar a colaboração perfeita entre proprietários e locatários, implementei um painel personalizado que facilita a comunicação em tempo real, o rastreamento de pagamentos, solicitações de manutenção e acesso a detalhes importantes da propriedade. <br /> <br /> A plataforma também apresenta um sistema de reservas personalizado, desenvolvido para minimizar a dependência de plataformas terceirizadas como Booking.com ou Airbnb. Esta solução oferece controle total sobre transações, dados do usuário e comissões – resultando em economias significativas para os proprietários enquanto mantém uma experiência de reserva amigável para os hóspedes. <br /> <br /> Ao longo do desenvolvimento, coloquei forte ênfase em design único, segurança, SEO, acessibilidade, análise, velocidade e desempenho. O resultado é um site que não apenas parece moderno e profissional, mas também funciona perfeitamente em todos os dispositivos e velocidades de conexão. Cada detalhe – desde a otimização do servidor até a estrutura do conteúdo – foi elaborado para garantir que o site tenha uma boa classificação, carregue rapidamente e ofereça uma experiência inclusiva para todos os usuários. <br /> <br /> Tierra Atitlán representa um equilíbrio perfeito entre tecnologia, design e funcionalidade – mostrando como soluções web personalizadas podem capacitar comunidades e negócios locais por meio de plataformas digitais eficientes, seguras e lindamente projetadas.",
    },
    tools: ["Finsweet", "Client First", "CMS", "Enzuzo"],
    buttonLink: {
      en: "/webflow-projects/le-passe-compose",
      es: "/es/webflow-proyectos/le-passe-compose",
      fr: "/fr/webflow-projets/le-passe-compose",
      de: "/de/webflow-projekte/le-passe-compose",
      pt: "/pt/webflow-projetos/le-passe-compose",
    },
    liveLink: "https://www.lepassecompose.ca/",
  },
  {
    name: "Safari Condo",
    image: "/safari-condo.png",
    platform: "Webflow",
    shortDescription: {
      en: "Safari Condo is a Canadian company renowned for crafting innovative, durable, and reliable motorhomes and travel trailers — designed to take travelers wherever their spirit of adventure leads. The goal of this Webflow project was to create a digital experience that reflects Safari Condo’s commitment to quality, freedom, and exploration while delivering a site that’s visually stunning, fast, and easy to navigate.",
      es: "Safari Condo es una empresa canadiense reconocida por fabricar autocaravanas y remolques de viaje innovadores, duraderos y confiables, diseñados para llevar a los viajeros a donde los lleve su espíritu de aventura. El objetivo de este proyecto en Webflow era crear una experiencia digital que reflejara el compromiso de Safari Condo con la calidad, la libertad y la exploración, al tiempo que ofreciera un sitio visualmente impresionante, rápido y fácil de navegar.",
      fr: "Safari Condo est une entreprise canadienne réputée pour la fabrication de camping-cars et de caravanes innovants, durables et fiables - conçus pour emmener les voyageurs où que les mène leur esprit d'aventure. L'objectif de ce projet Webflow était de créer une expérience numérique qui reflète l'engagement de Safari Condo envers la qualité, la liberté et l'exploration, tout en offrant un site visuellement époustouflant, rapide et facile à naviguer.",
      de: "Safari Condo ist ein kanadisches Unternehmen, das für die Herstellung innovativer, langlebiger und zuverlässiger Wohnmobile und Reiseanhänger bekannt ist - entwickelt, um Reisende überallhin zu bringen, wo ihr Abenteuergeist sie hinführt. Das Ziel dieses Webflow-Projekts war es, ein digitales Erlebnis zu schaffen, das das Engagement von Safari Condo für Qualität, Freiheit und Erkundung widerspiegelt und gleichzeitig eine optisch beeindruckende, schnelle und einfach zu navigierende Website bietet.",
      pt: "Safari Condo é uma empresa canadense renomada por criar motorhomes e trailers de viagem inovadores, duráveis e confiáveis - projetados para levar os viajantes aonde quer que seu espírito de aventura os leve. O objetivo deste projeto Webflow era criar uma experiência digital que refletisse o compromisso da Safari Condo com qualidade, liberdade e exploração, ao mesmo tempo em que oferecia um site visualmente impressionante, rápido e fácil de navegar.",
    },
    description: {
      en: "Safari Condo is a Canadian company renowned for crafting innovative, durable, and reliable motorhomes and travel trailers — designed to take travelers wherever their spirit of adventure leads. The goal of this Webflow project was to create a digital experience that reflects Safari Condo’s commitment to quality, freedom, and exploration while delivering a site that’s visually stunning, fast, and easy to navigate. <br /> <br /> Built entirely in Webflow using its CMS, this project pushed the limits of what’s possible within the platform. It features a highly customized and creative design, integrating Lottie animations that play smoothly on scroll to bring the brand’s storytelling to life in an interactive way. To enhance the user experience, I implemented smooth scrolling with Lenis, creating a fluid and elegant browsing feel across all pages. <br /> <br /> Several Finsweet solutions were used to manage complex content relationships — including nesting and combining collection lists — allowing for a more dynamic display of vehicles, models, and related features while keeping content management simple and intuitive. I also developed custom sliders using both Webflow’s native tools and Swiper.js to ensure performance, flexibility, and a consistent design system across the site. <br /> <br /> A custom mega menu was designed to improve accessibility and navigation, organizing Safari Condo’s wide range of products and resources in a clear and visually engaging way. <br /> <br /> Throughout the project, the main focus areas were unique design, SEO, accessibility, and speed optimization. Every element — from typography and animation to layout and interactions — was crafted with precision to reflect the brand’s adventurous yet refined identity. <br /> <br /> The result is a high-performance, visually immersive website that seamlessly combines creativity with functionality. The Safari Condo project demonstrates how Webflow, when paired with technical expertise and thoughtful design, can deliver an engaging, dynamic, and future-ready platform that inspires exploration and connects deeply with its audience.",
      es: "Safari Condo es una empresa canadiense reconocida por fabricar autocaravanas y remolques de viaje innovadores, duraderos y confiables, diseñados para llevar a los viajeros a donde los lleve su espíritu de aventura. El objetivo de este proyecto en Webflow era crear una experiencia digital que reflejara el compromiso de Safari Condo con la calidad, la libertad y la exploración, al tiempo que ofreciera un sitio visualmente impresionante, rápido y fácil de navegar. <br /> <br /> Construido íntegramente en Webflow utilizando su CMS, este proyecto llevó al límite lo que es posible dentro de la plataforma. Presenta un diseño altamente personalizado y creativo, integrando animaciones Lottie que se reproducen suavemente al desplazarse para dar vida a la narrativa de la marca de una manera interactiva. Para mejorar la experiencia del usuario, implementé un desplazamiento suave con Lenis, creando una sensación de navegación fluida y elegante en todas las páginas. <br /> <br /> Se utilizaron varias soluciones de Finsweet para gestionar relaciones complejas de contenido, incluyendo anidamiento y combinación de listas de colecciones, lo que permitió una exhibición más dinámica de vehículos, modelos y características relacionadas, manteniendo al mismo tiempo una gestión de contenido simple e intuitiva. También desarrollé deslizadores personalizados utilizando tanto las herramientas nativas de Webflow como Swiper.js para garantizar rendimiento, flexibilidad y un sistema de diseño coherente en todo el sitio. <br /> <br /> Se diseñó un mega menú personalizado para mejorar la accesibilidad y la navegación, organizando la amplia gama de productos y recursos de Safari Condo de manera clara y visualmente atractiva. <br /> <br /> A lo largo del proyecto, las áreas principales de enfoque fueron el diseño único, el SEO, la accesibilidad y la optimización de la velocidad. Cada elemento, desde la tipografía y la animación hasta el diseño y las interacciones, fue elaborado con precisión para reflejar la identidad aventurera pero refinada de la marca. <br /> <br /> El resultado es un sitio web de alto rendimiento e inmersivo visualmente que combina perfectamente creatividad con funcionalidad. El proyecto Safari Condo demuestra cómo Webflow, cuando se combina con experiencia técnica y diseño reflexivo, puede ofrecer una plataforma atractiva, dinámica y preparada para el futuro que inspira exploración y conecta profundamente con su audiencia.",
      fr: "Safari Condo est une entreprise canadienne réputée pour la fabrication de camping-cars et de caravanes innovants, durables et fiables - conçus pour emmener les voyageurs où que les mène leur esprit d'aventure. L'objectif de ce projet Webflow était de créer une expérience numérique qui reflète l'engagement de Safari Condo envers la qualité, la liberté et l'exploration, tout en offrant un site visuellement époustouflant, rapide et facile à naviguer. <br /> <br /> Entièrement construit dans Webflow en utilisant son CMS, ce projet a repoussé les limites de ce qui est possible au sein de la plateforme. Il présente un design hautement personnalisé et créatif, intégrant des animations Lottie qui se déclenchent en douceur au défilement pour donner vie à la narration de la marque de manière interactive. Pour améliorer l'expérience utilisateur, j'ai mis en œuvre un défilement fluide avec Lenis, créant une sensation de navigation fluide et élégante sur toutes les pages. <br /> <br /> Plusieurs solutions Finsweet ont été utilisées pour gérer des relations de contenu complexes - y compris le nesting et la combinaison de listes de collections - permettant une présentation plus dynamique des véhicules, des modèles et des fonctionnalités associées tout en gardant la gestion du contenu simple et intuitive. J'ai également développé des curseurs personnalisés en utilisant à la fois les outils natifs de Webflow et Swiper.js pour garantir performance, flexibilité et un système de design cohérent à travers le site. <br /> <br /> Un méga menu personnalisé a été conçu pour améliorer l'accessibilité et la navigation, organisant la large gamme de produits et ressources de Safari Condo de manière claire et visuellement attrayante. <br /> <br /> Tout au long du projet, les principaux domaines d'attention étaient le design unique, le SEO, l'accessibilité et l'optimisation de la vitesse. Chaque élément - de la typographie et l'animation à la mise en page et aux interactions - a été conçu avec précision pour refléter l'identité aventureuse mais raffinée de la marque. <br /> <br /> Le résultat est un site web haute performance et visuellement immersif qui combine parfaitement créativité et fonctionnalité. Le projet Safari Condo démontre comment Webflow, lorsqu'il est associé à une expertise technique et à un design réfléchi, peut offrir une plateforme engageante, dynamique et prête pour l'avenir qui inspire l'exploration et connecte profondément avec son audience.",
      de: "Safari Condo ist ein kanadisches Unternehmen, das für die Herstellung innovativer, langlebiger und zuverlässiger Wohnmobile und Reiseanhänger bekannt ist - entwickelt, um Reisende dorthin zu bringen, wohin ihr Abenteuergeist sie führt. Das Ziel dieses Webflow-Projekts war es, ein digitales Erlebnis zu schaffen, das Safaris Engagement für Qualität, Freiheit und Erkundung widerspiegelt und gleichzeitig eine optisch beeindruckende, schnelle und einfach zu navigierende Website bietet. <br /> <br /> Das Projekt wurde vollständig in Webflow unter Verwendung seines CMS erstellt und hat die Grenzen dessen, was innerhalb der Plattform möglich ist, erweitert. Es verfügt über ein hochgradig angepasstes und kreatives Design, das Lottie-Animationen integriert, die beim Scrollen sanft abgespielt werden, um die Markenstory auf interaktive Weise zum Leben zu erwecken. Um die Benutzererfahrung zu verbessern, habe ich sanftes Scrollen mit Lenis implementiert, um ein flüssiges und elegantes Browsing-Gefühl auf allen Seiten zu schaffen. <br /> <br /> Mehrere Finsweet-Lösungen wurden verwendet, um komplexe Inhaltsbeziehungen zu verwalten - einschließlich Verschachtelung und Kombination von Sammlungslists - was eine dynamischere Darstellung von Fahrzeugen, Modellen und verwandten Funktionen ermöglichte und gleichzeitig die Inhaltsverwaltung einfach und intuitiv hielt. Ich habe auch benutzerdefinierte Slider entwickelt, die sowohl die nativen Tools von Webflow als auch Swiper.js verwenden, um Leistung, Flexibilität und ein konsistentes Designsystem auf der gesamten Website zu gewährleisten. <br /> <br /> Ein benutzerdefiniertes Mega-Menü wurde entworfen, um die Zugänglichkeit und Navigation zu verbessern und die breite Produktpalette und Ressourcen von Safari Condo auf klare und visuell ansprechende Weise zu organisieren. <br /> <br /> Während des gesamten Projekts lagen die Hauptfokusbereiche auf einzigartigem Design, SEO, Zugänglichkeit und Geschwindigkeitsoptimierung. Jedes Element - von Typografie und Animation bis hin zu Layout und Interaktionen - wurde mit Präzision gestaltet, um die abenteuerliche, aber raffinierte Identität der Marke widerzuspiegeln. <br /> <br /> Das Ergebnis ist eine leistungsstarke, visuell immersive Website, die Kreativität nahtlos mit Funktionalität verbindet. Das Safari Condo-Projekt zeigt, wie Webflow in Kombination mit technischer Expertise und durchdachtem Design eine ansprechende, dynamische und zukunftsorientierte Plattform bieten kann, die zur Erkundung inspiriert und tief mit ihrem Publikum verbindet.",
      pt: "Safari Condo é uma empresa canadense renomada por fabricar motorhomes e trailers de viagem inovadores, duráveis e confiáveis - projetados para levar os viajantes aonde seu espírito de aventura os levar. O objetivo deste projeto Webflow era criar uma experiência digital que refletisse o compromisso da Safari Condo com qualidade, liberdade e exploração, ao mesmo tempo em que oferecia um site visualmente impressionante, rápido e fácil de navegar. <br /> <br /> Construído inteiramente no Webflow usando seu CMS, este projeto ultrapassou os limites do que é possível dentro da plataforma. Apresenta um design altamente personalizado e criativo, integrando animações Lottie que são reproduzidas suavemente ao rolar para dar vida à narrativa da marca de maneira interativa. Para melhorar a experiência do usuário, implementei rolagem suave com Lenis, criando uma sensação de navegação fluida e elegante em todas as páginas. <br /> <br /> Várias soluções Finsweet foram usadas para gerenciar relacionamentos complexos de conteúdo - incluindo aninhamento e combinação de listas de coleção - permitindo uma exibição mais dinâmica de veículos, modelos e recursos relacionados, mantendo a gestão de conteúdo simples e intuitiva. Também desenvolvi sliders personalizados usando tanto as ferramentas nativas do Webflow quanto o Swiper.js para garantir desempenho, flexibilidade e um sistema de design consistente em todo o site. <br /> <br /> Um mega menu personalizado foi projetado para melhorar a acessibilidade e a navegação, organizando a ampla gama de produtos e recursos da Safari Condo de maneira clara e visualmente atraente. <br /> <br /> Ao longo do projeto, as principais áreas de foco foram design único, SEO, acessibilidade e otimização de velocidade. Cada elemento - desde tipografia e animação até layout e interações - foi elaborado com precisão para refletir a identidade aventureira, mas refinada da marca. <br /> <br /> O resultado é um site de alto desempenho e visualmente imersivo que combina perfeitamente criatividade com funcionalidade. O projeto Safari Condo demonstra como o Webflow, quando combinado com expertise técnica e design cuidadoso, pode oferecer uma plataforma envolvente, dinâmica e pronta para o futuro que inspira exploração e conecta profundamente com seu público.",
    },
    tools: [
      "Finsweet",
      "Client First",
      "CMS",
      "Enzuzo",
      "Lenis Scroll",
      "Lottie",
      "GSAP",
      "Swiper",
    ],
    buttonLink: {
      en: "/webflow-projects/safari-condo",
      es: "/es/webflow-proyectos/safari-condo",
      fr: "/fr/webflow-projets/safari-condo",
      de: "/de/webflow-projekte/safari-condo",
      pt: "/pt/webflow-projetos/safari-condo",
    },
    liveLink: "https://www.safaricondo.com/",
  },
  {
    name: "La Citadelle",
    image: "/citadelle.png",
    platform: "Webflow",
    shortDescription: {
      en: "The Citadelle of Quebec is one of Canada’s most iconic landmarks — an active military fortress located in the heart of Old Quebec, overlooking the majestic St. Lawrence River. The goal of this project was to create an engaging and elegant digital experience that captures the Citadelle’s historical significance while making it easy for visitors to explore its attractions, museum, guided tours, and panoramic views.",
      es: "La Citadelle de Quebec es uno de los monumentos más emblemáticos de Canadá: una fortaleza militar activa ubicada en el corazón del Viejo Quebec, con vistas al majestuoso río San Lorenzo. El objetivo de este proyecto era crear una experiencia digital atractiva y elegante que capturara la importancia histórica de la Citadelle, al tiempo que facilitara a los visitantes la exploración de sus atracciones, museo, visitas guiadas y vistas panorámicas.",
      fr: "La Citadelle de Québec est l'un des monuments les plus emblématiques du Canada - une forteresse militaire active située au cœur du Vieux-Québec, surplombant le majestueux fleuve Saint-Laurent. L'objectif de ce projet était de créer une expérience numérique engageante et élégante qui capture l'importance historique de la Citadelle tout en facilitant aux visiteurs l'exploration de ses attractions, musée, visites guidées et vues panoramiques.",
      de: "Die Zitadelle von Quebec ist eines der ikonischsten Wahrzeichen Kanadas - eine aktive Militärfestung im Herzen der Altstadt von Quebec, mit Blick auf den majestätischen Sankt-Lorenz-Strom. Das Ziel dieses Projekts war es, ein ansprechendes und elegantes digitales Erlebnis zu schaffen, das die historische Bedeutung der Zitadelle einfängt und es den Besuchern gleichzeitig erleichtert, ihre Attraktionen, das Museum, geführte Touren und Panoramablicke zu erkunden.",
      pt: "A Cidadela de Quebec é um dos marcos mais icônicos do Canadá - uma fortaleza militar ativa localizada no coração do Velho Quebec, com vista para o majestoso Rio São Lourenço. O objetivo deste projeto era criar uma experiência digital envolvente e elegante que capturasse a importância histórica da Cidadela, facilitando aos visitantes a exploração de suas atrações, museu, visitas guiadas e vistas panorâmicas.",
    },
    description: {
      en: "The Citadelle of Quebec is one of Canada’s most iconic landmarks — an active military fortress located in the heart of Old Quebec, overlooking the majestic St. Lawrence River. The goal of this project was to create an engaging and elegant digital experience that captures the Citadelle’s historical significance while making it easy for visitors to explore its attractions, museum, guided tours, and panoramic views. <br /> <br /> Built entirely with Webflow and powered by its CMS, this project required careful planning and execution to balance design creativity with technical precision. The website features a unique and modern design that blends historical character with contemporary aesthetics. Smooth scroll-based animations bring content to life, while Lenis smooth scrolling ensures a fluid, polished browsing experience across all devices. <br /> <br /> To handle the complex structure of dynamic content, I implemented multiple Finsweet solutions, including nesting and combining collection lists — allowing seamless relationships between exhibits, tour schedules, and visitor information. Custom sliders were created using both native Webflow tools and Swiper.js, optimizing the display of rich visual content such as photo galleries and featured sections. <br /> <br /> Navigation was also a key focus, with a sticky menu for intuitive access and a custom mega menu to organize large amounts of information in a clear, user-friendly way. <br /> <br /> Throughout development, I prioritized unique design, SEO, accessibility, and speed optimization. Every element — from animation timing and color palette to layout hierarchy — was designed to enhance user engagement while maintaining top-tier performance and accessibility standards. <br /> <br /> The result is a visually captivating and technically robust website that honors the Citadelle’s heritage while providing a seamless digital experience for modern visitors. This project showcases how Webflow’s flexibility and CMS power, when paired with advanced techniques and thoughtful design, can elevate a historical institution’s online presence into something timeless, interactive, and memorable.",
      es: "La Citadelle de Quebec es uno de los monumentos más emblemáticos de Canadá: una fortaleza militar activa ubicada en el corazón del Viejo Quebec, con vistas al majestuoso río San Lorenzo. El objetivo de este proyecto era crear una experiencia digital atractiva y elegante que capturara la importancia histórica de la Citadelle, al tiempo que facilitara a los visitantes la exploración de sus atracciones, museo, visitas guiadas y vistas panorámicas. <br /> <br /> Construido íntegramente con Webflow y potenciado por su CMS, este proyecto requirió una planificación y ejecución cuidadosas para equilibrar la creatividad del diseño con la precisión técnica. El sitio web presenta un diseño único y moderno que combina el carácter histórico con la estética contemporánea. Las animaciones suaves basadas en el desplazamiento dan vida al contenido, mientras que el desplazamiento suave de Lenis garantiza una experiencia de navegación fluida y pulida en todos los dispositivos. <br /> <br /> Para manejar la estructura compleja del contenido dinámico, implementé múltiples soluciones de Finsweet, incluyendo anidamiento y combinación de listas de colecciones, lo que permite relaciones sin problemas entre exhibiciones, horarios de visitas y información para visitantes. Se crearon deslizadores personalizados utilizando tanto las herramientas nativas de Webflow como Swiper.js, optimizando la visualización de contenido visual rico como galerías de fotos y secciones destacadas. <br /> <br /> La navegación también fue un enfoque clave, con un menú fijo para un acceso intuitivo y un mega menú personalizado para organizar grandes cantidades de información de manera clara y fácil de usar. <br /> <br /> Durante el desarrollo, prioricé el diseño único, el SEO, la accesibilidad y la optimización de la velocidad. Cada elemento, desde el tiempo de animación y la paleta de colores hasta la jerarquía del diseño, fue diseñado para mejorar el compromiso del usuario mientras se mantenían estándares de rendimiento y accesibilidad de primer nivel. <br /> <br /> El resultado es un sitio web visualmente cautivador y técnicamente robusto que honra la herencia de la Citadelle mientras proporciona una experiencia digital perfecta para los visitantes modernos. Este proyecto demuestra cómo la flexibilidad y el poder del CMS de Webflow, cuando se combinan con técnicas avanzadas y un diseño reflexivo, pueden elevar la presencia en línea de una institución histórica a algo atemporal, interactivo e inolvidable.",
      fr: "La Citadelle de Québec est l'un des monuments les plus emblématiques du Canada - une forteresse militaire active située au cœur du Vieux-Québec, surplombant le majestueux fleuve Saint-Laurent. L'objectif de ce projet était de créer une expérience numérique engageante et élégante qui capture l'importance historique de la Citadelle tout en facilitant aux visiteurs l'exploration de ses attractions, musée, visites guidées et vues panoramiques. <br /> <br /> Entièrement construit avec Webflow et alimenté par son CMS, ce projet a nécessité une planification et une exécution minutieuses pour équilibrer la créativité du design avec la précision technique. Le site web présente un design unique et moderne qui mélange le caractère historique avec une esthétique contemporaine. Des animations fluides basées sur le défilement donnent vie au contenu, tandis que le défilement fluide de Lenis assure une expérience de navigation fluide et soignée sur tous les appareils. <br /> <br /> Pour gérer la structure complexe du contenu dynamique, j'ai mis en œuvre plusieurs solutions Finsweet, y compris le nesting et la combinaison de listes de collections - permettant des relations transparentes entre les expositions, les horaires des visites et les informations pour les visiteurs. Des curseurs personnalisés ont été créés en utilisant à la fois les outils natifs de Webflow et Swiper.js, optimisant l'affichage de contenus visuels riches tels que des galeries photos et des sections en vedette. <br /> <br /> La navigation a également été un point clé, avec un menu collant pour un accès intuitif et un méga menu personnalisé pour organiser de grandes quantités d'informations de manière claire et conviviale. <br /> <br /> Tout au long du développement, j'ai priorisé le design unique, le SEO, l'accessibilité et l'optimisation de la vitesse. Chaque élément - du timing des animations à la palette de couleurs en passant par la hiérarchie de la mise en page - a été conçu pour améliorer l'engagement des utilisateurs tout en maintenant des normes de performance et d'accessibilité de premier ordre. <br /> <br /> Le résultat est un site web visuellement captivant et techniquement robuste qui honore l'héritage de la Citadelle tout en offrant une expérience numérique fluide aux visiteurs modernes. Ce projet montre comment la flexibilité et la puissance du CMS de Webflow, associées à des techniques avancées et à un design réfléchi, peuvent élever la présence en ligne d'une institution historique en quelque chose d'intemporel, interactif et mémorable.",
      de: "Die Zitadelle von Quebec ist eines der ikonischsten Wahrzeichen Kanadas - eine aktive Militärfestung im Herzen der Altstadt von Quebec mit Blick auf den majestätischen Sankt-Lorenz-Strom. Das Ziel dieses Projekts war es, ein ansprechendes und elegantes digitales Erlebnis zu schaffen, das die historische Bedeutung der Zitadelle einfängt und es den Besuchern gleichzeitig erleichtert, ihre Attraktionen, das Museum, geführte Touren und Panoramablicke zu erkunden. <br /> <br /> Das Projekt wurde vollständig mit Webflow erstellt und von seinem CMS unterstützt, was eine sorgfältige Planung und Ausführung erforderte, um Designkreativität mit technischer Präzision in Einklang zu bringen. Die Website verfügt über ein einzigartiges und modernes Design, das historischen Charakter mit zeitgenössischer Ästhetik verbindet. Sanfte, scrollbasierte Animationen erwecken Inhalte zum Leben, während das sanfte Scrollen von Lenis ein flüssiges, poliertes Surferlebnis auf allen Geräten gewährleistet. <br /> <br /> Um die komplexe Struktur dynamischer Inhalte zu bewältigen, implementierte ich mehrere Finsweet-Lösungen, einschließlich Verschachtelung und Kombination von Sammlungslists - was nahtlose Beziehungen zwischen Ausstellungen, Tourplänen und Besucherinformationen ermöglicht. Benutzerdefinierte Slider wurden sowohl mit nativen Webflow-Tools als auch mit Swiper.js erstellt, um die Anzeige von reichhaltigen visuellen Inhalten wie Fotogalerien und hervorgehobenen Abschnitten zu optimieren. <br /> <br /> Die Navigation war ebenfalls ein wichtiger Fokus  mit einem Sticky-Menü für intuitiven Zugriff und einem benutzerdefinierten Mega-Menü, um große Informationsmengen auf klare, benutzerfreundliche Weise zu organisieren. <br /> <br /> Während der gesamten Entwicklung legte ich großen Wert auf einzigartiges Design, SEO, Zugänglichkeit und Geschwindigkeitsoptimierung. Jedes Element - von der Animationstiming und Farbpalette bis hin zur Layout-Hierarchie - wurde entwickelt, um die Benutzerbindung zu verbessern und gleichzeitig erstklassige Leistungs- und Zugänglichkeitsstandards einzuhalten. <br /> <br /> Das Ergebnis ist eine visuell fesselnde und technisch robuste Website, die das Erbe der Zitadelle ehrt und gleichzeitig ein nahtloses digitales Erlebnis für moderne Besucher bietet. Dieses Projekt zeigt, wie Webflows Flexibilität und CMS-Power in Kombination mit fortschrittlichen Techniken und durchdachtem Design die Online-Präsenz einer historischen Institution in etwas Zeitloses, Interaktives und Unvergessliches verwandeln können.",
      pt: "A Cidadela de Quebec é um dos marcos mais icônicos do Canadá - uma fortaleza militar ativa localizada no coração do Velho Quebec, com vista para o majestoso Rio São Lourenço. O objetivo deste projeto era criar uma experiência digital envolvente e elegante que capturasse a importância histórica da Cidadela, ao mesmo tempo em que facilitava aos visitantes a exploração de suas atrações, museu, visitas guiadas e vistas panorâmicas. <br /> <br /> Construído inteiramente com Webflow e alimentado por seu CMS, este projeto exigiu planejamento e execução cuidadosos para equilibrar a criatividade do design com a precisão técnica. O site apresenta um design único e moderno que combina o caráter histórico com a estética contemporânea. Animações suaves baseadas em rolagem dão vida ao conteúdo, enquanto a rolagem suave do Lenis garante uma experiência de navegação fluida e polida em todos os dispositivos. <br /> <br /> Para lidar com a estrutura complexa de conteúdo dinâmico, implementei várias soluções Finsweet, incluindo aninhamento e combinação de listas de coleção - permitindo relacionamentos perfeitos entre exposições, cronogramas de visitas e informações para visitantes. Sliders personalizados foram criados usando tanto as ferramentas nativas do Webflow quanto o Swiper.js, otimizando a exibição de conteúdo visual rico, como galerias de fotos e seções em destaque. <br /> <br /> A navegação também foi um foco chave, com um menu fixo para acesso intuitivo e um mega menu personalizado para organizar grandes quantidades de informações de maneira clara e amigável ao usuário. <br /> <br /> Ao longo do desenvolvimento, priorizei design único, SEO, acessibilidade e otimização de velocidade. Cada elemento - desde o tempo de animação e paleta de cores até a hierarquia do layout - foi projetado para melhorar o engajamento do usuário, mantendo padrões de desempenho e acessibilidade de primeira linha. <br /> <br /> O resultado é um site visualmente cativante e tecnicamente robusto que honra a herança da Cidadela, ao mesmo tempo em que proporciona uma experiência digital perfeita para visitantes modernos. Este projeto mostra como a flexibilidade e o poder do CMS do Webflow, quando combinados com técnicas avançadas e design cuidadoso, podem elevar a presença online de uma instituição histórica para algo atemporal, interativo e memorável.",
    },
    tools: [
      "Finsweet",
      "Client First",
      "CMS",
      "Enzuzo",
      "Lenis Scroll",
      "Swiper",
    ],
    buttonLink: {
      en: "/webflow-projects/la-citadelle",
      es: "/es/webflow-proyectos/la-citadelle",
      fr: "/fr/webflow-projets/la-citadelle",
      de: "/de/webflow-projekte/la-citadelle",
      pt: "/pt/webflow-projetos/la-citadelle",
    },
    liveLink: "https://www.lacitadelle.qc.ca/",
  },
];

export const seeProjects = {
  en: "See Projects",
  es: "Ver Proyectos",
  fr: "Voir les Projets",
  de: "Projekte ansehen",
  pt: "Ver Projetos",
};

export const relatedTools = {
  en: "Related Tools",
  es: "Herramientas Relacionadas",
  fr: "Outils Connexes",
  de: "Verwandte Tools",
  pt: "Ferramentas Relacionadas",
};

export const projects = {
  en: "Projects",
  es: "Proyectos",
  fr: "Projets",
  de: "Projekte",
  pt: "Projetos",
};

export const platform = {
  en: "Platform",
  es: "Plataforma",
  fr: "Plateforme",
  de: "Plattform",
  pt: "Plataforma",
};

export const tools = {
  en: "Tools",
  es: "Herramientas",
  fr: "Outils",
  de: "Werkzeuge",
  pt: "Ferramentas",
};

export const platforms = ["All", "Next.js", "Webflow"];

export const seeFullDetails = {
  en: "See all details",
  es: "Ver todos los detalles",
  fr: "Voir tous les détails",
  de: "Alle Details ansehen",
  pt: "Ver todos os detalhes",
};

export const toolsInThisProject = {
  en: "Tools in this project",
  es: "Herramientas en este proyecto",
  fr: "Outils dans ce projet",
  de: "Werkzeuge in diesem Projekt",
  pt: "Ferramentas neste projeto",
};

export const letsTalk = {
  en: "Let's Talk",
  es: "Hablemos",
  fr: "Contactez-moi",
  de: "Lass uns reden",
  pt: "Vamos conversar",
};

export const whatPeopleSay = {
  en: "What People Say",
  es: "Lo que la gente dice",
  fr: "Ce que les gens disent",
  de: "Was die Leute sagen",
  pt: "O que as pessoas dizem",
};

export const name = {
  en: "Name",
  es: "Nombre",
  fr: "Nom",
  de: "Name",
  pt: "Nome",
};

export const email = {
  en: "Email",
  es: "Correo electrónico",
  fr: "E-mail",
  de: "E-Mail",
  pt: "E-mail",
};

export const message = {
  en: "Message",
  es: "Mensaje",
  fr: "Message",
  de: "Nachricht",
  pt: "Mensagem",
};

export const sendMessage = {
  en: "Send Message",
  es: "Enviar Mensaje",
  fr: "Envoyer le message",
  de: "Nachricht senden",
  pt: "Enviar mensagem",
};

export const letsBuildYourProjectTogether = {
  en: "<span class='text-purple'>Let's build</span> your project <span class='text-purple'>together</span>",
  es: "<span class='text-purple'>Construyamos</span> tu proyecto <span class='text-purple'>juntos</span>",
  fr: "<span class='text-purple'>Construisons</span> votre projet <span class='text-purple'>ensemble</span>",
  de: "<span class='text-purple'>Lass uns</span> dein Projekt <span class='text-purple'>gemeinsam gestalten</span>",
  pt: "<span class='text-purple'>Vamos construir</span> seu projeto <span class='text-purple'>juntos</span>",
};

export const heroSubheading = {
  en: "We're dedicated to crafting high-quality, custom websites that not only look stunning but also perform flawlessly. Let’s work together to bring your vision to life and create a digital experience that truly stands out.",
  es: "Estamos dedicados a crear sitios web personalizados de alta calidad que no solo se vean impresionantes, sino que también funcionen a la perfección. Trabajemos juntos para dar vida a tu visión y crear una experiencia digital que realmente se destaque.",
  fr: "Nous nous engageons à créer des sites web personnalisés de haute qualité qui non seulement sont visuellement époustouflants, mais aussi fonctionnent parfaitement. Travaillons ensemble pour donner vie à votre vision et créer une expérience numérique qui se démarque vraiment.",
  de: "Wir sind bestrebt, hochwertige, maßgeschneiderte Websites zu erstellen, die nicht nur atemberaubend aussehen, sondern auch einwandfrei funktionieren. Lassen Sie uns zusammenarbeiten, um Ihre Vision zum Leben zu erwecken und ein digitales Erlebnis zu schaffen, das wirklich herausragt.",
  pt: "Estamos dedicados a criar sites personalizados de alta qualidade que não apenas tenham uma aparência impressionante, mas também funcionem perfeitamente. Vamos trabalhar juntos para dar vida à sua visão e criar uma experiência digital que realmente se destaque.",
};

export const heroAnimatedSubheading = {
  en: "The Web Design & Marketing Agency for Lake Atitlan Businesses",
  es: "La Agencia de Diseño Web y Marketing para Negocios en el Lago Atitlán",
  fr: "L'Agence de Conception Web et Marketing pour les Entreprises du Lac Atitlan",
  de: "Die Webdesign- und Marketingagentur für Unternehmen am Atitlan-See",
  pt: "A Agência de Design Web e Marketing para Empresas no Lago Atitlan",
};

// export const heroAnimatedSubheadingNext = {
//   en: "for ",
//   es: "para los ",
//   fr: "pour les ",
//   de: "für ",
//   pt: "para os ",
// };

export const heroAnimatedSubheadingWords = {
  en: [
    "Restaurants",
    "Hostels & Lodges",
    "Vacational Rentals",
    "Retreat centers",
    "Tour operators",
    "Restaurants",
  ],
  es: [
    "Restaurantes",
    "Hostales y Lodges",
    "Alquileres vacacionales",
    "Centros de retiro",
    "Operadores turísticos",
    "Restaurantes",
  ],
  fr: [
    "Restaurants",
    "Auberges & Lodges",
    "Locations de vacances",
    "Centres de retraite",
    "Tours opérateurs",
    "Restaurants",
  ],
  de: [
    "Restaurants",
    "Hostels & Lodges",
    "Ferienwohnungen",
    "Rückzugszentren",
    "Reiseveranstalter",
    "Restaurants",
  ],
  pt: [
    "Restaurantes",
    "Hostels e Lodges",
    "Aluguéis de temporada",
    "Centros de retiro",
    "Operadoras de turismo",
    "Restaurantes",
  ],
};

export const fiftyPlus = {
  en: "50+",
  es: "50+",
  fr: "50+",
  de: "50+",
  pt: "50+",
};

export const liveProjects = {
  en: "Live Projects",
  es: "Proyectos en Vivo",
  fr: "Projets en Direct",
  de: "Live-Projekte",
  pt: "Projetos ao Vivo",
};

export const whatOurClientsSay = {
  en: "What People Say",
  es: "Lo que dicen nuestros clientes",
  fr: "Ce que disent nos clients",
  de: "Was unsere Kunden sagen",
  pt: "O que nossos clientes dizem",
};

export const testimonials = {
  en: [
    {
      name: "Alex Ramirez",
      position: "Co-founder of Tierra Atitlan",
      testimonial:
        "Working with this agency was a game-changer for our business. They took the time to understand our needs and delivered a website that exceeded our expectations. The team was responsive, creative, and truly cared about our success.",
      url: "https://www.tierraatitlan.com/",
    },
    {
      name: "Dominique Nadeau",
      position: "CEO of Safari Condo",
      testimonial:
        "I can't recommend this agency enough! They transformed our online presence and helped us reach a wider audience. Their expertise in web design and marketing is unmatched, and they were a pleasure to work with from start to finish.",
      url: "https://www.safaricondo.com/",
    },
    {
      name: "Emily Johnson",
      position: "Founder of Hell & Back",
      testimonial:
        "The team at this agency is incredible! They created a stunning website for our startup that perfectly captures our brand's essence. Their attention to detail and commitment to quality is evident in every aspect of the project. We are thrilled with the results!",
      url: "https://www.hellandback.co/",
    },
  ],
  es: [
    {
      name: "Alex Ramirez",
      position: "Co-fundador de Tierra Atitlan",
      testimonial:
        "Trabajar con esta agencia fue un cambio total para nuestro negocio. Se tomaron el tiempo para entender nuestras necesidades y entregaron un sitio web que superó nuestras expectativas. El equipo fue receptivo, creativo y realmente se preocupó por nuestro éxito.",
      url: "https://www.tierraatitlan.com/",
    },
    {
      name: "Dominique Nadeau",
      position: "CEO de Safari Condo",
      testimonial:
        "¡No puedo recomendar esta agencia lo suficiente! Transformaron nuestra presencia en línea y nos ayudaron a llegar a una audiencia más amplia. Su experiencia en diseño web y marketing es inigualable, y fue un placer trabajar con ellos de principio a fin.",

      url: "https://www.safaricondo.com/",
    },
    {
      name: "Emily Johnson",
      position: "Fundadora de Hell & Back",
      testimonial:
        "¡El equipo de esta agencia es increíble! Crearon un sitio web impresionante para nuestra startup que captura perfectamente la esencia de nuestra marca. Su atención al detalle y compromiso con la calidad es evidente en cada aspecto del proyecto. ¡Estamos encantados con los resultados!",
      url: "https://www.hellandback.co/",
    },
  ],
  fr: [
    {
      name: "Alex Ramirez",
      position: "Co-fondateur de Tierra Atitlan",
      testimonial:
        "Travailler avec cette agence a été un véritable tournant pour notre entreprise. Ils ont pris le temps de comprendre nos besoins et ont livré un site web qui a dépassé nos attentes. L'équipe était réactive, créative et se souciait vraiment de notre succès.",
      url: "https://www.tierraatitlan.com/",
    },
    {
      name: "Dominique Nadeau",
      position: "PDG de Safari Condo",
      testimonial:
        "Je ne peux pas assez recommander cette agence ! Ils ont transformé notre présence en ligne et nous ont aidés à atteindre un public plus large. Leur expertise en conception web et marketing est inégalée, et ce fut un plaisir de travailler avec eux du début à la fin.",
      url: "https://www.safaricondo.com/",
    },
    {
      name: "Emily Johnson",
      position: "Fondatrice de Hell & Back",
      testimonial:
        "L'équipe de cette agence est incroyable ! Ils ont créé un site web époustouflant pour notre startup qui capture parfaitement l'essence de notre marque. Leur attention aux détails et leur engagement envers la qualité sont évidents dans chaque aspect du projet. Nous sommes ravis des résultats !",
      url: "https://www.hellandback.co/",
    },
  ],
  de: [
    {
      name: "Alex Ramirez",
      position: "Mitbegründer von Tierra Atitlan",
      testimonial:
        "Die Zusammenarbeit mit dieser Agentur war ein Wendepunkt für unser Unternehmen. Sie nahmen sich die Zeit, unsere Bedürfnisse zu verstehen und lieferten eine Website, die unsere Erwartungen übertraf. Das Team war reaktionsschnell, kreativ und kümmerte sich wirklich um unseren Erfolg.",
      url: "https://www.tierraatitlan.com/",
    },
    {
      name: "Dominique Nadeau",
      position: "CEO von Safari Condo",
      testimonial:
        "Ich kann diese Agentur nicht genug empfehlen! Sie haben unsere Online-Präsenz transformiert und uns geholfen, ein breiteres Publikum zu erreichen. Ihre Expertise in Webdesign und Marketing ist unübertroffen, und es war ein Vergnügen, von Anfang bis Ende mit ihnen zu arbeiten.",
      url: "https://www.safaricondo.com/",
    },
    {
      name: "Emily Johnson",
      position: "Gründerin von Hell & Back",
      testimonial:
        "Das Team dieser Agentur ist unglaublich! Sie haben eine atemberaubende Website für unser Startup erstellt, die die Essenz unserer Marke perfekt einfängt. Ihre Liebe zum Detail und ihr Engagement für Qualität sind in jedem Aspekt des Projekts erkennbar. Wir sind begeistert von den Ergebnissen!",
      url: "https://www.hellandback.co/",
    },
  ],
  pt: [
    {
      name: "Alex Ramirez",
      position: "Co-fundador da Tierra Atitlan",
      testimonial:
        "Trabalhar com esta agência foi uma virada de jogo para o nosso negócio. Eles dedicaram tempo para entender nossas necessidades e entregaram um site que superou nossas expectativas. A equipe foi responsiva, criativa e realmente se importou com nosso sucesso.",
      url: "https://www.tierraatitlan.com/",
    },
    {
      name: "Dominique Nadeau",
      position: "CEO da Safari Condo",
      testimonial:
        "Não posso recomendar esta agência o suficiente! Eles transformaram nossa presença online e nos ajudaram a alcançar um público mais amplo. Sua expertise em web design e marketing é incomparável, e foi um prazer trabalhar com eles do início ao fim.",
      url: "https://www.safaricondo.com/",
    },
    {
      name: "Emily Johnson",
      position: "Fundadora da Hell & Back",
      testimonial:
        "A equipe desta agência é incrível! Eles criaram um site deslumbrante para nossa startup que captura perfeitamente a essência da nossa marca. Sua atenção aos detalhes e compromisso com a qualidade é evidente em todos os aspectos do projeto. Estamos empolgados com os resultados!",
      url: "https://www.hellandback.co/",
    },
  ],
};

export const seeProject = {
  en: "See Project",
  es: "Ver Proyecto",
  fr: "Voir le Projet",
  de: "Projekt ansehen",
  pt: "Ver Projeto",
};

export const letsSit = {
  en: "Let's sit down for 1h and talk about your project, no strings attached.",
  es: "Sentémonos durante 1 hora y hablemos sobre tu proyecto, sin compromiso.",
  fr: "Prenons 1h pour discuter de votre projet, sans engagement.",
  de: "Lass uns 1 Stunde Zeit nehmen, um über dein Projekt zu sprechen, ganz unverbindlich.",
  pt: "Vamos reservar 1 hora para conversar sobre seu projeto, sem compromisso.",
};

export const firstConsultation = {
  en: "Book a <span class='text-purple' >free 1-hour</span> consultation",
  es: "Reserva una consulta <span class='text-purple' >gratuita de 1 hora</span>",
  fr: "Réservez une consultation <span class='text-purple' >gratuite d'1 heure</span>",
  de: "Buchen Sie eine <span class='text-purple' >kostenlose 1-stündige</span> Beratung",
  pt: "Agende uma consulta <span class='text-purple' >gratuita de 1 hora</span>",
};

export const language = {
  en: "Language",
  es: "Idioma",
  fr: "Langue",
  de: "Sprache",
  pt: "Idioma",
};

export const ourPillars = {
  en: "Our Pillars",
  es: "Nuestros Pilares",
  fr: "Nos Piliers",
  de: "Unsere Säulen",
  pt: "Nossos Pilares",
};

export const performance = {
  en: "Performance",
  es: "Rendimiento",
  fr: "Performance",
  de: "Leistung",
  pt: "Desempenho",
};

export const efficiency = {
  en: "Efficiency",
  es: "Eficiencia",
  fr: "Efficacité",
  de: "Effizienz",
  pt: "Eficiência",
};

export const flexibility = {
  en: "Flexibility",
  es: "Flexibilidad",
  fr: "Flexibilité",
  de: "Flexibilität",
  pt: "Flexibilidade",
};

export const communication = {
  en: "Communication",
  es: "Comunicación",
  fr: "Communication",
  de: "Kommunikation",
  pt: "Comunicação",
};

export const performanceDescription = {
  en: "Performance is part of the whole development process. By <span>compressing & resizing images, using SVGs, and building reusable components,</span> I ensure that every element is optimized for <span>fast loading times, smooth interactions, and overall excellent user experience</span>. Performance is also <span>crucial for SEO</span>, helping your website <span>rank higher</span> in search engine results and <span>attract more visitors.</span>",
  es: "El rendimiento es parte de todo el proceso de desarrollo. Al <span>comprimir y redimensionar imágenes, usar SVGs y construir componentes reutilizables,</span> me aseguro de que cada elemento esté optimizado para <span>tiempos de carga rápidos, interacciones suaves y una excelente experiencia de usuario en general.</span> El rendimiento también es <span>crucial para el SEO</span>, ayudando a tu sitio web a <span>posicionarse más alto</span> en los resultados de los motores de búsqueda y <span>atraer más visitantes.</span>",
  fr: "La performance fait partie de l'ensemble du processus de développement. En <span>compressant et redimensionnant les images, en utilisant des SVG et en construisant des composants réutilisables,</span> je m'assure que chaque élément est optimisé pour <span>des temps de chargement rapides, des interactions fluides et une excellente expérience utilisateur globale.</span> La performance est également <span>cruciale pour le SEO</span>, aidant votre site web à <span>se classer plus haut</span> dans les résultats des moteurs de recherche et à <span>attirer plus de visiteurs.</span>",
  de: "Leistung ist Teil des gesamten Entwicklungsprozesses. Durch das <span>Komprimieren und Ändern der Größe von Bildern, die Verwendung von SVGs und den Aufbau wiederverwendbarer Komponenten</span> stelle ich sicher, dass jedes Element für <span>schnelle Ladezeiten, reibungslose Interaktionen und insgesamt hervorragende Benutzererfahrung</span> optimiert ist. Leistung ist auch <span>entscheidend für SEO</span>, da sie Ihrer Website hilft, <span>höher zu ranken</span> in den Suchmaschinenergebnissen und <span>mehr Besucher anzuziehen.</span>",
  pt: "O desempenho faz parte de todo o processo de desenvolvimento. Ao <span>comprimir e redimensionar imagens, usar SVGs e construir componentes reutilizáveis,</span> garanto que cada elemento seja otimizado para <span>tempos de carregamento rápidos, interações suaves e uma excelente experiência do usuário em geral.</span> O desempenho também é <span>crucial para SEO</span>, ajudando seu site a <span>classificar mais alto</span> nos resultados dos motores de busca e <span>atrair mais visitantes.</span>",
};

export const efficiencyDescription = {
  en: "My vast experience as a developer allows me to work <span>as efficiently as possible</span>. I created <span>reusable systems and components</span> that can be easily adapted to different projects, which <span>significantly reduces development time and costs</span>. I'm also a really <span>fast learner</span> who stays up-to-date with the <span>latest tools and technologies</span>, allowing me to implement <span>the most efficient solutions</span> for each project.",
  es: "Mi amplia experiencia como desarrollador me permite trabajar <span>de la manera más eficiente posible</span>. He creado <span>sistemas y componentes reutilizables</span> que pueden adaptarse fácilmente a diferentes proyectos, lo que <span>reduce significativamente el tiempo de desarrollo y los costos</span>. También soy un <span>aprendiz rápido</span> que se mantiene actualizado con las <span>últimas herramientas y tecnologías</span>, lo que me permite implementar <span>las soluciones más eficientes</span> para cada proyecto.",
  fr: "Ma vaste expérience en tant que développeur me permet de travailler <span>de la manière la plus efficace possible</span>. J'ai créé <span>des systèmes et des composants réutilisables</span> qui peuvent être facilement adaptés à différents projets, ce qui <span>réduit considérablement le temps de développement et les coûts</span>. Je suis également un <span>apprenant rapide</span> qui se tient à jour avec les <span>derniers outils et technologies</span>, me permettant d'implémenter <span>les solutions les plus efficaces</span> pour chaque projet.",
  de: "Meine umfangreiche Erfahrung als Entwickler ermöglicht es mir, <span>so effizient wie möglich zu arbeiten</span>. Ich habe <span>wiederverwendbare Systeme und Komponenten</span> erstellt, die leicht an verschiedene Projekte angepasst werden können, was die <span>Entwicklungszeit und Kosten erheblich reduziert</span>. Ich bin auch ein <span>schneller Lerner</span>, der immer auf dem neuesten Stand der <span>neuesten Tools und Technologien</span> bleibt, was es mir ermöglicht, <span>die effizientesten Lösungen</span> für jedes Projekt zu implementieren.",
  pt: "Minha vasta experiência como desenvolvedor me permite trabalhar <span>da maneira mais eficiente possível</span>. Criei <span>sistemas e componentes reutilizáveis</span> que podem ser facilmente adaptados a diferentes projetos, o que <span>reduz significativamente o tempo de desenvolvimento e os custos</span>. Também sou um <span>aprendiz rápido</span> que se mantém atualizado com as <span>últimas ferramentas e tecnologias</span>, permitindo-me implementar <span>as soluções mais eficientes</span> para cada projeto.",
};

export const flexibilityDescription = {
  en: "After having built <span>more than 50 websites</span>, my journey has given me the opportunity to work with a wide <span>variety of tools and platforms</span>, allowing me to be flexible and adaptable to the specific needs of each project. Whether it's a <span>custom-built website</span> using Next.js or a <span>visually stunning site</span> built on Webflow, I have the skills and experience to deliver <span>high-quality results</span> that meet your unique requirements.",
  es: "Después de haber construido <span>más de 50 sitios web</span>, mi trayectoria me ha dado la oportunidad de trabajar con una amplia <span>variedad de herramientas y plataformas</span>, lo que me permite ser flexible y adaptable a las necesidades específicas de cada proyecto. Ya sea un <span>sitio web personalizado</span> construido con Next.js o un <span>sito visualmente impresionante</span> construido en Webflow, tengo las habilidades y experiencia para entregar <span>resultados de alta calidad</span> que cumplen con tus requisitos únicos.",
  fr: "Après avoir construit <span>plus de 50 sites web</span>, mon parcours m'a donné l'opportunité de travailler avec une large <span>variété d'outils et de plateformes</span>, me permettant d'être flexible et adaptable aux besoins spécifiques de chaque projet. Que ce soit un <span>site web personnalisé</span> construit avec Next.js ou un <span>site visuellement époustouflant</span> construit sur Webflow, j'ai les compétences et l'expérience pour fournir des <span>résultats de haute qualité</span> qui répondent à vos exigences uniques.",
  de: "Nachdem ich <span>mehr als 50 Websites</span> gebaut habe, hat mir meine Reise die Möglichkeit gegeben, mit einer Vielzahl von Tools und Plattformen zu arbeiten, was es mir ermöglicht, flexibel und anpassungsfähig an die spezifischen Bedürfnisse jedes Projekts zu sein. Ob es sich um eine <span>maßgeschneiderte Website</span> handelt, die mit Next.js erstellt wurde, oder um eine <span>visuell beeindruckende Seite</span>, die auf Webflow erstellt wurde, ich habe die Fähigkeiten und Erfahrungen, um <span>hochwertige Ergebnisse</span> zu liefern, die Ihren einzigartigen Anforderungen entsprechen.",
  pt: "Depois de ter construído <span>mais de 50 sites</span>, minha jornada me deu a oportunidade de trabalhar com uma ampla <span>variedade de ferramentas e plataformas</span>, permitindo-me ser flexível e adaptável às necessidades específicas de cada projeto. Seja um <span>site personalizado</span> construído com Next.js ou um <span>site visualmente impressionante</span> construído no Webflow, tenho as habilidades e experiência para entregar <span>resultados de alta qualidade</span> que atendem aos seus requisitos exclusivos.",
};

export const communicationDescription = {
  en: "I'm a <span>French Canadian based in Guatemala</span>, which has given me the opportunity to work with <span>clients and colleagues from all around the world.</span> I'm fluent in <span>English, Spanish, and French</span>, so I can communicate effectively with clients and team members in their preferred language. I believe that <span>clear and open communication</span> is key to the success of any project. I've now been <span>learning portuguese</span> for a few months and planning to go to Brazil in 2026 to be <span>fluent in Portuguese</span> as well",
  es: "Soy un <span>canadiense francés radicado en Guatemala</span>, lo que me ha dado la oportunidad de trabajar con <span>clientes y colegas de todo el mundo.</span> Hablo con fluidez <span>inglés, español y francés</span>, por lo que puedo comunicarme de manera efectiva con clientes y miembros del equipo en su idioma preferido. Creo que la <span>comunicación clara y abierta</span> es clave para el éxito de cualquier proyecto. Ahora llevo unos meses <span>aprendiendo portugués</span> y planeo ir a Brasil en 2026 para ser <span>fluente en portugués</span> también.",
  fr: "Je suis un <span>Canadien français basé au Guatemala</span>, ce qui m'a donné l'opportunité de travailler avec <span>des clients et des collègues du monde entier.</span> Je parle couramment <span>l'anglais, l'espagnol et le français</span>, ce qui me permet de communiquer efficacement avec les clients et les membres de l'équipe dans leur langue préférée. Je crois que <span>une communication claire et ouverte</span> est la clé du succès de tout projet. J'apprends maintenant le <span>portugais</span> depuis quelques mois et prévois d'aller au Brésil en 2026 pour être <span>fluide en portugais</span> également.",
  de: "Ich bin ein <span>französisch-kanadischer Entwickler mit Sitz in Guatemala</span>, was mir die Möglichkeit gegeben hat, mit <span>Kunden und Kollegen aus der ganzen Welt</span> zu arbeiten. Ich spreche fließend <span>Englisch, Spanisch und Französisch</span>, sodass ich effektiv mit Kunden und Teammitgliedern in ihrer bevorzugten Sprache kommunizieren kann. Ich glaube, dass <span>klare und offene Kommunikation</span> der Schlüssel zum Erfolg jedes Projekts ist. Ich lerne jetzt seit einigen Monaten <span>Portugiesisch</span> und plane, 2026 nach Brasilien zu gehen, um auch <span>fließend Portugiesisch</span> zu sprechen.",
  pt: "Sou um <span>canadense francês baseado na Guatemala</span>, o que me deu a oportunidade de trabalhar com <span>clientes e colegas de todo o mundo.</span> Sou fluente em <span>inglês, espanhol e francês</span>, então posso me comunicar efetivamente com clientes e membros da equipe em seu idioma preferido. Acredito que <span>uma comunicação clara e aberta</span> é fundamental para o sucesso de qualquer projeto. Agora estou <span>aprendendo português</span> há alguns meses e planejo ir para o Brasil em 2026 para ser <span>fluente em português</span> também.",
};
