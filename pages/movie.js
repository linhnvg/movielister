import { tmdb } from '@lib/service'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Card from '@components/card'
import Footer from '@components/footer'
import Navbar from '@components/navbar'
import Search from '@components/search'
import SegmentedControl from '@components/segmented-control'
import Pagination from '@components/pagination'
import Breadcrumb from '@components/breadcrumb'

export default function Movie({ data, query }) {
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>Movies &mdash; Movielister</title>
        <meta
          name="description"
          content="Movielist, Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis pariatur optio quas!"
        />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      <Navbar />

      <div className="container pb-12 animate-fade-in">
        <div className="my-20 max-w-xl">
          <Breadcrumb
            pages={[
              {
                href: '/',
                label: 'Home',
              },
              {
                href: '/movie',
                label: 'Movies',
              },
            ]}
          />
          <h1 className="heading-xl mt-4">Movies</h1>

          <Search />
        </div>

        <SegmentedControl
          className="my-6"
          defaultIndex={
            query?.tab === 'top_rated'
              ? 3
              : query?.tab === 'upcoming'
              ? 2
              : query?.tab === 'now_playing'
              ? 1
              : 0
          }
          segments={[
            {
              label: 'Popular',
              value: 'popular',
            },
            {
              label: 'Now Playing',
              value: 'now_playing',
            },
            {
              label: 'Upcoming',
              value: 'upcoming',
            },
            {
              label: 'Top Rated',
              value: 'top_rated',
            },
          ]}
          callback={(val) =>
            router.replace({ pathname: '/movie', query: { tab: val } })
          }
        />

        <div className="card-list">
          {data.results.map((result) => (
            <Card
              key={result.id}
              id={result.id}
              image={result.poster_path}
              title={result.title}
              rating={result.vote_average}
              type="movie"
            />
          ))}
        </div>

        <Pagination
          currentPage={query.page}
          totalPages={data.total_pages}
          className="mt-8"
        />
      </div>

      <Footer />
    </div>
  )
}

export async function getServerSideProps({ query }) {
  const response = await tmdb.get(`/movie/${query.tab || 'popular'}`, {
    params: {
      page: query.page || 1,
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

  return {
    props: {
      data: response.data,
      query,
    },
  }
}
