import { MouseEvent, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import classNames from 'classnames'
import { BiSticker } from 'react-icons/bi'

import SETTINGS from '../../../settings.json'

type Props = {
  className?: string
  onStickerClick?: (sticker: string) => void
}

const PANEL_ID = 'stickersPanel'

export const Stickers = ({ className, onStickerClick }: Props) => {
  const [open, setOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)

  const handleButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()

    setOpen(previous => !previous)
  }

  const handleCloseEsc = (event: KeyboardEvent) => {
    const key = event.key

    if(key === 'Escape') {
      setOpen(false)
    }
  }

  useEffect(() => {
    const cleanUp = () => {
      document.removeEventListener('keydown', handleCloseEsc, false)
    }

    document.addEventListener('keydown', handleCloseEsc, false)

    return cleanUp
  }, [])

  useEffect(() => {
    if(open) {
      panelRef?.current?.focus()
    }
  }, [open])

  return (
    <div
      className={classNames([
        'w-8 h-8',
        className,
      ])}
    >
      <button
        type="button"
        className="block w-full h-full text-white/75 rounded transition-colors hover:text-white focus-visible:text-white focus-visible:ring focus:outline-none ring-sky-500/75"
        aria-controls={PANEL_ID}
        aria-label={open ? 'Fechar' : 'Abrir'}
        onClick={handleButtonClick}
      >
        <BiSticker
          className="block w-6 h-6 mx-auto"
          aria-hidden={true}
        />
      </button>

      <div
        id={PANEL_ID}
        ref={panelRef}
        className={classNames([
          'w-64 overflow-scroll lg:w-96 max-h-[calc(100vh-112px)] absolute left-0 bottom-full mb-2 z-10 bg-black shadow shadow-white/25 p-2',
          {
            'hidden': !open
          }
        ])}
        tabIndex={-1}
      >
        <h2 className="uppercase text-center font-bold mb-4">
          Stickers
        </h2>

        <ul className="grid grid-cols-2 gap-1">
          {SETTINGS.stickers.map((sticker) => {
            return (
              <li key={sticker}>
                <button
                  type="button"
                  className="block w-full p-2 rounded hover:bg-neutral-900 focus-visible:bg-neutral-900 focus:outline-none ring-sky-500/75 focus-visible:ring transition-colors"
                  onClick={() => {
                    onStickerClick && onStickerClick(sticker)
                    setOpen(false)
                  }}
                >
                  <Image
                    src={sticker}
                    width="100%"
                    height="100%"
                    className="block object-cover"
                    alt="Figurinha"
                    loading="lazy"
                  />
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
