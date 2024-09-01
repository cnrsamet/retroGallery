import { Inter } from "next/font/google";
import "../public/css/output.css";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Matemasie&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rowdies:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="w-full min-h-screen bg-blog-color-1">
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
