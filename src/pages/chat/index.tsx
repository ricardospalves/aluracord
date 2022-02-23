import type { NextPage } from 'next'
import Head from 'next/head'

import SETTINGS from '../../../settings.json'

const Chat: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          ChaT | {SETTINGS.appName}
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

      <main>
        <h1>Chat</h1>
      </main>
    </>
  )
}

export default Chat
