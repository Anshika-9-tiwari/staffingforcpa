"use client";
import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const slides = [
  {
    image: "/images/work-team.png",
    label: "STAFFING BUILT FOR CPA FIRMS",
    title: "Great work starts with great people.",
    text: "Give your firm the capacity to do more with thoughtful accounting and tax staffing support.",
  },
  {
    image: "/images/team.jpg",
    label: "PEOPLE. PARTNERSHIP. PROGRESS.",
    title: "A stronger team starts with the right support.",
    text: "Explore staffing options shaped around your workload, your team, and your goals.",
  },
  {
    image: "/images/office.jpg",
    label: "ROOM TO GROW",
    title: "Make more room for the work that matters.",
    text: "Discover additional support for bookkeeping, tax preparation and accounting workflows.",
  },
];
export default function HomeHero() {
  const [ref, api] = useEmblaCarousel({ loop: true });
  const [index, setIndex] = useState(0),
    [paused, setPaused] = useState(false),
    [hovered, setHovered] = useState(false);
  useEffect(() => {
    if (!api) return;
    const update = () => setIndex(api.selectedScrollSnap());
    api.on("select", update);
    return () => {
      api.off("select", update);
    };
  }, [api]);
  useEffect(() => {
    if (!api || paused || hovered) return;
    const timer = setInterval(() => api.scrollNext(), 6500);
    return () => clearInterval(timer);
  }, [api, paused, hovered]);
  return (
    <section
      className="relative bg-neutral text-neutral-content [&_.dark-copy]:text-neutral-content/75"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="overflow-hidden" ref={ref}>
        <div className="flex">
          {slides.map((s) => (
            <div
              className="flex min-h-[500px] w-full shrink-0 items-center bg-cover bg-center md:min-h-[585px]"
              key={s.label}
              style={{
                backgroundImage: `linear-gradient(90deg,rgba(15,16,18,.89),rgba(15,16,18,.32)),url('${s.image}')`,
              }}
            >
              <div className="mx-auto w-[86%] max-w-[1200px] max-sm:w-[88%] py-14 pb-28 [&_.lead]:text-white/90">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
                  {s.label} 
                </p> 
                <h1 className="my-6 max-w-[820px] text-5xl font-bold leading-[1.08] tracking-tight md:text-7xl">
                  {s.title} 
                </h1> 
                <p className="max-w-[570px] text-lg leading-8 text-white/90"> 
                  {s.text}
                </p> 
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/consultation" className="btn btn-primary"> 
                    Free consultation <ArrowUpRight size={18} />
                  </Link> 
                  <Link
                    href="/services"
                    className="btn border border-white bg-transparent text-white hover:bg-white hover:text-neutral"
                  >
                    Explore services 
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto w-[86%] max-w-[1200px] max-sm:w-[88%] absolute inset-x-0 bottom-8 flex items-center gap-2 [&_span]:text-xs [&_.btn]:min-h-8 [&_.btn]:h-8 [&_.btn]:border-white/50 [&_.btn]:bg-white/15 [&_.btn]:text-white">
        <button
          className="btn btn-sm"
          onClick={() => api?.scrollPrev()}
          aria-label="Previous slide"
        >
          ←
        </button>
        <span>{String(index + 1).padStart(2, "0")} / 03</span>
        <button
          className="btn btn-sm"
          onClick={() => api?.scrollNext()} 
          aria-label="Next slide"
        >
          →
        </button>
        <button
          className="btn btn-sm"
          onClick={() => setPaused(!paused)}
          aria-label={paused ? "Play slideshow" : "Pause slideshow"}
        >
          {paused ? "Play" : "Pause"}
        </button>
      </div>
    </section>
  );
}
