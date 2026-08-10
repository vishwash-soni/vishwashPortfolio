import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

function ContactForm() {
  const [status, setStatus] = useState("idle");
  const form = useRef();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    setStatus("submitting");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      reset()
      setStatus("success");

      setTimeout(() => {
        setStatus("idle");
      }, 3000);
    } catch (error) {
      console.error("EmailJS error:", error);

      setStatus("error");

      setTimeout(() => {
        setStatus("idle");
      }, 3000);
    }
  };

  return (
    <form  ref = {form} onSubmit={handleSubmit(onSubmit)}>
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-zinc-300 mb-2"
        >
          Name
        </label>

        <input
          id="name"
          placeholder={
            errors?.name?.message ? "Please Enter your name" : "Name"
          }
          {...register("name", {
            required: "Enter your name",
          })}
          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-zinc-500 outline-none focus:outline-none focus:ring-0 focus:ring-transparent focus:shadow-none focus:border-white transition-colors duration-200"
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-zinc-300 mb-2 mt-6"
        >
          Email
        </label>

        <input
          id="email"
          type="email"
          placeholder={
            errors?.email?.message ? "Please Enter your Email" : "Email"
          }
          {...register("email", {
            required: "Please enter your Email",
          })}
          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-zinc-500 outline-none focus:outline-none focus:ring-0 focus:ring-transparent focus:shadow-none focus:border-white transition-colors duration-200"
        />
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-zinc-300 mb-2 mt-6"
        >
          Message
        </label>

        <textarea
          id="message"
          rows={8}
          placeholder={
            errors?.message?.message
              ? "Please write your message"
              : "Message"
          }
          {...register("message", {
            required: "Please write your message",
          })}
          className="resize-none w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-zinc-500 outline-none focus:outline-none focus:ring-0 focus:ring-transparent focus:shadow-none focus:border-white transition-colors duration-200"
        />
      </div>

      {/* Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>

      {/* Validation Errors */}
      {Object.keys(errors).length > 0 && (
        <p className="text-sm text-[#f00] text-center mt-2">
          {Object.values(errors)[0].message}
        </p>
      )}

      {/* Success Message */}
      {status === "success" && (
        <p className="text-sm text-[#00ff40] text-center mt-2">
          Message sent! I'll get back to you soon.
        </p>
      )}

      {/* Error Message */}
      {status === "error" && (
        <p className="text-sm text-[#f00] text-center mt-2">
          Something went wrong. Please try again or email me directly.
        </p>
      )}
    </form>
  );
}

export default ContactForm;
