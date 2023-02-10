import { useScrollFade } from '@lib/hooks'
import { useState } from 'react'
import clsx from 'clsx'
import Gallery from './gallery'

export default function Profiles({ profiles }) {
  const { ref, scrollClass, onScroll } = useScrollFade()
  const [isOpen, setIsOpen] = useState(false)
  const [index, setIndex] = useState(0)

  return (
    <>
      <div
        className={clsx(
          'flex overflow-x-auto gap-6 scroll-section',
          scrollClass
        )}
        ref={ref}
        onScroll={onScroll}
      >
        {profiles.map((image) => (
          <div key={image.file_path} className="aspect-poster h-96">
            <img
              className="flex-shrink-0 rounded-xl h-full cursor-zoom-in"
              src={`https://image.tmdb.org/t/p/h632${image.file_path}`}
              onClick={() => {
                setIndex(index)
                setIsOpen(true)
              }}
              alt=""
            />
          </div>
        ))}
      </div>
      <Gallery
        isOpen={isOpen}
        options={{
          index,
        }}
        setIsOpen={setIsOpen}
        images={profiles.map((image) => ({
          src: `https://image.tmdb.org/t/p/original${image.file_path}`,
          w: image.width,
          h: image.height,
        }))}
      />
    </>
  )
}
