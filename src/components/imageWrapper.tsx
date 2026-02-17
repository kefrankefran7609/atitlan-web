import Image, { StaticImageData } from "next/image";

export default function ImageWrapper({
  src,
  alt,
}: {
  src: string | StaticImageData | { url: string };
  alt: string;
}) {
  // Ensure src is always a string or StaticImageData
  const imageSrc = typeof src === "object" && "url" in src ? src.url : src;

  return (
    <div className="image-scroll-wrapper">
      <Image src={imageSrc} alt={alt} fill sizes="100%" />
    </div>
  );
}
