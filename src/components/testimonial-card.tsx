import { seeProject, SupportedLang } from "@/lib/utils";

interface Testimonial {
  name: string;
  position: string;
  testimonial: string;
  url: string;
}

export default function Testimonialcard({
  testimonial,
  lang,
}: {
  testimonial: Testimonial;
  lang: SupportedLang;
}) {
  console.log(testimonial);
  return (
    <div className="testimonial-card">
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
  );
}
