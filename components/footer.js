import Logo from './logo'
import TMDB from './icons/tmdb.svg'

export default function Footer() {
  return (
    <footer className="bg-grey-900 bg-opacity-80 backdrop-blur-md py-12 md:py-24">
      <div className="container">
        <Logo className="text-4xl mx-auto" />
        <p className="text-center max-w-lg mx-auto mt-8 text-grey-400">
          &copy; 2022 Movielist cretated by{' '}
          <a href="https://oktaycolakoglu.com" target="_blank" rel="noreferrer">
            Oktay Colakoglu
          </a>{' '}
          with{' '}
          <a href="https://nextjs.org" target="_blank" rel="noreferrer">
            Next.js
          </a>{' '}
          powered by{' '}
          <a
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noreferrer"
          >
            TMDB
          </a>{' '}
          <a
            href="https://www.figma.com/community/file/1054327700155381422"
            target="_blank"
            rel="noreferrer"
          >
            design
          </a>{' '}
          by{' '}
          <a
            href="https://pramodpoudel.com.np/"
            target="_blank"
            rel="noreferrer"
          >
            Pramod Poudel.
          </a>{' '}
          source code shared on <a href="#">Github</a>.
        </p>

        <a href="https://www.themoviedb.org/" target="_blank" rel="noreferrer">
          <TMDB className="mx-auto mt-8 w-14" />
        </a>
      </div>
    </footer>
  )
}
