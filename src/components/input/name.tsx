import { LangProps, name } from "@/lib/utils";

export default function Name({ lang }: LangProps) {
  return (
    <div className="input-wrapper">
      <label htmlFor="inputName" className="label">
        {name[lang]}
      </label>
      <input
        type="text"
        className="input"
        name="inputName"
        id="inputName"
        placeholder="hey"
        required
        maxLength={50}
      />
    </div>
  );
}
