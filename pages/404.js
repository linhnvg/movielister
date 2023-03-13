import Head from 'next/head'
import Link from 'next/link'
import Navbar from '@components/navbar'
import Footer from '@components/footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>404 Not Found &mdash; Movielister</title>
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
        <div className="my-20 flex flex-col items-center justify-center text-center">
          <img src="/404.svg" alt="404" />
          <h1 className="text-5xl font-bold mt-10">Lost your way?</h1>
          <p className="mt-4 text-white-50">
            Oops! This is awkward. You are looking for something that
            doesn&apos;t actually exist.
          </p>
          <Link href="/" className="button button-primary mt-6">
            Go home
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  )
}
