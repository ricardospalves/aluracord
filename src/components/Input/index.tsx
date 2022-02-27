import { forwardRef, InputHTMLAttributes, TextareaHTMLAttributes } from 'react'
import classNames from 'classnames'

import { BASE, FULL, TEXTAREA, INPUT, Resize, RESIZE } from './styles'

interface BaseProps {
  className?: string
  full?: boolean
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement>, BaseProps {}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>,
  BaseProps {
    resize?: Resize
  }

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  className,
  full,
  ...props
}, ref) => {
  return (
    <input
      className={classNames([
        BASE,
        INPUT,
        className,
        full && FULL,
      ])}
      ref={ref}
      {...props}
    />
  )
})

Input.displayName = 'Input'

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({
  className,
  full,
  resize = 'both',
  ...props
}, ref) => {
  return (
    <textarea
      className={classNames([
        BASE,
        TEXTAREA,
        className,
        full && FULL,
        resize && RESIZE[resize]
      ])}
      ref={ref}
      {...props}
    />
  )
})

Textarea.displayName = 'Textarea'
