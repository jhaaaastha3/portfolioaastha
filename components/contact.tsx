"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "@emailjs/browser";
import { Send, Loader2 } from "lucide-react";

// Form Validation Schema
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type FormData = z.infer<typeof formSchema>;

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

      // If placeholders are still present, simulate a success for demonstration
      if (serviceId === "YOUR_SERVICE_ID") {
        console.warn("EmailJS variables are not set. Simulating form submission.");
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setSubmitStatus("success");
        reset();
        setIsSubmitting(false);
        return;
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        publicKey
      );

      setSubmitStatus("success");
      reset();
    } catch (error) {
      console.error("Failed to send email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative z-10">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 fade-up visible">
          <h2 className="section-heading">Get in touch.</h2>
          <p className="section-subtitle">
            Have a project in mind or just want to say hi? Let's connect!
          </p>
        </div>

        <div className="glass-card p-8 md:p-12 fade-up visible hover:transform-none">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-text-primary">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  className={`w-full px-4 py-3 rounded-xl bg-black/5 dark:bg-white/5 border ${errors.name ? 'border-destructive' : 'border-black/10 dark:border-white/10'} focus:border-coral focus:ring-1 focus:ring-coral outline-none transition-colors text-text-primary placeholder:text-text-muted`}
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-text-primary">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className={`w-full px-4 py-3 rounded-xl bg-black/5 dark:bg-white/5 border ${errors.email ? 'border-destructive' : 'border-black/10 dark:border-white/10'} focus:border-coral focus:ring-1 focus:ring-coral outline-none transition-colors text-text-primary placeholder:text-text-muted`}
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-text-primary">
                Message
              </label>
              <textarea
                id="message"
                placeholder="What's on your mind?"
                rows={5}
                className={`w-full px-4 py-3 rounded-xl bg-black/5 dark:bg-white/5 border ${errors.message ? 'border-destructive' : 'border-black/10 dark:border-white/10'} focus:border-coral focus:ring-1 focus:ring-coral outline-none transition-colors text-text-primary placeholder:text-text-muted resize-none`}
                {...register("message")}
              />
              {errors.message && (
                <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
              )}
            </div>

            {/* Submit Status & Button */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
              <div className="text-sm flex-1">
                {submitStatus === "success" && (
                  <p className="text-mint">Message sent successfully! I'll be in touch soon.</p>
                )}
                {submitStatus === "error" && (
                  <p className="text-destructive">Failed to send message. Please try again later.</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-3 bg-coral text-white font-medium rounded-xl hover:bg-coral/90 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={18} />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
