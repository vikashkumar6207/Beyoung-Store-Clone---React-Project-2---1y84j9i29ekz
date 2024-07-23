import UserProvider from "@/Provider/UserProvider";
import "@/styles/globals.css";
import { StrictMode } from "react";

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}
