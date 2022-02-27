import { ChangeEvent, FormEvent, useRef, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { MdSend } from 'react-icons/md'
import { format } from 'date-fns'

import SETTINGS from '../../../settings.json'

import { Button } from '../../components/Button'
import { Textarea } from '../../components/Input'
import { MessageProps } from '../../components/Message'
import { MessageList } from '../../components/MessageList'

type MessageList = Array<MessageProps>

const SEND_MESSAGE_TEXT = 'Enviar a mensagem'

const Chat: NextPage = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)
  const [message, setMessage] = useState('')
  const [messageList, setMessageList] = useState<MessageList>([
    {
      id: '1',
      avatarUrl: 'https://github.com/ricardospalves.png',
      name: 'Ricardo Alves',
      createdAt: format(new Date(2021), `dd/MM/yyyy 'às' hh:mm`),
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac ante vitae turpis semper convallis.',
    },
    {
      id: '2',
      avatarUrl: 'https://github.com/omariosouto.png',
      name: 'Mario Souto',
      createdAt: format(new Date(2022), `dd/MM/yyyy 'às' hh:mm`),
      message: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
    },
  ])

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    setMessage('')
    messageRef.current?.focus()
  }

  const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value

    setMessage(value)
  }

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
          >Chat</h1>

          <Button
            variants="danger"
          >
            Sair
          </Button>
        </header>

        <article
          className="flex-grow min-h-0 overflow-auto max-h-[calc(100vh-(58px+112px))]"
        >
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

          <Textarea
            id="fieldMessage"
            className="flex-grow mr-2 flex-shrink min-w-0"
            placeholder="Escreva sua mensagem"
            resize="none"
            value={message}
            onChange={handleMessageChange}
            ref={messageRef}
            autoFocus
          />

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
