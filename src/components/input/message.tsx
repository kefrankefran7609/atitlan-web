import { LangProps, message } from "@/lib/utils";

export default function Message({ lang }: LangProps) {
  return (
    <div className="input-wrapper">
      <label htmlFor="inputMessage" className="label">
        {message[lang]}
      </label>
      <textarea
        className="input"
        name="inputMessage"
        id="inputMessage"
        placeholder="hey"
        required
        maxLength={800}
      />
    </div>
  );
}
