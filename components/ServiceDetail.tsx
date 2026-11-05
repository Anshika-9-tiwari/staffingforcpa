import Link from "next/link";
import { details } from "@/lib/service-details";
import { Hero, SectionTitle, CTA, Checks, FAQ } from "@/components/Common";
type Slug = keyof typeof details;
export default function ServiceDetail({ slug }: { slug: Slug }) {
  const s = details[slug];
  return (
    <>
      <Hero
        eyebrow={"SERVICES / " + s.title.toUpperCase()}
        title={s.headline}
        accent=""
        description={s.intro}
      />
      <section className="py-16 md:py-24 mx-auto w-[86%] max-w-[1200px] max-sm:w-[88%] grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-[10%]">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
            OVERVIEW
          </p>
          <h2 className="my-5 text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            What this service covers.
          </h2>
        </div>
        <p className="text-base leading-8 text-base-content/70 dark-copy">
          {s.overview}
        </p>
      </section>
      <section className="py-16 md:py-24 bg-base-200">
        <div className="mx-auto w-[86%] max-w-[1200px] max-sm:w-[88%]">
          <SectionTitle
            eyebrow="HOW WE CAN HELP"
            title="A closer look at the work."
          />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:!grid-cols-2">
            {s.work.map(([title, desc], i) => (
              <article
                className="card min-h-[200px] rounded-none border border-base-300 bg-base-100 p-8 text-base-content [&_h3]:my-5 [&_p]:text-sm [&_p]:leading-7 [&_p]:text-base-content/70"
                key={title}
              >
                <span className="text-[10px] font-bold tracking-[0.15em] text-primary">
                  0{i + 1}
                </span>
                <h3 className="text-xl font-bold tracking-tight">{title}</h3>
                <p>{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 mx-auto w-[86%] max-w-[1200px] max-sm:w-[88%] grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-[10%]">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
            WHAT YOUR TEAM CAN EXPECT
          </p>
          <h2 className="my-5 text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            Information prepared for review.
          </h2>
        </div>
        <Checks items={[...s.deliverables]} />
      </section>
      <section className="py-16 md:py-24 bg-neutral text-neutral-content [&_.dark-copy]:text-neutral-content/75">
        <div className="mx-auto w-[86%] max-w-[1200px] max-sm:w-[88%] grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-[10%]">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary !text-red-200">
              A FIT FOR YOUR FIRM
            </p>
            <h2 className="my-5 text-3xl font-bold leading-tight tracking-tight md:text-5xl">
              Support tailored to your workload.
            </h2>
          </div>
          <p className="text-base leading-8 text-base-content/70 dark-copy">
            {s.goodFor} The exact scope, experience and schedule are agreed
            before work begins.
          </p>
        </div>
      </section>
      <section className="py-16 md:py-24 mx-auto w-[86%] max-w-[1200px] max-sm:w-[88%]">
        <SectionTitle
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          title="Common questions."
        />
        <FAQ items={s.faq.map(([q, a]) => ({ q, a }))} />
        <Link
          className="mt-5 inline-flex text-sm font-bold text-primary hover:underline"
          href="/services"
        >
          ← Back to all services
        </Link>
      </section>
      <CTA />
    </>
  );
}
