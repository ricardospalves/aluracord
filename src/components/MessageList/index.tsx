import classNames from 'classnames'

import { Message, MessageProps } from '../Message'

type Props = {
  messages?: Array<MessageProps>
  className?: string
}

export const MessageList = ({ messages, className }: Props) => {
  const messagesLength = messages?.length

  return (
    <ul
      className={classNames([
        className,
      ])}
    >
      {messages?.map((message) => (
        <Message
          key={message.id}
          id={message.id}
          username={message.username}
          created_at={message.created_at}
          message={message.message}
        />
      ))}
    </ul>
  )
}
