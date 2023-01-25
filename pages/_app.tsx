import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import {Navbar} from '../components'
//can also written by this the "Navbar" just a
//import Navbar from '../components/navbar'
import {Web3Provider} from "@/components/provider";


export default function App({ Component, pageProps }: AppProps) {
  return (
      <>
          <Web3Provider>
              <Component {...pageProps}/>
          </Web3Provider>
      </>
  )
}




