import { tmdb } from '@lib/service'
import { format, formatDuration, intervalToDuration } from 'date-fns'
import { getPlaiceholder } from 'plaiceholder'
import Navbar from '@components/navbar'
import Rating from '@components/rating'
import Head from 'next/head'
import Image from 'next/image'
import Part from '@components/part'
import Credits from '@components/credits'
import Breadcrumb from '@components/breadcrumb'
import Cast from '@components/cast'
import Media from '@components/media'
import Footer from '@components/footer'

export default function Home({ data, type, backdropData, posterData }) {
  return (
    <div>
      <Head>
        <title>{`${data.title || data.name} — Movielister`}</title>
        <meta
          name="description"
          content="Movielister, Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis pariatur optio quas!"
        />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      <Navbar />

      <div className="container pb-12 mt-10">
        <div className="w-full relative">
          <Image
            src={backdropData.img.src}
            alt={data.title || data.name}
            blurDataURL={backdropData.base64}
            className="h-96 md:h-[480px] w-full object-cover object-center rounded-[40px]"
            placeholder="blur"
            loading="eager"
            width={1600}
            height={900}
          />
        </div>
        <div className="p-8 md:p-10 rounded-[40px] bg-grey-900 bg-opacity-80 backdrop-blur-md max-w-xl relative -top-16 lg:ml-20 -mb-16">
          <Breadcrumb
            pages={[
              {
                href: '/',
                label: 'Home',
              },
              {
                href: type === 'movie' ? '/movie' : type === 'tv' ? '/tv' : '#',
                label:
                  type === 'movie'
                    ? 'Movies'
                    : type === 'tv'
                    ? 'TV Shows'
                    : 'Collection',
              },
              {
                href: '#',
                label: data.title || data.name,
              },
            ]}
          />
          <h1 className="heading-lg">{data.title || data.name}</h1>
        </div>

        {(type === 'movie' || type === 'tv') && (
          <div className="mt-8 md:m-12 md:mt-8 xl:m-20 xl:mt-8">
            {data.credits?.cast.length > 0 && <Cast cast={data.credits.cast} />}

            <div className="flex flex-col-reverse my-5 gap-12 md:gap-20 lg:flex-row">
              <div className="lg:w-1/2">
                <div className="aspect-poster">
                  <Image
                    src={posterData.img.src}
                    alt={data.title || data.name}
                    className="rounded-[40px] object-cover w-full"
                    placeholder="blur"
                    blurDataURL={posterData.base64}
                    width={480}
                    height={710}
                  />
                </div>
              </div>
              <div className="lg:w-1/2 space-y-6">
                <h2 className="heading">{data.tagline || 'Overview'}</h2>
                <p className="text-white-65">{data.overview}</p>
                <Rating average={data.vote_average} />

                {type === 'movie' && (
                  <div className="space-y-6">
                    {data.credits?.crew && <Credits crew={data.credits.crew} />}

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
                          {format(
                            new Date(data.first_air_date),
                            'd MMMM, yyyy'
                          )}
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
                  </div>
                )}
              </div>
            </div>

            {(data.videos || data.images) && (
              <Media
                videos={data.videos?.results}
                posters={data.images?.posters}
                backdrops={data.images?.backdrops}
              />
            )}
          </div>
        )}

        {type === 'collection' && (
          <div className="mt-8 md:mx-12 xl:mx-20 space-y-6">
            {data.overview && (
              <div>
                <h2 className="heading">Overview</h2>
                <p className="text-white-65 mt-2">{data.overview}</p>
              </div>
            )}

            <div>
              <h3 className="heading mb-4">Parts</h3>

              <div className="space-y-6">
                {data.parts.map((part) => (
                  <Part
                    key={part.id}
                    id={part.id}
                    title={part.title}
                    poster={part.poster_path}
                    overview={part.overview}
                    rating={part.vote_average}
                    date={part.release_date}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}

export async function getServerSideProps({ params }) {
  const response = await tmdb.get(`/${params.type}/${params.id}`, {
    params: {
      append_to_response: 'credits,videos,images',
    },
  })

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

  const backdropPath = response.data.backdrop_path
    ? `https://image.tmdb.org/t/p/original${response.data.backdrop_path}`
    : '/placeholder.svg'
  const backdropData = await getPlaiceholder(backdropPath, {
    size: 10,
  })

  const posterPath = response.data.poster_path
    ? `https://image.tmdb.org/t/p/w780${response.data.poster_path}`
    : '/placeholder.svg'
  const posterData = await getPlaiceholder(posterPath)

  return {
    props: {
      type: params.type,
      data: response.data,
      backdropData,
      posterData,
    },
  }
}
