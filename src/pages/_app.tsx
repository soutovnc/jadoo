import { AppProps } from 'next/app'
import { Category } from '../components/Category'
import { Destination } from '../components/Destination'
import { Header } from '../components/Header'

import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Category />
      <Destination />
    </>
  ) 
}

export default MyApp
