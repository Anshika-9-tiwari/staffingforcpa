import Link from "next/link";
import {
  Hero,
  SectionTitle,
  CTA,
  Checks,
  FAQ,
  Cards,
} from "@/components/Common";

export const metadata = { title: "Pricing" };

const plans = [
  {
    name: "Essential",
    price: "$499",
    description:
      "A sample starting point for firms exploring recurring support.",
  },
  {
    name: "Growth",
    price: "$999",
    description: "A sample plan for a broader recurring workload.",
  },
  {
    name: "Dedicated",
    price: "$1,999",
    description: "A sample option for firms considering dedicated support.",
  },
];
export default function Pricing() {
  return (
    <>
      <Hero
        eyebrow="PRICING"
        title="Flexible support,"
        accent="clear starting points."
        description="These prices are examples for review and will be updated before launch."
      />
      <section className="py-16 md:py-24 mx-auto w-[86%] max-w-[1200px] max-sm:w-[88%]">
        <SectionTitle
          eyebrow="ILLUSTRATIVE PRICING"
          title="Explore sample plans."
          description="Final pricing, hours, scope and terms are subject to discussion."
        />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((p) => (
            <article
              className="card min-h-[200px] rounded-none border border-base-300 bg-base-100 p-8 text-base-content [&_h3]:my-5 [&_p]:text-sm [&_p]:leading-7 [&_p]:text-base-content/70 [&_.btn]:mt-auto"
              key={p.name}
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
                SAMPLE PLAN
              </p>
              <h3 className="text-xl font-bold tracking-tight">{p.name}</h3>
              <div className="text-4xl font-bold tracking-tight [&_small]:text-xs [&_small]:font-normal [&_small]:text-base-content/60">
                {p.price}
                <small> / month</small>
              </div>
              <p>{p.description}</p>
              <Checks
                items={[
                  "Free initial consultation",
                  "Scope discussed with your firm",
                  "Custom proposal available",
                ]}
              />
              <Link className="btn btn-primary" href="/consultation">
                Discuss this plan ↗
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24 bg-base-200">
        <div className="mx-auto w-[86%] max-w-[1200px] max-sm:w-[88%] grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-[10%]">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
              CUSTOM FIT
            </p>
            <h2 className="my-5 text-3xl font-bold leading-tight tracking-tight md:text-5xl">
              There is no one-size-fits-all team.
            </h2>
          </div>
          <p className="text-base leading-8 text-base-content/70 dark-copy  md:my-8">
            The right arrangement depends on workload, experience, hours and the
            services your firm needs.
          </p>
        </div>
      </section>
      <section className="py-16 md:py-24 mx-auto w-[86%] max-w-[1200px] max-sm:w-[88%]">
        <SectionTitle
          eyebrow="WHAT SHAPES A QUOTE"
          title="A few details make a difference."
        />
        <Cards
          items={[
            {
              title: "Scope of work",
              desc: "The tasks and responsibilities involved.",
            },
            {
              title: "Capacity",
              desc: "The expected hours and frequency of support.",
            },
            {
              title: "Experience",
              desc: "The skills and tools your work requires.",
            },
          ]}
        />
      </section>
      <section className="py-16 md:py-24 bg-neutral text-neutral-content [&_.dark-copy]:text-neutral-content/75">
        <div className="mx-auto w-[86%] max-w-[1200px] max-sm:w-[88%] grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-[10%]">
          <h2 className="my-5 text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            Start with a free conversation.
          </h2>
          <p className="text-base leading-8 text-base-content/70 dark-copy md:my-5">
            Share your requirements and we can discuss the next step toward a
            proposal.
          </p>
        </div>
      </section>
      {/* <section className="py-16 md:py-24 mx-auto w-[86%] max-w-[1200px] max-sm:w-[88%]">
        <SectionTitle eyebrow="PRICING FAQ" title="Good to know." />
        <FAQ
          items={[
            {
              q: "Are these final prices?",
              a: "No. The displayed prices are examples and should be replaced with approved pricing.",
            },
            {
              q: "Are hours included in these examples?",
              a: "Hours and deliverables have not been set; they will need to be agreed in a final proposal.",
            },
          ]}
        />
      </section> */}
      <CTA />
    </>
  );
}
