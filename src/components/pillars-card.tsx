import { LangProps } from "@/lib/utils";

export default function PillarsCard({
  lang,
  icon,
  name,
  description,
  className,
}: LangProps & {
  icon: React.ReactNode;
  name: string;
  description: string;
  className: string;
}) {
  return (
    <div className={`pillars-card ${className}`}>
      <div className="pillars-card-icon">{icon}</div>
      <h3 className="mb-05">{name}</h3>
      <div
        dangerouslySetInnerHTML={{ __html: description }}
        className="pillars-card-description"
      />
    </div>
  );
}
