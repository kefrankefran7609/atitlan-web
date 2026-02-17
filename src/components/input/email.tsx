import { LangProps, email } from "@/lib/utils";

export default function EmailInput({ lang }: LangProps) {
  return (
    <div className="input-wrapper">
      <label htmlFor="inputEmail" className="label">
        {email[lang]}
      </label>
      <input
        type="email"
        className="input"
        name="inputEmail"
        id="inputEmail"
        placeholder="hey"
        required
        maxLength={80}
      />
    </div>
  );
}
