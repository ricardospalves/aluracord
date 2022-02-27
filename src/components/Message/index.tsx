import Image from 'next/image'
import classNames from 'classnames'

export type MessageProps = {
  id: string
  avatarUrl: string
  name: string
  createdAt: string
  message: string
  className?: string
  borderBottom?: boolean
}

export const Message = ({
  id,
  avatarUrl,
  name,
  createdAt,
  message,
  className,
  borderBottom,
}: MessageProps) => {
  return (
    <li
      id={id}
      className={classNames([
        className,
        'flex items-start px-4 py-2',
        borderBottom && 'border-b border-black/50'
      ])}
    >
      <span
        className="block flex-shrink-0"
      >
        <Image
          src={avatarUrl}
          width={48}
          height={48}
          alt={`Avatar de ${name}`}
          className="block"
        />
      </span>

      <span
        className="flex flex-wrap flex-grow pl-4 items-center"
      >
        <span
          className="block break-words font-bold pr-4"
        >
          {name}
        </span>

        <span
          className="text-sm text-gray-400"
        >
          {createdAt}
        </span>

        <span
          className="flex-grow flex-shrink-0 w-full"
        >
          {message}
        </span>
      </span>
    </li>
  )
}
