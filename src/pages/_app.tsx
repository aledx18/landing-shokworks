import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Poppins, Hind } from 'next/font/google'

const hind = Hind({
  subsets: ['latin'],
  weight: '400'
})
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --poppins-font: ${poppins.style.fontFamily};
            --hind-font: ${hind.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  )
}
