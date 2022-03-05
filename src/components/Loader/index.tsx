import { BiLoaderAlt } from 'react-icons/bi'
import classNames from 'classnames'

type Props = {
  title?: string
  className?: string
}

export const Loader = ({ title, className }: Props) => {
  return (
    <BiLoaderAlt
      title={title}
      className={classNames(
        [
          'block w-8 h-8 animate-spin',
          className,
        ]
      )}
    />
  )
}
