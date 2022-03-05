import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { MdSend } from 'react-icons/md'

import SETTINGS from '../../../settings.json'
import { supabaseClient } from '../../services/client'
import { Button } from '../../components/Button'
import { Textarea } from '../../components/Input'
import { MessageProps } from '../../components/Message'
import { MessageList } from '../../components/MessageList'
import { Stickers } from '../../components/Stickers'
import { Loader } from '../../components/Loader'

type MessageList = Array<MessageProps>

const SEND_MESSAGE_TEXT = 'Enviar a mensagem'

const Chat: NextPage = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)
  const [message, setMessage] = useState('')
  const [messageList, setMessageList] = useState<MessageList>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  const insertMessage = (message: string) => {
    const username = router.query.username as string
    const newMessage: Omit<MessageProps, 'id' | 'created_at'> = {
      message: message,
      username,
    }

    supabaseClient
      .from('messages')
      .insert(newMessage)
      .then()

    setMessage('')
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    insertMessage(message)
    messageRef.current?.focus()
  }

  const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value

    setMessage(value)
  }

  useEffect(() => {
    const supabaseSelect = supabaseClient
      .from('messages')
      .select('*')
      .then(({ data }) => {
        if(data && data?.length) {
          setMessageList(data)
          setLoading(false)
        }
      })

    const supabaseListener = supabaseClient
      .from('messages')
      .on('INSERT', (response) => {
        setMessageList(previous => {
          return [
            ...previous,
            response.new
          ]
        })
      })
      .subscribe()

    const cleanUp = () => {
      supabaseListener.unsubscribe()
    }

    return cleanUp
  }, [])

  return (
    <>
      <Head>
        <title>
          Chat | {SETTINGS.appName}
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

      <main
        className="min-h-screen flex flex-col bg-neutral-900"
      >
        <header
          className="sticky top-0 z-10 flex items-center p-2 justify-between flex-shrink-0 bg-neutral-800 border-b border-black"
        >
          <h1
            className="flex-shrink-0 uppercase font-bold"
          >
            Chat
          </h1>

          <Button
            type="button"
            variants="danger"
            onClick={() => {
              router.push('/')
            }}
          >
            Sair
          </Button>
        </header>

        <article
          className="flex-grow min-h-0 overflow-auto max-h-[calc(100vh-(58px+112px))] relative"
        >
          {loading && (
            <Loader
              className="absolute inset-0 m-auto"
              title="Carregando as mensagens, por favorm aguarde."
            />
          )}

          <MessageList
            messages={messageList}
          />
        </article>

        <form
          className="p-2 flex flex-shrink-0"
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <label
            htmlFor="fieldMessage"
            className="sr-only"
          >
            Escreva sua mensagem
          </label>

          <div className="flex-grow mr-2 flex-shrink min-w-0 relative">
            <Stickers
              className="absolute t-0 l-0"
              onStickerClick={(sticker) => {
                insertMessage(`:sticker: ${sticker}`)
              }}
            />

            <Textarea
              id="fieldMessage"
              placeholder="Escreva sua mensagem"
              className="pl-9"
              resize="none"
              value={message}
              onChange={handleMessageChange}
              ref={messageRef}
              full
              autoFocus
            />
          </div>

          <Button
            className="flex-shrink-0"
            variants="primary"
            title={SEND_MESSAGE_TEXT}
          >
            <span
              className="sr-only"
            >
              {SEND_MESSAGE_TEXT}
            </span>

            <MdSend
              className="block w-8 h-8"
            />
          </Button>
        </form>
      </main>
    </>
  )
}

export default Chat
