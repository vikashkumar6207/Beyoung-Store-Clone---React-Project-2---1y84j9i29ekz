import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/header";
import UserProvider, { UserContext } from "@/Provider/UserProvider";
import { Html, Head, Main, NextScript } from "next/document";
import { Children } from "react";

export default function Document({ children }) {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Header />
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  );
}
