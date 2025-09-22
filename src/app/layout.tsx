import type { Metadata } from "next";
import "./globals.css";
import Script from 'next/script';

export const metadata: Metadata = {
  title: "ResoNex - Actionable Business Insights",
  description: "Lead with Data. Accelerate with Automation.",
  icons: {
    icon: "/images/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-1X00GEXYL3"
          strategy="afterInteractive"
          async
        ></Script>
        <Script id="google-analytics" strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1X00GEXYL3');
            `,
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
