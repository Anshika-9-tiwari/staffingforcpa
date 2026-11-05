import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

export function Hero({
  eyebrow,
  title,
  accent,
  description,
  image,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  image?: string;
}) {
  return (
    <section
      className={`bg-base-200 bg-cover bg-center py-20 md:py-28 ${image ? "text-white [&_p]:text-white/85 [&_.btn-outline]:border-white [&_.btn-outline]:text-white" : ""}`}
      style={
        image
          ? {
              backgroundImage: `linear-gradient(90deg,rgba(17,18,20,.9),rgba(17,18,20,.45)),url(${image})`,
            }
          : undefined
      }
    >
      <div className="mx-auto w-[86%] max-w-[1200px] max-sm:w-[88%]">
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
          {eyebrow}
        </p>
        <h1 className="my-6 max-w-[820px] text-5xl font-bold leading-[1.08] tracking-tight md:text-7xl">
          {title} <em className="not-italic text-primary">{accent}</em>
        </h1>
        <p className="max-w-[570px] text-lg leading-8 text-base-content/70">
          {description}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/consultation" className="btn btn-primary">
            Free consultation <ArrowUpRight size={17} />
          </Link>
          <Link href="/services" className="btn btn-outline">
            Explore services
          </Link>
        </div>
      </div>
    </section>
  );
}
export function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-9 flex flex-col justify-between gap-4 md:flex-row md:items-center [&>p]:max-w-sm [&>p]:leading-7 [&>p]:text-base-content/80">
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
          {eyebrow}
        </p>
        <h2 className="my-5 text-3xl font-bold leading-tight tracking-tight md:text-5xl">
          {title}
        </h2>
      </div>
      {description && <p>{description}</p>}
    </div>
  );
}
export function Cards({ items }: { items: { title: string; desc: string }[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {items.map((x, i) => (
        <article
          className="card min-h-[200px] rounded-none border border-base-300 bg-base-100 p-8 text-base-content [&_h3]:my-4 [&_p]:text-sm [&_p]:leading-7 [&_p]:text-base-content/75"
          key={x.title}
        >
          <span className="text-[10px] font-bold tracking-[0.15em] text-primary">
            0{i + 1}
          </span>
          <h3 className="text-xl font-bold tracking-tight">{x.title}</h3>
          <p>{x.desc}</p>
        </article>
      ))}
    </div>
  );
}
export function Checks({ items }: { items: string[] }) {
  return (
    <ul className="my-6 list-none p-0 [&_li]:flex [&_li]:items-start [&_li]:gap-3 [&_li]:border-b [&_li]:border-base-300 [&_li]:py-3 [&_li]:text-sm [&_svg]:shrink-0 [&_svg]:text-primary">
      {items.map((x) => (
        <li key={x}>
          <Check size={17} />
          {x}
        </li>
      ))}
    </ul>
  );
}
export function CTA() {
  return (
    <section className="bg-primary py-18 text-center text-primary-content [&_p:not(:first-child)]:mx-auto [&_p:not(:first-child)]:my-8 [&_p:not(:first-child)]:max-w-xl [&_p:not(:first-child)]:leading-7 [&_.eyebrow]:text-red-100">
      <div className="mx-auto w-[86%] max-w-[1200px] max-sm:w-[88%]">
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary-content">
          LET’S TALK
        </p>
        <h2 className="my-5 text-3xl font-bold leading-tight tracking-tight md:text-5xl">
          Ready for more room to grow?
        </h2>
        <p>
          Tell us what your firm needs and let’s explore the right next step
          together.
        </p>
        <Link className="btn btn-neutral-content" href="/consultation">
          Book a free consultation <ArrowUpRight size={17} />
        </Link>
      </div>
    </section>
  );
}
export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="max-w-[850px] [&_.collapse]:rounded-none [&_.collapse]:border-b [&_.collapse]:border-base-300 [&_.collapse-title]:font-semibold [&_.collapse-title]:text-2xl [&_.collapse-content_p]:leading-7 [&_.collapse-content_p]:text-base-content/80 [&_.collapse-content_p]:text-[19px]">
      {items.map((x) => (
        <details className="collapse collapse-plus" key={x.q}>
          <summary className="collapse-title">{x.q}</summary>
          <div className="collapse-content">
            <p>{x.a}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
