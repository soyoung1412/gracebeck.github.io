import "./globals.css";

export const metadata = {
  title: "Grace Beck | Portfolio",
  description:
    "A cute multi-page portfolio for Grace Beck featuring graphic design, film, photography, and cinematic storytelling."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
