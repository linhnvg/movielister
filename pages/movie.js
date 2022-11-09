import { tmdb } from '@lib/service'
import Link from 'next/link'

export default function Home({ data }) {
  return (
    <div className="animate-fade-in">
      <nav>
        <Link href="/movie" replace>
          Popular
        </Link>
        <Link href="?tab=now_playing" replace>
          Now Playing
        </Link>
        <Link href="?tab=upcoming" replace>
          Upcoming
        </Link>
        <Link href="?tab=top_rated" replace>
          Top Rated
        </Link>
      </nav>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export async function getServerSideProps({ query }) {
  const response = await tmdb.get(`/movie/${query.tab || 'popular'}`)

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
    },
  }
}
