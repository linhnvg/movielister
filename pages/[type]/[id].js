import { tmdb } from '@lib/service'
import { format, formatDuration, intervalToDuration } from 'date-fns'
import Navbar from '@components/navbar'
import Poster from '@components/poster'
import Rating from '@components/rating'
import Head from 'next/head'
import Image from 'next/image'

export default function Home({ data, type }) {
  return (
    <div>
      <Head>
        <title>{`${data.title || data.name} — Movielister`}</title>
        <meta
          name="description"
          content="Movielist, Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis pariatur optio quas!"
        />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      <Navbar />

      <div className="container pb-12 animate-fade-in mt-10">
        <div className="h-96 md:h-[480px] w-full relative">
          <Image
            src={
              data.backdrop_path
                ? `https://image.tmdb.org/t/p/w1280${data.backdrop_path}`
                : '/placeholder.svg'
            }
            alt={data.title || data.name}
            className="object-cover object-center rounded-[40px]"
            fill
          />
        </div>
        <div className="p-8 md:p-10 rounded-[40px] bg-grey-900 bg-opacity-80 backdrop-blur-md max-w-xl relative -top-16 lg:ml-20 -mb-16">
          <h1 className="heading-lg">{data.title || data.name}</h1>
        </div>

        {(type === 'movie' || type === 'tv') && (
          <div className="flex flex-col-reverse my-5 gap-12 md:m-12 xl:m-20 lg:flex-row md:gap-20">
            <div className="lg:w-1/2">
              <Poster
                path={data.poster_path}
                alt={data.title || data.name}
                size="w780"
              />
            </div>
            <div className="lg:w-1/2 space-y-6">
              <h2 className="heading">{data.tagline || 'Overview'}</h2>
              <p className="text-white-65">{data.overview}</p>
              <Rating average={data.vote_average} />

              {type === 'movie' && (
                <div className="space-y-6">
                  <p>
                    <span className="text-sm text-white-30">Type</span>
                    <span className="block mt-2">Movie</span>
                  </p>
                  {data.release_date && (
                    <p>
                      <span className="text-sm text-white-30">
                        Release Date
                      </span>
                      <span className="block mt-2">
                        {format(new Date(data.release_date), 'd MMMM, yyyy')}
                      </span>
                    </p>
                  )}
                  {data.runtime && (
                    <p>
                      <span className="text-sm text-white-30">Runtime</span>
                      <span className="block mt-2">
                        {formatDuration(
                          intervalToDuration({
                            start: 0,
                            end: data.runtime * 60000,
                          }),
                          {
                            format: ['hours', 'minutes'],
                          }
                        )}
                      </span>
                    </p>
                  )}

                  <p>
                    <span className="text-sm text-white-30">Genres</span>
                    <span className="block mt-2">
                      {data.genres.map((genre) => genre.name).join(', ')}
                    </span>
                  </p>
                </div>
              )}

              {type === 'tv' && (
                <div className="grid grid-cols-2 gap-6">
                  <p>
                    <span className="text-sm text-white-30">Type</span>
                    <span className="block mt-2">TV Show</span>
                  </p>
                  {data.status && (
                    <p>
                      <span className="text-sm text-white-30">Status</span>
                      <span className="block mt-2">{data.status}</span>
                    </p>
                  )}
                  {data.first_air_date && (
                    <p>
                      <span className="text-sm text-white-30">
                        First air date
                      </span>
                      <span className="block mt-2">
                        {format(new Date(data.first_air_date), 'd MMMM, yyyy')}
                      </span>
                    </p>
                  )}
                  {data.last_air_date && (
                    <p>
                      <span className="text-sm text-white-30">
                        Last air date
                      </span>
                      <span className="block mt-2">
                        {format(new Date(data.last_air_date), 'd MMMM, yyyy')}
                      </span>
                    </p>
                  )}
                  {data.number_of_seasons && (
                    <p>
                      <span className="text-sm text-white-30">Seasons</span>
                      <span className="block mt-2">
                        {data.number_of_seasons}
                      </span>
                    </p>
                  )}
                  {data.number_of_episodes && (
                    <p>
                      <span className="text-sm text-white-30">Episodes</span>
                      <span className="block mt-2">
                        {data.number_of_episodes}
                      </span>
                    </p>
                  )}

                  {data.episode_run_time.length > 0 && (
                    <p>
                      <span className="text-sm text-white-30">
                        Episode runtime
                      </span>
                      <span className="block mt-2">
                        {data.episode_run_time
                          .map((runtime) =>
                            formatDuration(
                              intervalToDuration({
                                start: 0,
                                end: runtime * 60000,
                              }),
                              {
                                format: ['hours', 'minutes'],
                              }
                            )
                          )
                          .join(' - ')}
                      </span>
                    </p>
                  )}

                  <p>
                    <span className="text-sm text-white-30">Genres</span>
                    <span className="block mt-2">
                      {data.genres.map((genre) => genre.name).join(', ')}
                    </span>
                  </p>

                  {data.created_by.length > 0 && (
                    <p className="col-span-2">
                      <span className="text-sm text-white-30">Creators</span>
                      <span className="block mt-2">
                        {data.created_by
                          .map((person) => person.name)
                          .join(', ')}
                      </span>
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export async function getServerSideProps({ params }) {
  const response = await tmdb.get(`/${params.type}/${params.id}`)

  if (response.status === 404) {
    return {
      notFound: true,
    }
  }

  if (response.data.success === false) {
    return {
      props: {
        error: {
          statusCode: response.status,
          statusMessage: response.data.status_message,
        },
      },
    }
  }

  return {
    props: {
      type: params.type,
      data: response.data,
    },
  }
}
