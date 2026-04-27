import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const THOUGHTS_DIR = path.join(process.cwd(), 'content/thoughts')

export interface Thought {
  slug: string
  title: string
  date: string
  body: string
}

export function getAllThoughts(): Thought[] {
  if (!fs.existsSync(THOUGHTS_DIR)) return []

  return fs
    .readdirSync(THOUGHTS_DIR)
    .filter((f) => f.endsWith('.md') && !f.startsWith('_'))
    .map((filename) => {
      const slug = filename.replace(/\.md$/, '')
      const raw = fs.readFileSync(path.join(THOUGHTS_DIR, filename), 'utf-8')
      const { data, content } = matter(raw)
      return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? '',
        body: content.trim(),
      }
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getThought(slug: string): Thought | null {
  const filepath = path.join(THOUGHTS_DIR, `${slug}.md`)
  if (!fs.existsSync(filepath)) return null
  const raw = fs.readFileSync(filepath, 'utf-8')
  const { data, content } = matter(raw)
  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? '',
    body: content.trim(),
  }
}
