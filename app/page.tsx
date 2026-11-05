import HomeHero from "@/components/HomeHero";
import Link from "next/link";
import { SectionTitle, Cards, CTA, Checks, FAQ } from "@/components/Common";
import ServiceCarousel from "@/components/ServiceCarousel";
import { ArrowUpRight } from "lucide-react";
export default function Home() {
  return (
    <>
      <HomeHero />
      <section className="bg-primary py-5 text-[11px] font-bold tracking-[0.18em] text-primary-content [&>div]:flex [&>div]:items-center [&>div]:justify-between [&>div]:gap-4 [&>div]:overflow-hidden [&>div]:whitespace-nowrap">
        <div className="mx-auto w-[86%] max-w-[1200px] max-sm:w-[88%]">
          BOOKKEEPING <b>✳</b> TAX PREPARATION <b>✳</b> ACCOUNTS SUPPORT{" "}
          <b>✳</b> REPORTS ANALYSIS
        </div>
      </section>

      <section className="py-16 md:py-24 mx-auto w-[86%] max-w-[1200px] max-sm:w-[88%] grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-[10%]">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
            THE RIGHT PARTNER
          </p> 
          <h2 className="my-5 text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            Your firm’s goals deserve{" "}
            <em className="not-italic text-primary">room to grow.</em>
          </h2>
        </div>
        <div>
          <p className="text-base leading-8 text-base-content/70 dark-copy">
            Deadlines, client expectations, and changing workloads can stretch
            your team. The right support helps you make room for the work that
            matters most. <br /> 
            Everything you need to hire top accounting talent in India. Candidate shortlists in 3-5 days. Hire in under 3 weeks.
          </p>
          <Link
            className="mt-5 inline-flex text-sm font-bold text-primary hover:underline"
            href="/about"
          >
            Get to know us ↗
          </Link>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-base-200">
        <div className="mx-auto w-[86%] max-w-[1200px] max-sm:w-[88%]">
          <SectionTitle
            eyebrow="WHAT WE DO"
            title="Easily Hire Top Talent in India for Every Accounting Role"
            description="Explore the work areas where your firm may need additional capacity. We help US accounting firms hire top talent in India across tax, accounting, payroll, and finance."
          />
          <ServiceCarousel />
        </div>
      </section>

      <section className="py-16 md:py-24 mx-auto w-[86%] max-w-[1200px] max-sm:w-[88%]">
        <SectionTitle
          eyebrow="WHY STAFFING" 
          title="Why US Accounting Firms Hire Talent in India with Accountably"
          description="Accountably is a staffing and recruiting agency that helps US CPA, EA, and accounting firms hire talent from India across tax, accounting, payroll, and finance. Our white-glove partnership approach sets us apart."
        />
        
        <Cards
          items={[
            {
              title: "Flexible capacity",
              desc: "Discuss the workload, role, and schedule that fit your firm.",
            },
            {
              title: "Top 1% candidate quality",
              desc: "The hardest part of working with us is choosing between candidates.",
            },
            {
              title: "Your way of working",
              desc: "Share the tools, review process, and expectations your team follows.",
            },
            {
              title: "A dedicated account manager",
              desc: "Your account manager is your single point of contact for all questions and support.",
            },
            {
              title: "A long-term partnership",
              desc: "We’re here to support your firm’s growth and success for the long term.",
            },
            {
              title: "A thoughtful approach",
              desc: "Start with a conversation about the specific support you need.",
            },
          ]}
        />
      </section>

      <section className="py-16 md:py-24 bg-neutral text-neutral-content [&_.dark-copy]:text-neutral-content/75">
        <div className="mx-auto w-[86%] max-w-[1200px] max-sm:w-[88%] grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-[10%]">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary !text-red-300">
              HOW IT WORKS
            </p>
            <h2 className="my-5 text-3xl font-bold leading-tight tracking-tight md:text-5xl">
              A clear path to additional support.
            </h2>
          </div>
          <div>
            <Checks
              items={[
                "Tell us about your firm and requirements",
                "Explore a staffing approach together",
                "Agree on the next steps for your team",
              ]}
            />
            <Link
              href="/how-it-works"
              className="btn btn-outline border-white/60 text-white"
            >
              See how it works  <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 mx-auto w-[86%] max-w-[1200px] max-sm:w-[88%] grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-[10%]">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
             PRICING
          </p>
          <h2 className="my-5 text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            Support shaped around you.
          </h2>
        </div>
        <div>
          <p className="text-base leading-8 text-base-content/70 dark-copy">
            Every firm is different. Our sample plans give you a starting point
            for discussing your needs and a tailored proposal.
          </p>
          <Link
            href="/pricing"
            className="mt-5 inline-flex text-sm font-bold text-primary hover:underline"
          >
            View sample pricing ↗
          </Link>
        </div>
      </section>
      <section className="py-16 md:py-20 bg-base-200">
       <div className="mx-auto w-[86%] max-w-[1200px] max-sm:w-[88%]">
         <SectionTitle eyebrow="COMMON Asked QUESTIONS" title="Before you begin." />
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
              {
                q: "Do I need to sponsor candidates / issue a work visa to hire in India?",
                a: "No, you don't need to sponsor candidates for a visa for remote work where they will continue to reside in their country. 'Your hires in India are not US-based and therefore don't need a visa/sponsorship to work.'",
              },
              {
                q: "What happens if a team member leaves?",
                a: "A trained backup steps in. When someone rolls off, we shadow and hand over during their notice period, so your workflow never takes a hit.  'Every engagement runs on SOPs and structured workpapers, so the work stays consistent no matter who does it.'",
              },
            ]}
          />
        </div> 
      </section>
      <CTA />
    </>
  );
}
