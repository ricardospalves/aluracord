import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'
import classNames from 'classnames'

import { BASE, FULL, TEXTAREA, INPUT, Resize, RESIZE } from './styles'

interface BaseProps {
  className?: string
  full?: boolean
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement>, BaseProps {}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>, BaseProps {
  resize?: Resize
}

export const Input = ({ className, full, ...props }: InputProps) => {
  return (
    <input
      className={classNames([
        BASE,
        INPUT,
        className,
        full && FULL,
      ])}
      {...props}
    />
  )
}

export const Textarea = ({
  className,
  full,
  resize = 'both',
  ...props
}: TextareaProps) => {
  return (
    <textarea
      className={classNames([
        BASE,
        TEXTAREA,
        className,
        full && FULL,
        resize && RESIZE[resize]
      ])}
      {...props}
    />
  )
}
