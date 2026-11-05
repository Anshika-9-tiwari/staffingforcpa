import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <>
      <footer className="bg-neutral py-16 text-neutral-content/90">
        <div className="mx-auto w-[86%] max-w-[1200px] max-sm:w-[88%] grid grid-cols-2 gap-8 lg:grid-cols-[2fr_1fr_1.3fr_1.3fr] [&_h3]:mb-5 [&_h3]:text-[19px] [&_h3]:tracking-widest [&_p]:my-2 [&_p]:text-[16px] [&_p]:leading-6 [&_p]:text-neutral-content/75 [&_a:not(.brand)]:my-1.5 [&_a:not(.brand)]:tracking-wider  [&_a:not(.brand)]:text-[16px] [&_a:not(.brand)]:text-neutral-content/75 [&_a:not(.brand)]:hover:text-primary-content">
          <div>
            <Link
              href="/"
              className="flex  items-center gap-3 text-sm font-extrabold tracking-wider [&_small]:mt-1 [&_small]:block [&_small]:text-[10px] [&_small]:tracking-[0.3em]"
            >
              <span className="text-5xl font-extrabold tracking-[-0.10em] [&_span]:text-primary mb-2">
                S<span>.</span>
              </span>
              <span>
                STAFFING<small>FOR CPA</small>
              </span>
            </Link>
            <p>People for the work that matters. People for the work that matters. People for the work that matters.</p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl font-bold tracking-tight">EXPLORE</h3>
            <Link href="/about">About us</Link>
            <Link href="/services">Services</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/how-it-works">How it works</Link>
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl font-bold tracking-tight">LET’S CONNECT</h3>
            <Link href="/contact">Contact</Link>
            <Link href="/consultation">Free consultation</Link>
            <a href="tel:+919876543210" aria-label="phone contact information">
             +91 98765 43210 ↗ 
            </a>
            <a href="mailto:info@staffingforcpa.com" aria-label="Email contact information">
              info@staffingforcpa.com ↗ 
            </a>
          </div>
          <div>
            <h3 className="text-xl font-bold tracking-tight">OUR FOCUS</h3>
            <p>Thoughtful staffing support for CPA firms. Thoughtful staffing support for CPA firms.</p>
          </div>
        </div>
        <div className="mx-auto w-[86%] max-w-[1200px] max-sm:w-[88%] mt-15 flex justify-between gap-5 border-t border-neutral-content/20 pt-8 text-xs text-neutral-content/65 tracking-wider">
          © {new Date().getFullYear()} Staffing for CPA{" "}
          <span>PEOPLE. PARTNERSHIP. PROGRESS.</span>
        </div>
      </footer>
      <div className="fixed bottom-8 right-6 z-30 grid gap-2 [&_a]:grid [&_a]:size-12 [&_a]:place-items-center [&_a]:rounded-full [&_a]:bg-primary [&_a]:text-white [&_a]:shadow-lg  [&_a:nth-child(2)]:bg-success animate-pulse">
        <a href="http://wa.me/919876543210" aria-label="WhatsApp contact information">
          <FaWhatsapp size={23} />
        </a>
        <a href="tel:+919876543210" aria-label="phone contact information">
          <Phone size={21} />
        </a>
        <a href="mailto:info@staffingforcpa.com" aria-label="Email contact information">
          <Mail/>
        </a>
      </div>
    </>
  );
}
