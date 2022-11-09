import { tmdb } from '@lib/service'

export default function Home({ data }) {
  return (
    <div className="animate-fade-in">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export async function getServerSideProps({ query }) {
  const searchQuery = query.query

  if (!searchQuery) {
    return {
      props: {
        data: {},
      },
    }
  }

  const response = await tmdb.get(`/search/${query.type || 'movie'}`, {
    params: {
      ...query,
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
    },
  }
}
