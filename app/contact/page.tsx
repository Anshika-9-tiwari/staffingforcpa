import { Hero, SectionTitle, Cards, CTA, FAQ } from "@/components/Common";
import ContactForm from "@/components/ContactForm";
import { contact } from "@/lib/content";
import { MdEmail } from "react-icons/md";

export const metadata = { title: "Contact" };

export default function Contact() {
  return (
    <>
      <Hero
        eyebrow="CONTACT US"
        title="Let’s start a"
        accent="conversation."
        description="Have a question about staffing support? Tell us how we can help."
      />
      <section className="py-16 md:py-24 mx-auto w-[86%] max-w-[1200px] max-sm:w-[88%] grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-[10%]">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
            GET IN TOUCH
          </p>
          <h2 className="my-5 text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            We’re here to help.
          </h2>
          <p className="text-base leading-8 text-base-content/75 dark-copy mb-6 text-[17px]">
            Use the form to share a general enquiry. The contact details below
            are placeholders and are not monitored.
          </p>
          <div className="[&_p]:mt-4 [&_p]:leading-8 [&_p]:text-primary/75 [&_strong]:text-base-content [&_strong]:text-[19px] [&_a]:hover:text-primary text-[17px] tracking-wide">
            <p>
              <strong>Phone & WhatsApp </strong>
              <br />
              <a href="tel:+919876543210">{contact.phone}</a>
            </p>
            <p>
              <strong>Email</strong>
              <br />
              <a href="mailto:info@staffingforcpa.com">{contact.email} </a>
            </p>
            <p>
              <strong>Address</strong>
              <br />
              {contact.Address}
            </p>
          </div>
        </div>
        <ContactForm />
      </section>
      <section className="py-16 md:py-24 bg-base-200">
        <div className="mx-auto w-[86%] max-w-[1200px] max-sm:w-[88%]">
          <SectionTitle
            eyebrow="HOW CAN WE HELP?"
            title="Choose the conversation you need."
          />
          <Cards
            items={[
              {
                title: "Service questions",
                desc: "Ask about bookkeeping, tax preparation or other support.",
              },
              {
                title: "Pricing enquiries",
                desc: "Discuss the scope and request a tailored proposal.",
              },
              {
                title: "Consultation",
                desc: "Share your goals and explore the next step with us.",
              },
            ]}
          />
        </div>
      </section>
      <section className="py-16 md:py-24 mx-auto w-[86%] max-w-[1200px] max-sm:w-[88%] grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-[10%]">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
            YOUR PRIVACY
          </p>
          <h2 className="my-5 text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            Share only what is needed.
          </h2>
        </div>
        <p className="text-base leading-8 text-base-content/70 dark-copy">
          Please don’t submit client data, passwords, tax identifiers, or
          financial documents through this form. Share general details only.
        </p>
      </section>
      <CTA />
    </>
  );
}
