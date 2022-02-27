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
      {messages?.map((message, index) => (
        <Message
          key={message.id}
          id={message.id}
          avatarUrl={message.avatarUrl}
          name={message.name}
          createdAt={message.createdAt}
          message={message.message}
          borderBottom={true}
        />
      ))}
    </ul>
  )
}
