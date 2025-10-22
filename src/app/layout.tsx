import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from 'sonner';

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
      {/* TODO: add header and some classes here and check if need to fixed the header */}

      <body>
        <div
          className="min-h-dvh overflow-y-auto overflow-x-hidden flex flex-col bg-white"
          style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
          <Header />
          <div className="flex-1 flex flex-col ">
            {children}
            <Footer />
          </div>
            <Toaster
              className="sonner-toast"
              position="top-center"
              toastOptions={{
                style: {
                  background: '#fff',
                  color: '#111618',
                  border: '1px solid #dbe2e6',
                  borderRadius: 8,
                  fontFamily: 'Heebo, sans-serif',
                },
              }}
            />
        </div>
      </body>
    </html>
  );
}
