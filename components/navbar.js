import Link from 'next/link'
import Logo from './logo'

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container flex">
        <Link href="/" className="text-5xl">
          <Logo />
          <span className="sr-only">Movielister</span>
        </Link>

        <nav className="ml-auto">
          <Link href="/movie" className="nav-link">
            Movies
          </Link>
          <Link href="/tv" className="nav-link">
            TV Shows
          </Link>
        </nav>
      </div>
    </header>
  )
}
