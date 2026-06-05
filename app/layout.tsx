import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ContractorTax — Auto-categorize freelancer expenses",
  description: "Connects to your bank and credit cards to automatically categorize business expenses for 1099 contractors. Generate tax-ready reports in minutes."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="91c95db6-abab-405e-a07b-d171e885197d"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
