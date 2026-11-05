"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import { services } from "@/lib/content";
export default function Header() {
  const [open, setOpen] = useState(false),
    [servicesOpen, setServicesOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function close(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node))
        setServicesOpen(false);
    }
    function escape(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setOpen(false);
      }
    }
    document.addEventListener("click", close);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("click", close);
      document.removeEventListener("keydown", escape);
    };
  }, []);
  function close() {
    setOpen(false);
    setServicesOpen(false);
  }
  return (
    <header className="relative z-20 sticky border-b border-base-300 bg-base-100">
      <div className="navbar  flex min-h-[75px] justify-between mx-auto w-[86%] max-w-[1200px] max-sm:w-[88%]">
        <Link
          href="/"
          className="flex items-center gap-3 text-sm font-extrabold tracking-wider [&_small]:mt-1 [&_small]:block [&_small]:text-[10px] [&_small]:tracking-[0.3em]"
          onClick={close}
        >
          <span className="text-5xl font-extrabold tracking-[-0.10em] [&_span]:text-primary">
            S<span>.</span>
          </span>
          <span>
            STAFFING<small>FOR CPA</small>
          </span>
        </Link>
        <button
          className="btn btn-ghost lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          aria-label="Main navigation"
          className={`${open ? "flex" : "hidden"} absolute inset-x-0 top-20 flex-col items-stretch gap-5 bg-base-100 px-[8%] py-8 text-[16.5px] font-semibold shadow-lg lg:static lg:flex lg:flex-row lg:items-center lg:gap-6 lg:bg-transparent lg:p-0 lg:shadow-none `}
        >
          <Link onClick={close} href="/">
            Home
          </Link>
          <Link onClick={close} href="/about">
            About
          </Link>
          <div className="relative w-full lg:w-auto" ref={ref}>
            <button
              type="button"
              className="flex cursor-pointer items-center gap-1 bg-transparent font-semibold hover:text-primary"
              aria-expanded={servicesOpen}
              aria-controls="services-menu"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services <ChevronDown size={18} />
            </button>
            {servicesOpen && (
              <ul
                id="services-menu"
                className="menu z-30 mt-3 w-60 rounded-box bg-base-100 p-2 shadow lg:absolute lg:left-0 lg:top-full [&_li]:hover:text-primary"
              >
                <li>
                  <Link href="/services" onClick={close}>
                    All services
                  </Link>
                </li>
                {services.map((s) => (
                  <li key={s.id}>
                    <Link href={"/services/" + s.id} onClick={close}>
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <Link onClick={close} href="/pricing">
            Pricing
          </Link>
          <Link onClick={close} href="/how-it-works">
            How it works
          </Link>
          <Link onClick={close} href="/contact">
            Contact
          </Link> 
          <Link
            onClick={close}
            className="btn btn-primary text-primary-content  tracking-wider"
            href="/consultation"
          >
            Free consultation <ArrowUpRight size={18} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
