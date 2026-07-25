import { useState } from "react";
import { Send } from "lucide-react";

// ---------------------------------------------------------------
// ContactForm — controlled form ready for future backend integration.
//
// HOW TO CONNECT LATER (Firebase / Supabase):
// 1. Import your Firebase/Supabase client at the top of this file.
// 2. Inside handleSubmit, replace the "TODO" block with a call like:
//      await addDoc(collection(db, "messages"), formData);        // Firebase
//      await supabase.from("messages").insert([formData]);        // Supabase
// 3. Handle loading / success / error states using the existing
//    `status` state variable below — no other structural change needed.
// ---------------------------------------------------------------
function ContactForm() {
  // Holds the current values of all form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Tracks submission state: "idle" | "submitting" | "success"
  const [status, setStatus] = useState("idle");

  // Updates formData whenever any input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    // TODO: replace this block with a real Firebase/Supabase call (see notes above)
    await new Promise((resolve) => setTimeout(resolve, 800)); // simulated delay

    setStatus("success");
    setFormData({ name: "", email: "", message: "" });

    // Reset the success message after a few seconds
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-zinc-500 focus:border-cyan-400/50 outline-none transition-colors duration-200"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-zinc-500 focus:border-cyan-400/50 outline-none transition-colors duration-200"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell me about your project or opportunity..."
          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-zinc-500 focus:border-cyan-400/50 outline-none transition-colors duration-200 resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
        {status !== "submitting" && <Send size={18} />}
      </button>

      {status === "success" && (
        <p className="text-sm text-cyan-300 text-center">
          Message sent! I'll get back to you soon.
        </p>
      )}
    </form>
  );
}

export default ContactForm;
