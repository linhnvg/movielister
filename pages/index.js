import { tmdb } from '@lib/service'
import { useRouter } from 'next/router'
import Card from '@components/card'
import Navbar from '@components/navbar'
import SegmentedControl from '@components/segmented-control'
import Head from 'next/head'
import Footer from '@components/footer'
import Search from '@components/search'
import Pagination from '@components/pagination'

export default function Home({ data, query }) {
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>Movielister &mdash; explore movies, tv shows and more</title>
        <meta
          name="description"
          content="Movielist, Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis pariatur optio quas!"
        />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      <Navbar />

      <div className="container pb-12 animate-fade-in">
        <div className="my-20 max-w-xl">
          <h1 className="heading-xl">Movielister</h1>
          <p className="text-gray-400 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            pariatur optio quas! ✌
          </p>

          <Search />
        </div>

        <SegmentedControl
          className="my-6"
          defaultIndex={query.tab === 'tv' ? 2 : query.tab === 'movie' ? 1 : 0}
          segments={[
            {
              label: 'All',
              value: 'all',
            },
            {
              label: 'Movies',
              value: 'movie',
            },
            {
              label: 'TV Shows',
              value: 'tv',
            },
          ]}
          callback={(val) =>
            router.replace({ pathname: '/', query: { tab: val } })
          }
        />

        <div className="card-list">
          {data.results.map((result) => (
            <Card
              key={result.id}
              id={result.id}
              image={result.poster_path}
              title={result.title || result.name}
              type={result.media_type}
              rating={result.vote_average}
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
  const response = await tmdb.get(`/trending/${query.tab || 'all'}/week`, {
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
