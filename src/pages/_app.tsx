import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Poppins, Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900']
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
            --montserrat-font: ${montserrat.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  )
}
