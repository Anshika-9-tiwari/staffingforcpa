import { Hero, SectionTitle, Cards, CTA, Checks } from "@/components/Common";
import Link from "next/link";
import { CgArrowTopRight } from "react-icons/cg";
export const metadata = { title: "About us" };

export default function About() {
  return (
    <>
      <Hero
        image="/images/team.jpg"
        eyebrow="ABOUT US"
        title="People make"
        accent="the difference."
        description="We believe good work starts with understanding the people and processes behind every firm."
      />
      <section className="py-16 md:py-24 mx-auto w-[86%] max-w-[1200px] max-sm:w-[88%] grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-[10%]">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
            OUR PURPOSE
          </p>
          <h2 className="my-5 text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            Making space for meaningful work.
          </h2>
        </div>
        <p className="text-base leading-8 text-base-content/70 dark-copy md:pt-9">
          Staffing for CPA helps firms explore additional support for accounting
          and tax work. We start by understanding your goals, workload, and the
          way your team operates.
        </p>
      </section>
      <section className="py-16 md:py-24 bg-base-200">
        <div className="mx-auto w-[86%] max-w-[1200px] max-sm:w-[88%]">
          <SectionTitle
            eyebrow="OUR APPROACH"
            title="A partnership built around your firm."
          />
          <Cards
            items={[
              {
                title: "Listen first",
                desc: "We begin with your requirements and the challenges your team faces.",
              },
              {
                title: "Define the work",
                desc: "Together, we discuss skills, tasks, timelines, and expectations.",
              },
              {
                title: "Plan the next step",
                desc: "Explore a staffing arrangement that suits the scope you define.",
              },
            ]}
          />
        </div>
      </section>
      <section className="py-16 md:py-24 mx-auto w-[86%] max-w-[1200px] max-sm:w-[88%] grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-[10%]">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
            WHAT MATTERS
          </p>
          <h2 className="my-5 text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            Clarity, consistency, and communication.
          </h2>
        </div>
        <Checks
          items={[
            "Clear responsibilities and expectations",
            "Processes aligned to your firm’s workflow",
            "Ongoing communication with your team",
          ]}
        />
      </section>
  
      <section className="py-16 md:py-24 bg-neutral text-neutral-content [&_.dark-copy]:text-neutral-content/80">
        <div className="mx-auto w-[86%] max-w-[1200px] max-sm:w-[88%] grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-[10%]">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
              WHO WE SUPPORT
            </p>
            <h2 className="my-5 text-3xl font-bold leading-tight tracking-tight md:text-5xl">
              For firms balancing people and deadlines.
            </h2>
          </div>
          <div>
            <p className="text-base leading-8 text-base-content/70 dark-copy  md:my-6">
              Whether you need help with recurring work or a busy period, start with a conversation about your needs.
            </p>
            <Link
              href="/services"
              className="btn border border-primary bg-primary text-white hover:bg-white hover:text-neutral"
            >
              Explore services <CgArrowTopRight/>
            </Link>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 mx-auto w-[86%] max-w-[1200px] max-sm:w-[88%]">
        <SectionTitle
          eyebrow="OUR FOCUS"
          title="Accounting work, with people at the center."
        />
        <Cards
          items={[
            {
              title: "Everyday support",
              desc: "Explore support for recurring bookkeeping and transaction work.",
            },
            {
              title: "Seasonal capacity",
              desc: "Discuss additional help when tax preparation deadlines approach.",
            },
            {
              title: "Reporting support",
              desc: "Organize financial information for review and reporting.",
            },
          ]}
        />
      </section>
      <CTA />
    </>
  );
}
