import {
  Hero,
  SectionTitle,
  Cards,
  CTA,
  FAQ,
  Checks,
} from "@/components/Common";
export const metadata = { title: "How it works" };
export default function HowItWorks() {
  return (
    <>
      <Hero
        image="/images/office.jpg"
        eyebrow="HOW IT WORKS"
        title="A simple path to"
        accent="more capacity."
        description="Start with a conversation about your firm, your workload, and the support you need."
      />
      <section className="py-16 md:py-24 mx-auto w-[86%] max-w-[1200px] max-sm:w-[88%]">
        <SectionTitle
          eyebrow="THE PROCESS"
          title="Three steps to get started."
        />
        <Cards
          items={[
            {
              title: "01. Tell us what you need",
              desc: "Share the work, skills, tools, and schedule you have in mind.",
            },
            {
              title: "02. Explore your options",
              desc: "Discuss a suitable approach and the scope of support.",
            },
            {
              title: "03. Plan the next step",
              desc: "Review the proposal and agree on responsibilities before beginning.",
            },
          ]}
        />
      </section>
      <section className="py-16 md:py-24 bg-base-200">
        <div className="mx-auto w-[86%] max-w-[1200px] max-sm:w-[88%] grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-[10%]">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
              PREPARE
            </p>
            <h2 className="my-5 text-3xl font-bold leading-tight tracking-tight md:text-5xl">
              What to bring to the conversation.
            </h2>
          </div>
          <Checks
            items={[
              "The tasks your team would like supported",
              "Estimated workload and timing",
              "Preferred software and experience",
              "Your review and communication process",
            ]}
          />
        </div>
      </section>
      <section className="py-16 md:py-24 mx-auto w-[86%] max-w-[1200px] max-sm:w-[88%] grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-[10%]">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
            DEFINE THE WORK
          </p>
          <h2 className="my-5 text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            Clear expectations make work smoother.
          </h2>
        </div>
        <p className="text-base leading-8 text-base-content/70 dark-copy">
          Agree on responsibilities, access requirements, confidentiality, and
          quality checks before any work begins. Your firm retains review and
          final approval.
        </p>
      </section>
      <section className="py-16 md:py-24 bg-neutral text-neutral-content [&_.dark-copy]:text-neutral-content/75">
        <div className="mx-auto w-[86%] max-w-[1200px] max-sm:w-[88%] grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-[10%]">
          <h2 className="my-5 text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            Communication keeps everyone aligned.
          </h2>
          <p className="text-base leading-8 text-base-content/70 dark-copy">
            Discuss a practical cadence for questions, updates, and feedback
            that works for your team.
          </p>
        </div>
      </section>
      <section className="py-16 md:py-24 mx-auto w-[86%] max-w-[1200px] max-sm:w-[88%]">
        <SectionTitle eyebrow="COMMON QUESTIONS" title="Before you begin." />
        <FAQ
          items={[
            {
              q: "What does Staffing For CPA do, and how does Staffing For CPA help US firms hire accountants in India?",
              a: "Staffing For CPA helps US firms hire top-tier accounting talent in India through full-service recruitment and staffing services.  We connect firms with high-performing professionals across tax, accounting, CAS, and payroll.",
            },
            {
              q: "What roles can Staffing For CPA help me hire in India?",
              a: "We help US firms hire talent in India across tax (tax preparers, tax reviewers), accounting and bookkeeping (staff accountants, bookkeepers, controllers), AP, AR and payroll (AP/AR specialists, payroll specialists), and finance and management (financial analysts, accounting managers, virtual CFOs). 'Start with 1-3 hires and add more as trust builds'.",
            },
            {
              q: "Will the people I hire through Staffing For CPA work directly for me?",
              a: "Yes. The people you hire through Staffing For CPA will work directly for your firm, following your processes and reporting to your team.  'You start small, see the work, and expand seat by seat.'",
            },
          ]}
        />
      </section>
      <CTA />
    </>
  );
}
