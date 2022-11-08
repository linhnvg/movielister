import { tmdb } from '@lib/service'

export default function Home({ data }) {
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
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
      data: response.data,
    },
  }
}
