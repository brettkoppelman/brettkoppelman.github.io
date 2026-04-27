import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="flex gap-7 text-sm text-subtle mb-24 font-sans">
      <Link href="/" className="hover:text-accent transition-colors duration-200">Brett</Link>
      <Link href="/thoughts" className="hover:text-accent transition-colors duration-200">Blah</Link>
    </nav>
  )
}
