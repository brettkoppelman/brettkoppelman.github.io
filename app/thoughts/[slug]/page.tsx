import Link from 'next/link'
import { getAllThoughts, getThought } from '@/lib/thoughts'
import { notFound } from 'next/navigation'
import Nav from '@/components/Nav'

export const dynamicParams = false

export async function generateStaticParams() {
  const thoughts = getAllThoughts()
  return thoughts.map((t) => ({ slug: t.slug }))
}

export default function ThoughtPage({ params }: { params: { slug: string } }) {
  const thought = getThought(params.slug)
  if (!thought) notFound()

  return (
    <main className="min-h-screen px-6 py-16 max-w-2xl mx-auto">
      <Nav />

      <article>
        <p className="text-xs text-subtle font-sans mb-4">{formatDate(thought.date)}</p>
        <h1 className="font-display text-4xl font-normal tracking-tight text-ink mb-12">
          {thought.title}
        </h1>
        <div>
          {thought.body.split('\n\n').map((para, i) => (
            <p key={i} className="text-[#44403C] font-sans leading-[1.8] text-base mb-6">
              {para.trim()}
            </p>
          ))}
        </div>
      </article>
    </main>
  )
}

function formatDate(iso: string) {
  if (!iso) return ''
  const d = new Date(iso)
  return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}
