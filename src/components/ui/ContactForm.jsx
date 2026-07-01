import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mykqdbrn");

  if (state.succeeded) {
    return (
      <div className="rounded-3xl border border-border bg-surface p-6 text-center sm:p-8">
        <h3 className="text-2xl font-semibold text-primary">
          Thank You! 🎉
        </h3>

        <p className="mt-4 text-muted">
          Your message has been sent successfully. I'll get back to you as soon
          as possible.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-border bg-surface p-5 sm:p-6 lg:p-8"
    >
      <div className="space-y-5 sm:space-y-6">
        <div>
          <input
            id="name"
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors duration-300 focus:border-primary sm:text-base"
          />
        </div>

        <div>
          <input
            id="email"
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors duration-300 focus:border-primary sm:text-base"
          />

          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="mt-2 text-sm text-red-400"
          />
        </div>

        <div>
          <textarea
            id="message"
            name="message"
            rows="6"
            required
            placeholder="Your Message"
            className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors duration-300 focus:border-primary sm:text-base"
          />

          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className="mt-2 text-sm text-red-400"
          />
        </div>

        <button
          type="submit"
          disabled={state.submitting}
          className="
            inline-flex
            items-center
            justify-center
            rounded-xl
            bg-primary
            px-5
            py-3
            text-sm
            font-medium
            text-background
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:opacity-90
            disabled:cursor-not-allowed
            disabled:opacity-60
            sm:px-6
            sm:text-base
          "
        >
          {state.submitting ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;