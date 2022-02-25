import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import classNames from 'classnames'

import { BASE, FULL, VARIANTS, Variants } from './styles'

type Props<T extends ElementType> = {
  renderAs?: T
  children?: ReactNode
  className?: string
  full?: boolean
  variants?: Variants
}

export const Button = <T extends ElementType = 'button'>({
  renderAs,
  children,
  className,
  full,
  variants,
  ...props
}: Props<T> & Omit<ComponentPropsWithoutRef<T>, keyof Props<T>>) => {
  const Component = renderAs || 'button'

  return (
    <Component
      className={classNames([
        BASE,
        className,
        full && FULL,
        variants && VARIANTS[variants],
      ])}
      {...props}
    >
      {children}
    </Component>
  )
}
