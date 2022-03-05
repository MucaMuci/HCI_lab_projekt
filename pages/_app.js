import '../styles/globals.css'
import Head from 'next/head'
import AppContext from "../components/AppContext"
import { useState } from 'react'

function MyApp({ Component, pageProps }) {

  const [info, setInfo] = useState("");

  return (
    <>
      <Head>

        <link rel="icon" href="/images/favicon.ico" key="icon" />

      </Head>
      <AppContext.Provider
        value={{
          state: {
            info: info
          },
          setInfo: setInfo
        }}>
        <Component {...pageProps} />
      </AppContext.Provider>
    </>
  )
}

export default MyApp
