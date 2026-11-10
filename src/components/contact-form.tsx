"use client";

import { useState, type FormEvent } from "react";

const EMAIL = "rahmanmustafizur302@gmail.com";

export default function ContactForm() {
  const [note, setNote] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);

    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setNote("Opening your email app with the message ready to send.");
  }

  return (
    <form
      action={`mailto:${EMAIL}`}
      method="post"
      encType="text/plain"
      onSubmit={handleSubmit}
    >
      <label>
        Your name
        <input name="name" required autoComplete="name" />
      </label>
      <label>
        Your email
        <input name="email" type="email" required autoComplete="email" />
      </label>
      <label>
        Message
        <textarea name="message" required />
      </label>
      <button className="btn primary" type="submit">
        Send message
      </button>
      <p className="form-note" role="status" aria-live="polite">
        {note}
      </p>
    </form>
  );
}
