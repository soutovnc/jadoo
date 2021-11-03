import { AppProps } from 'next/app'
import { Book } from '../components/Book'
import { Category } from '../components/Category'
import { Destination } from '../components/Destination'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Category />
      <Destination />
      <Book />
      <Footer />
    </>
  ) 
}

export default MyApp
