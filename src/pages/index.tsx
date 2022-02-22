import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import SETTINGS from '../../settings.json'

const USERNAME = 'ricardospalves'

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

      <main className="min-h-screen flex p-2">
        <section
          className="lg:flex max-w-3xl w-full p-2 bg-neutral-900 m-auto rounded"
        >
          <form
            className="lg:mr-8 lg:flex-grow lg:self-center"
          >
            <h1 className="font-bold text-lg text-center mb-4">
              Bem-vindo ao Aluracord
            </h1>

            <label
              htmlFor="fieldUsername"
              className="block pb-1"
            >
              Nome de usuário no GitHub
            </label>

            <input
              type="text"
              id="fieldUsername"
              defaultValue={USERNAME}
              autoFocus
              className="block w-full px-2 h-12 bg-transparent border rounded ring-sky-500/75 focus-visible:outline-none focus:ring"
            />

            <button
              className="block w-full h-12 rounded mt-2 bg-green-700 focus:outline-none ring-sky-500/75 focus-visible:ring transition focus:bg-green-900 hover:bg-green-900"
            >
              Entrar
            </button>
          </form>

          <figure
            className="lg:mt-0 mt-4 p-2 lg:flex lg:flex-col lg:justify-center lg:items-center lg:flex-shrink-0 lg:w-1/4 text-center rounded bg-black"
          >
            <Image
              src={`https://github.com/${USERNAME}.png`}
              alt={`Avatar do usuário ${USERNAME}`}
              width={100}
              height={100}
              className="block rounded-full mx-auto"
            />

            <figcaption
              className="break-words"
            >
              {USERNAME}
            </figcaption>
          </figure>
        </section>
      </main>
    </>
  )
}

export default Home
