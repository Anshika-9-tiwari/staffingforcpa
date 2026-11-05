import Link from "next/link";
import { Hero, SectionTitle, CTA, Checks, FAQ } from "@/components/Common";
import { services } from "@/lib/content";
export const metadata = { title: "Services" };
export default function Services() {
  return (
    <>
      <Hero
        eyebrow="OUR SERVICES"
        title="The right support for"
        accent="the work ahead."
        description="Explore five service areas designed around the needs of CPA firms."
      />
      <section className="py-16 md:py-24 mx-auto w-[86%] max-w-[1200px] max-sm:w-[88%]">
        <SectionTitle
          eyebrow="FIVE WAYS TO SUPPORT YOUR FIRM"
          title="Find the right fit for your workload."
        />
        <div className="">
          {services.map((s, i) => (
            <article
              id={s.id}
              className="grid scroll-mt-6 grid-cols-1 gap-8 border-t border-base-300 py-14 md:grid-cols-2 md:gap-[10%]"
              key={s.id}
            >
              <div>
                <span className="text-[10px] font-bold tracking-[0.15em] text-primary">
                  0{i + 1} / SERVICES
                </span>
                <h2 className="my-5 text-3xl font-bold leading-tight tracking-tight md:text-5xl">
                  {s.title}
                </h2>
                <p className="text-base leading-8 text-base-content/70 dark-copy">
                  {s.desc}
                </p>
                <Link
                  className="mt-5 inline-flex text-sm font-bold text-primary hover:underline"
                  href={"/services/" + s.id}
                >
                  Explore {s.title} ↗
                </Link>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
                  EXAMPLES OF SUPPORT
                </p>
                <Checks items={s.items} />
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="py-16 md:py-24 bg-base-200">
        <div className="mx-auto w-[86%] max-w-[1200px] max-sm:w-[88%] grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-[10%]">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
              YOUR WORKFLOW
            </p>
            <h2 className="my-5 text-3xl font-bold leading-tight tracking-tight md:text-5xl">
              Start with your process.
            </h2>
          </div>
          <p className="text-base leading-8 text-base-content/70 dark-copy">
            Tell us which tasks you would like supported, the software you use,
            and how your team reviews work. The scope can be discussed during
            your consultation.
          </p>
        </div>
      </section>
      <section className="py-16 md:py-24 mx-auto w-[86%] max-w-[1200px] max-sm:w-[88%]">
        <SectionTitle eyebrow="ENGAGEMENT" title="What to discuss with us" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Work volume and deadlines",
            "Required skills and tools",
            "Communication and review",
          ].map((x) => (
            <div
              className="card min-h-[200px] rounded-none border border-base-300 bg-base-100 p-8 text-base-content [&_h3]:my-5 [&_p]:text-sm [&_p]:leading-7 [&_p]:text-base-content/70"
              key={x}
            >
              <h3 className="text-xl font-bold tracking-tight">{x}</h3>
              <p>
                Share your preferences so we can understand the support that
                fits your firm.
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 md:py-24 bg-neutral text-neutral-content [&_.dark-copy]:text-neutral-content/75">
        <div className="mx-auto w-[86%] max-w-[1200px] max-sm:w-[88%] grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-[10%]">
          <h2 className="my-5 text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            Support for the work behind your client relationships.
          </h2>
          <p className="text-base leading-8 text-base-content/70 dark-copy">
            Your firm remains responsible for defining procedures, reviewing
            work, and final approval.
          </p>
        </div>
      </section>
      <section className="py-16 md:py-24 mx-auto w-[86%] max-w-[1200px] max-sm:w-[88%]">
        <SectionTitle
          eyebrow="COMMON QUESTIONS"
          title="Questions about our services?"
        />
        <FAQ
          items={[
            {
              q: "Can we discuss more than one service?",
              a: "Yes. Tell us about the mix of work you need help with during your consultation.",
            },
            {
              q: "Is the scope fixed?",
              a: "The tasks, schedule, and scope should be discussed and agreed before work begins.",
            },
          ]}
        />
      </section>
      <CTA />
    </>
  );
}
