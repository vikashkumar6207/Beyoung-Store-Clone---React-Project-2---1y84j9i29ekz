import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/header'
import UserProvider from '@/Provider/UserProvider'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        {/* <UserProvider> */}
        <Header />
        <Main /> 
        <NextScript />
        <Footer />
        {/* </UserProvider> */}
      </body>
    </Html>
  )
}
