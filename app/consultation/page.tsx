import {
  Hero,
  SectionTitle,
  Cards,
  CTA,
  FAQ,
  Checks,
} from "@/components/Common";
import ContactForm from "@/components/ContactForm";
export const metadata = { title: "Free consultation" };
export default function Consultation() {
  return (
    <>
      <Hero
        eyebrow="FREE CONSULTATION"
        title="Let’s talk about"
        accent="your firm."
        description="Tell us about your needs and start a conversation about the support your team is looking for."
      />
      <section className="py-16 md:py-24 mx-auto w-[86%] max-w-[1200px] max-sm:w-[88%] grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-[10%]">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
            GET STARTED
          </p>
          <h2 className="my-5 text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            Tell us what you need.
          </h2>
          <p className="text-base leading-8 text-base-content/70 dark-copy">
            Share a brief overview of your firm and the kind of work you would
            like supported. Please don’t include confidential client
            information.
          </p>
          <Checks
            items={[
              "Discuss your staffing requirements",
              "Explore possible support options",
              "Ask about next steps and pricing",
            ]}
          />
        </div>
        <ContactForm kind="consultation" />
      </section>
      <section className="py-16 md:py-24 bg-base-200">
        <div className="mx-auto w-[86%] max-w-[1200px] max-sm:w-[88%]">
          <SectionTitle
            eyebrow="WHAT WE’LL DISCUSS"
            title="A conversation focused on your needs."
          />
          <Cards
            items={[
              {
                title: "Your workload",
                desc: "The services, tasks and deadlines you need help with.",
              },
              {
                title: "Your preferences",
                desc: "The experience, tools and availability you are looking for.",
              },
              {
                title: "Your next steps",
                desc: "How to define the scope and request a proposal.",
              },
            ]}
          />
        </div>
      </section>
      <section className="py-16 md:py-24 mx-auto w-[86%] max-w-[1200px] max-sm:w-[88%] grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-[10%]">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
            BEFORE YOU SUBMIT
          </p>
          <h2 className="my-5 text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            Keep it brief and general.
          </h2>
        </div>
        <p className="text-base leading-8 text-base-content/70 dark-copy">
          A few sentences about your needs are enough to start. Avoid sending
          client names, tax IDs, financial records, passwords, or other
          sensitive information.
        </p>
      </section>
      <section className="py-16 md:py-24 bg-neutral text-neutral-content [&_.dark-copy]:text-neutral-content/75">
        <div className="mx-auto w-[86%] max-w-[1200px] max-sm:w-[88%] grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-[10%]">
          <h2 className="my-5 text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            Bring your questions.
          </h2>
          <p className="text-base leading-8 text-base-content/70 dark-copy">
            We can discuss the work, timing, collaboration and the details
            needed for a tailored proposal.
          </p>
        </div>
      </section>
      <section className="py-16 md:py-24 mx-auto w-[86%] max-w-[1200px] max-sm:w-[88%]">
        <SectionTitle
          eyebrow="CONSULTATION FAQ"
          title="A few helpful details."
        />
        <FAQ
          items={[
            {
              q: "Is the consultation free?",
              a: "Yes, the initial consultation is free.",
            },
            {
              q: "Does submitting the form create an agreement?",
              a: "No. Scope, pricing and terms must be agreed separately.",
            },
          ]}
        />
      </section>
      <CTA />
    </>
  );
}
