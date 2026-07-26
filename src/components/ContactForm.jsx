import { useState, useRef } from "react";
import { Send } from "lucide-react";
import emailjs from '@emailjs/browser';

function ContactForm() {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // "idle" | "submitting" | "success" | "error"
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }

    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <form ref={form} onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
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
          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-zinc-500 outline-none focus:outline-none focus:ring-0 focus:ring-transparent focus:shadow-none focus:border-white transition-colors duration-200"
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
          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-zinc-500 outline-none focus:outline-none focus:ring-0 focus:ring-transparent focus:shadow-none focus:border-white transition-colors duration-200"
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
          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-zinc-500 outline-none focus:outline-none focus:ring-0 focus:ring-transparent focus:shadow-none focus:border-white transition-colors duration-200"
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
        <p className="text-sm text-[#00ff40] text-center">
          Message sent! I'll get back to you soon.
        </p>
      )}

      {status === "error" && (
        <p className="text-sm text-[#f00] text-center">
          Something went wrong. Please try again or email me directly.
        </p>
      )}

      
    </form>
  );
}

export default ContactForm;