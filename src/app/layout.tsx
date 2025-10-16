import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "מנופי רמון - מנופים איכותיים לחיי השניך",
  description: "מנופי רמון מספקת מנופים איכותיים ואמינים ללקוחות בערב הסעודית. מנופי תקרה ומנופים פנאומטיים עם שירות מקצועי ואמינות גבוהה.",
  keywords: "מנופים, מנופי תקרה, מנופים פנאומטיים, ערב סעודית, איכות, אמינות",
  openGraph: {
    title: "מנופי רמון",
    description: "מנופים איכותיים ואמינים לחיי השניך",
    type: "website",
    locale: "he_IL",
  }
};

// TODO: add div and put here a header and footer
//  and loading component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      {/* TODO: add header and some classes here */}
      {/* <body className="antialiased font-heebo"> */}
      <body className="">
        <div className="relative flex h-auto min-h-screen w-full flex-col bg-white group/design-root overflow-x-hidden" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
          <div className="flex h-dvh grow flex-col">
            <Header />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
