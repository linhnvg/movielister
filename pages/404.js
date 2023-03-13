import Navbar from '@components/navbar'
import Head from 'next/head'
import Footer from '@components/footer'
import Search from '@components/search'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Movielister &mdash; explore movies, tv shows and more</title>
        <meta
          name="description"
          content="Millions of movies, TV shows and people to discover. Explore now."
        />
        <meta
          name="keywords"
          content="where can i watch, movie, movies, tv, tv shows, cinema, movielister, movie list, list"
        />
        <meta property="og:url" content="https://movielister.site" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Movielister - explore movies, tv shows and more"
        />
        <meta
          property="og:description"
          content="Millions of movies, TV shows and people to discover. Explore now."
        />
        <meta
          property="og:image"
          content="https://movielister.site/cover.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="movielister.site" />
        <meta property="twitter:url" content="https://movielister.site" />
        <meta
          name="twitter:title"
          content="Movielister - explore movies, tv shows and more"
        />
        <meta
          name="twitter:description"
          content="Millions of movies, TV shows and people to discover. Explore now."
        />
        <meta
          name="twitter:image"
          content="https://movielister.site/cover.png"
        />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      <Navbar />

      <div className="container pb-12 animate-fade-in">
        <div className="my-20 max-w-xl">
          <h1 className="heading-xl">Movielister</h1>
          <p className="text-gray-400 mt-4">
            Millions of movies, TV shows and people to discover. Explore now.
          </p>

          <Search />
        </div>

        <div className="py-8 md:py-32 flex flex-col justify-center items-center text-center">
          <h2 className="text-7xl font-bold">404</h2>
          <p className="max-w-sm">
            The page you are looking for does not exist. Please check the URL
            and try again.
          </p>
          <Link href="/" className="button button-primary mt-4">
            Go back home
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  )
}
