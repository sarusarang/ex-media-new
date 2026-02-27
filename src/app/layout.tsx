import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import SmoothScrolling from "@/components/common/SmoothScrolling";
import ScrollToTop from "@/components/common/ScrollToTop";
import { Metadata } from "next";
import "./globals.css";





export const metadata: Metadata = {


  metadataBase: new URL("https://ex-media.vercel.app"),


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
    canonical: "https://ex-media.vercel.app",
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
    url: "https://ex-media.vercel.app",
    siteName: "Ex Media",
    images: [
      {
        url: "/LOGO-trans.png",
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
    images: ["/logo.png"],
  },


  icons: {
    icon: "/LOGO-trans.png",
    apple: "/LOGO-trans.png",
  },


};





export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {


  return (

    <html lang="en">

      <head>


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


      <body className={`antialiased`}>

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
