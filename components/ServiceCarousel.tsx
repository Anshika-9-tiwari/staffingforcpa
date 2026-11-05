"use client";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import { services } from "@/lib/content";

export default function ServiceCarousel() {
  const [ref, api] = useEmblaCarousel({ align: "start" });
  return (
    <div>
      <div className="mb-4 flex justify-end gap-2">
        <button
          className="btn btn-outline btn-sm"
          onClick={() => api?.scrollPrev()}
          aria-label="Previous service"
        >
          ←
        </button>
        <button
          className="btn btn-outline btn-sm"
          onClick={() => api?.scrollNext()}
          aria-label="Next service"
        >
          →
        </button>
      </div>
      <div className="overflow-hidden" ref={ref}>
        <div className="flex gap-4">
          {services.map((s, i) => (
            <article
              className="min-w-0 shrink-0 basis-[90%] md:basis-[48%] lg:basis-[32%] card min-h-[200px] rounded-none border border-base-300 bg-base-100 p-8 text-base-content [&_h3]:my-5 [&_p]:text-sm [&_p]:leading-7 [&_p]:text-base-content/70"
              key={s.id}
            >
              <span className="text-[10px] font-bold tracking-[0.15em] text-primary">
                0{i + 1}
              </span>
              <h3 className="text-xl font-bold tracking-tight">{s.title}</h3>
              <p>{s.desc}</p>
              <Link
                className="mt-5 inline-flex text-sm font-bold text-primary hover:underline"
                href={"/services/" + s.id}
              >
                Explore service ↗
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
