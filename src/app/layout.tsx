import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import SmoothScrolling from "@/components/common/SmoothScrolling";
import ScrollToTop from "@/components/common/ScrollToTop";
import { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});





export const metadata: Metadata = {


  metadataBase: new URL("https://ex-media-new.vercel.app"),


  title: {
    default: "Exmedia",
    template: "%s",
  },


  description: "Ex Media delivers premium content, expert service, and a passionate community since 2026.",



  keywords: [
    "Ex Media",
    "Ex Media",
    "Ex Media",
    "Ex Media",
    "Ex Media",
    "Ex Media",
  ],


  authors: [{ name: "Ex Media" }],
  creator: "Ex Media",
  publisher: "Ex Media",


  alternates: {
    canonical: "https://ex-media-new.vercel.app",
  },

  category: "Media",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },


  openGraph: {
    title: "Ex Media — Premium Media",
    description: "Ex Media delivers premium content, expert service, and a passionate community since 2026.",
    url: "https://ex-media-new.vercel.app",
    siteName: "Ex Media",
    images: [
      {
        url: "https://ex-media-new.vercel.app/logo-white.jpeg",
        width: 1200,
        height: 630,
        alt: "Ex Media Premium Media",
      },
    ],
    locale: "en_US",
    type: "website",
  },


  twitter: {
    card: "summary_large_image",
    title: "Ex Media — Premium Media",
    description: "Ex Media delivers premium content, expert service, and a passionate community since 2026.",
    images: ["https://ex-media-new.vercel.app/logo-white.jpeg"],
  },


  icons: {
    icon: "/LOGO-trans.png",
    apple: "/LOGO-trans.png",
  },


};





export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {


  return (

    <html lang="en" className={montserrat.variable}>

      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Ex Media",
              url: "https://ex-media.vercel.app",
              logo: "https://ex-media.vercel.app/logo.png",
              foundingDate: "2026",
              description:
                "Ex Media delivers premium content, expert service, and a passionate community since 2026.",
            }),
          }}
        />


      </head>


      <body className={`${montserrat.className} antialiased`}>

        <SmoothScrolling>

          <ScrollToTop />

          <div className="flex flex-col min-h-screen">

            {/* Header */}
            <Header />


            {/* Page content */}
            <main className="flex-1">
              {children}
            </main>


            {/* Footer */}
            <Footer />


          </div>

        </SmoothScrolling>

      </body>


    </html>


  );


}
