import type { NextPage } from 'next'
import Head from 'next/head'

import SETTINGS from '../../settings.json'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          {SETTINGS.appName}
        </title>

        <meta
          name="description"
          content="Chat em tempo real"
        />

        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <h1 className="font-bold">
        {SETTINGS.appName}
      </h1>
    </>
  )
}

export default Home
