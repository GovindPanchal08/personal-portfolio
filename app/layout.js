import "./globals.css";

export const metadata = {
  title: "Hiren Panchal — Full-Stack Developer",
  description:
    "Portfolio of Hiren Panchal, a Full-Stack Developer who builds beautiful, fast and meaningful digital experiences with React, Node.js, and MongoDB.",
  openGraph: {
    title: "Hiren Panchal — Full-Stack Developer",
    description:
      "Portfolio of Hiren Panchal, a Full-Stack Developer based in India.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Google Fonts: Playfair Display (serif headline) + Inter (sans body) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
