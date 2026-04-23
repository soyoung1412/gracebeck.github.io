import { M_PLUS_Rounded_1c, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const display = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "700", "800"],
  display: "swap"
});

export const metadata = {
  title: "Grace Beck | Portfolio",
  description:
    "A soft pastel portfolio landing page for a multidisciplinary designer focused on UI design, visual storytelling, motion, and branding."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${sans.variable} ${display.variable}`}>
        {children}
      </body>
    </html>
  );
}
