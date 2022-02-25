export const BASE = [
  'bg-transparent',
  'border',
  'rounded',
  'ring-sky-500/75',
  'focus-visible:outline-none',
  'focus:ring',
  'hover:bg-black',
  'focus:bg-black',
  'transition-colors',
]

export const INPUT = [
  'px-2',
  'h-12',
]

export const TEXTAREA = [
  'p-2',
  'h-24',
]

export const FULL = [
  'block',
  'w-full',
]

export const RESIZE = {
  none: 'resize-none',
  vertical: 'resize-y',
  horizontal: 'resize-x',
  both: 'resize',
}

export type Resize = keyof typeof RESIZE
