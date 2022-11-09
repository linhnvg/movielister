import Error from 'next/error'
import '../styles/globals.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'

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