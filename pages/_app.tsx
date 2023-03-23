import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import MainGrid from "@/components/ui/MainGrid";

export default function App({ Component, pageProps }: AppProps) {
  // return <Component {...pageProps} />
  return <MainGrid Component={Component} pageProps={pageProps} />
}
