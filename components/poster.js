import clsx from 'clsx'
import Image from 'next/image'

export default function Poster({ path, alt, size, className, ...props }) {
  const src = `https://image.tmdb.org/t/p/${size || 'w500'}${path}`

  return (
    <div className={clsx('aspect-poster relative', className)} {...props}>
      <Image src={src} alt={alt} className="rounded-xl" fill />
    </div>
  )
}
