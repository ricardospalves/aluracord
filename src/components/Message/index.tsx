import Image from 'next/image'

export type MessageProps = {
  id: string
  username: string
  created_at: string
  message: string
}

export const Message = ({
  id,
  username,
  created_at,
  message,
}: MessageProps) => {
  return (
    <li
      id={id}
      className='flex items-start px-4 py-2 border-b border-black/50'
    >
      <span
        className="block flex-shrink-0"
      >
        <Image
          src={`https://github.com/${username}.png`}
          width={48}
          height={48}
          alt={`Avatar de ${username}`}
          className="block"
        />
      </span>

      <span
        className="flex flex-wrap flex-grow pl-4 items-center"
      >
        <span
          className="block break-words font-bold pr-4"
        >
          {username}
        </span>

        <span
          className="text-sm text-gray-400"
        >
          {created_at}
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
