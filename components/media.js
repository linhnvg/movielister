import { useState } from 'react'
import { useScrollFade } from '@lib/hooks'
import clsx from 'clsx'
import Image from 'next/image'
import SegmentedControl from './segmented-control'
import Video from './video'
import Poster from './poster'
import MarkIcon from './icons/mark.svg'

export default function Media({ videos, posters, backdrops }) {
  const [tab, setTab] = useState('videos')

  return (
    <div>
      <strong className="heading block mb-2">Media</strong>
      <SegmentedControl
        callback={(val) => setTab(val)}
        segments={[
          {
            value: 'videos',
            label: <Label label="Videos" count={videos.length} />,
          },
          {
            value: 'posters',
            label: <Label label="Posters" count={posters.length} />,
          },
          {
            value: 'backdrops',
            label: <Label label="Backdrops" count={backdrops.length} />,
          },
        ]}
      />
      <div>
        {tab === 'videos' && (
          <div>
            {videos.length > 0 ? <Videos videos={videos} /> : <NoResult />}
          </div>
        )}
        {tab === 'posters' && (
          <div>
            {posters.length > 0 ? <Posters posters={posters} /> : <NoResult />}
          </div>
        )}
        {tab === 'backdrops' && (
          <div>
            {backdrops.length > 0 ? (
              <Backdrops backdrops={backdrops} />
            ) : (
              <NoResult />
            )}
          </div>
        )}
      </div>
    </div>
  )
}

function Label({ label, count }) {
  return (
    <span>
      <span className="mr-2">{label}</span>
      <small className="font-normal text-xs px-2 rounded-lg bg-white-10">
        {count}
      </small>
    </span>
  )
}

function NoResult() {
  return (
    <div className="h-96 my-4 grid place-items-center bg-black-10 rounded-xl">
      <div className="flex flex-col items-center">
        <MarkIcon className="text-3xl mb-4" />
        <span>No media provided</span>
      </div>
    </div>
  )
}

function Videos({ videos }) {
  const { ref, scrollClass, onScroll } = useScrollFade()

  return (
    <div
      ref={ref}
      onScroll={onScroll}
      className={clsx(
        'relative scroll-section py-4 overflow-x-auto flex flex-nowrap w-full gap-8',
        scrollClass
      )}
    >
      {videos
        .sort((a) => a.type === 'Trailer' && -1)
        .map((video) => (
          <Video
            key={video.id}
            id={video.key}
            name={video.name}
            className="aspect-[4/3] h-96 relative"
          />
        ))}
    </div>
  )
}

function Backdrops({ backdrops }) {
  const { ref, scrollClass, onScroll } = useScrollFade()

  return (
    <div
      ref={ref}
      onScroll={onScroll}
      className={clsx(
        'relative scroll-section py-4 overflow-x-auto flex flex-nowrap w-full gap-8',
        scrollClass
      )}
    >
      {backdrops.map((backdrop) => (
        <div key={backdrop.id} className="aspect-video h-96">
          <Image
            className="w-full h-full rounded-xl"
            src={`https://image.tmdb.org/t/p/w780${backdrop.file_path}`}
            width={780}
            height={240}
            alt="backdrop"
          />
        </div>
      ))}
    </div>
  )
}

function Posters({ posters }) {
  const { ref, scrollClass, onScroll } = useScrollFade()

  return (
    <div
      ref={ref}
      onScroll={onScroll}
      className={clsx(
        'relative scroll-section py-4 overflow-x-auto flex flex-nowrap w-full gap-8',
        scrollClass
      )}
    >
      {posters.map((poster) => (
        <div key={poster.id}>
          <Poster className="h-96" path={poster.file_path} alt="poster" />
        </div>
      ))}
    </div>
  )
}
