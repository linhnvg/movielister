import { useScrollFade } from '@lib/hooks'
import clsx from 'clsx'
import Rating from './rating'

export default function Recommendations({ recommendations }) {
  const { ref, scrollClass, onScroll } = useScrollFade()

  return (
    <div>
      <strong className="heading block mb-2">Recommendations</strong>
      <div
        className={clsx(
          'flex gap-6 overflow-x-auto scroll-section',
          scrollClass
        )}
        ref={ref}
        onScroll={onScroll}
      >
        {recommendations.map((result) => (
          <a
            href={`/${result.title ? 'movie' : 'tv'}/${result.id}`}
            key={result.id}
          >
            <div className="aspect-backdrop h-44">
              <img
                src={
                  result.backdrop_path
                    ? `https://image.tmdb.org/t/p/w300${result.backdrop_path}`
                    : '/placeholder.svg'
                }
                className="w-full h-full object-cover rounded-xl"
                alt={result.title || result.name}
              />
            </div>
            <div className="flex mt-2 items-center">
              <Rating average={result.vote_average} />
              <span className="text-sm ml-2">
                {result.title || result.name}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}