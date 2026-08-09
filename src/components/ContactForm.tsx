import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) return "Please enter your name.";
    if (!formData.email.trim()) return "Please enter your email.";
    
    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      return "Please enter a valid email address.";
    }
    
    if (!formData.message.trim()) return "Please enter your message.";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationError = validateForm();
    if (validationError) {
      setErrorMessage(validationError);
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    /* 
      ======================================================
      CONNECTING A BACKEND (Formspree, EmailJS, etc.)
      ======================================================
      To send actual emails:
      
      Option A: Formspree (easiest)
      1. Replace this submit function or update form tag action to:
         action="https://formspree.io/f/YOUR_FORM_ID" method="POST"
      2. Or send a fetch request here:
         const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
           method: "POST",
           body: JSON.stringify(formData),
           headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
         });
      
      Option B: EmailJS
      1. Install emailjs-com: npm install @emailjs/browser
      2. Call emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
    */

    // Simulating API submission
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  if (status === "success") {
    return (
      <div className="bg-white border border-sand-300/60 p-8 rounded-2xl text-center flex flex-col items-center justify-center min-h-[400px] shadow-xs">
        <div className="w-16 h-16 rounded-full bg-sand-100 text-brown-accent flex items-center justify-center mb-6">
          <CheckCircle2 size={36} />
        </div>
        <h3 className="text-2xl font-bold text-charcoal mb-3">Message Sent Successfully!</h3>
        <p className="text-sm text-neutral-gray max-w-sm leading-relaxed mb-6">
          Thank you for reaching out, your message has been sent. Rakshit will get in touch with you shortly.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="px-6 py-2.5 rounded-xl border border-sand-300 hover:bg-sand-200 text-charcoal-muted font-semibold text-xs transition-colors cursor-pointer"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white border border-sand-300/60 p-6 md:p-8 rounded-2xl shadow-xs">
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name Input */}
        <div>
          <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-charcoal-muted mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            disabled={status === "submitting"}
            className="w-full px-4 py-3 bg-sand-50 border border-sand-300/80 rounded-xl text-sm focus:outline-hidden focus:border-brown-accent transition-colors disabled:opacity-60"
          />
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-charcoal-muted mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            disabled={status === "submitting"}
            className="w-full px-4 py-3 bg-sand-50 border border-sand-300/80 rounded-xl text-sm focus:outline-hidden focus:border-brown-accent transition-colors disabled:opacity-60"
          />
        </div>

        {/* Message Input */}
        <div>
          <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-charcoal-muted mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="How can we build something together?"
            disabled={status === "submitting"}
            className="w-full px-4 py-3 bg-sand-50 border border-sand-300/80 rounded-xl text-sm focus:outline-hidden focus:border-brown-accent transition-colors resize-none disabled:opacity-60"
          />
        </div>

        {/* Error Feedback */}
        {status === "error" && (
          <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs font-semibold animate-in fade-in duration-200">
            <AlertCircle size={14} className="shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Submit button */}
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full py-3.5 px-6 rounded-xl bg-brown-accent hover:bg-brown-accent-hover text-white text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 active:scale-99"
        >
          {status === "submitting" ? (
            <>
              <Loader2 size={14} className="animate-spin" />
              <span>Sending message...</span>
            </>
          ) : (
            <>
              <Send size={14} />
              <span>Send Message</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};
