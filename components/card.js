import Link from 'next/link'
import Poster from './poster'
import clsx from 'clsx'
import Rating from './rating'

export default function Card({
  id,
  image,
  title,
  type,
  rating,
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
      {image && <Poster path={image} alt={title} />}
      {rating && <Rating average={rating} className="absolute top-4 left-4" />}
      {title && <div className="card-title">{title}</div>}
      {children}
    </Link>
  )
}
