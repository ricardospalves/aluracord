export const BASE = [
  'inline-flex',
  'p-2',
  'rounded',
  'items-center',
  'justify-center',
  'border',
  'border-transparent',
  'focus:outline-none',
  'ring-sky-500/75',
  'focus-visible:ring',
  'no-underline',
  'transition-colors',
]

export const FULL = [
  'flex',
  'w-full',
]

export const VARIANTS = {
  primary: [
    'bg-green-700',
    'focus-visible:bg-green-900',
    'hover:bg-green-900',
  ],
}

export type Variants = keyof typeof VARIANTS
