"use client";
import { useState } from "react";
import { services } from "@/lib/content";
export default function ContactForm({
  kind = "contact",
}: {
  kind?: "contact" | "consultation";
}) {
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setStatus("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      const r = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, kind }),
      });
      const result = await r.json();
      setStatus(result.message);
      if (r.ok) form.reset();
    } catch {
      setStatus("Could not send your request. Please try again later.");
    } finally {
      setBusy(false);
    }
  }
  return (
    <form
      onSubmit={submit}
      className="bg-base-200 p-6 md:p-9 [&_h3]:text-2xl [&_label]:mb-4 [&_label]:block [&_label]:text-xs [&_label]:font-bold [&_input]:mt-2 [&_input]:w-full [&_select]:mt-2 [&_select]:w-full [&_textarea]:mt-2 [&_textarea]:h-auto [&_textarea]:w-full [&>p]:my-4 [&>p]:text-sm [&>p]:text-base-content/70"
    >
      <h3 className="text-xl font-bold tracking-tight">
        {kind === "contact" ? "Send us a message" : "Request a consultation"}
      </h3>
      <p>Fields marked * are required.</p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label>
          Name *
          <input
            className="input input-bordered"
            name="name"
            required
            maxLength={100}
          />
        </label>
        <label>
          Work email *
          <input
            className="input input-bordered"
            type="email"
            name="email"
            required
            maxLength={254}
          />
        </label>
      </div>
      <label>
        Service *
        <select
          name="service"
          className="select select-bordered"
          required
          defaultValue=""
        >
          <option value="" disabled>
            Select a service
          </option>
          {services.map((x) => (
            <option key={x.id}>{x.title}</option>
          ))}
          <option>General enquiry</option>
        </select>
      </label>
      <label>
        Message *
        <textarea
          className="textarea textarea-bordered"
          name="message"
          rows={5}
          required
          minLength={10}
          maxLength={4000}
          placeholder="Tell us how we can help."
        />
      </label>
      <p className="text-xs">
        Please do not include confidential client or financial information.
      </p>
      <button className="btn btn-primary" disabled={busy}>
        {busy ? "Sending…" : "Submit request ↗"}
      </button>
      {status && (
        <p role="status" className="font-bold !text-base-content">
          {status}
        </p>
      )}
    </form>
  );
}
