import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
export const metadata: Metadata = {
  title: { default: "Staffing for CPA", template: "%s | Staffing for CPA" },
  description: "Staffing support for CPA firms.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="staffing">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
