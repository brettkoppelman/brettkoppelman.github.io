import Link from 'next/link'
import { getAllThoughts } from '@/lib/thoughts'
import Nav from '@/components/Nav'

export default function ThoughtsPage() {
  const thoughts = getAllThoughts()

  return (
    <main className="min-h-screen px-6 py-16 max-w-2xl mx-auto">
      <Nav />

      <h1 className="font-display text-4xl font-normal tracking-tight text-ink mb-16">Thoughts</h1>

      {thoughts.length === 0 ? (
        <p className="text-[#44403C] font-sans">Nothing here yet.</p>
      ) : (
        <ul className="space-y-4">
          {thoughts.map((t) => (
            <li key={t.slug} className="flex gap-8 items-baseline">
              <span className="text-xs text-subtle font-sans w-24 shrink-0 pt-[2px]">
                {formatDate(t.date)}
              </span>
              <Link
                href={`/thoughts/${t.slug}`}
                className="text-[#44403C] font-sans hover:text-accent transition-colors duration-200"
              >
                {t.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}

function formatDate(iso: string) {
  if (!iso) return ''
  const d = new Date(iso)
  return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}
