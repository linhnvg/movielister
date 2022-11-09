import Link from 'next/link'
import Poster from './poster'
import clsx from 'clsx'

export default function Card({
  id,
  image,
  title,
  type,
  className,
  children,
  ...props
}) {
  return (
    <Link
      href={`/${type}/${id}`}
      className={clsx('card', className)}
      {...props}
    >
      <Poster path={image} alt={title} />
      <div className="card-title">{title}</div>
      <div>{children}</div>
    </Link>
  )
}
