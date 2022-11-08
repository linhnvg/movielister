import Error from 'next/error'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  if (pageProps.error)
    return (
      <Error
        statusCode={pageProps.error.status}
        title={pageProps.error.statusMessage}
      />
    )

  return <Component {...pageProps} />
}

export default MyApp
