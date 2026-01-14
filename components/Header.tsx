import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 sm:px-10 lg:px-16 py-6">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/" className="flex items-center">
          <Image
            src="/subspace-logo.png"
            alt="Subspace"
            width={140}
            height={32}
            className="h-7 w-auto"
            priority
          />
        </Link>

        <div className="flex items-center gap-8 sm:gap-12">
          <Link href="/about" className="nav-link text-sm sm:text-base tracking-wide">
            About
          </Link>
          <Link href="/what-we-do" className="nav-link text-sm sm:text-base tracking-wide">
            What We Do
          </Link>
          <Link href="/contact" className="nav-link text-sm sm:text-base tracking-wide">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  )
}
