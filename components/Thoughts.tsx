const posts = [
  { date: 'Apr 2025', title: 'On building things people actually use' },
  { date: 'Jan 2025', title: 'What I wish I knew about early-stage startups' },
  { date: 'Oct 2024', title: 'The quiet work of making software feel obvious' },
]

export default function Thoughts() {
  return (
    <section id="thoughts" className="mb-20">
      <h2 className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-6">Thoughts</h2>
      <ul className="space-y-3">
        {posts.map((post) => (
          <li key={post.title} className="flex gap-6 items-baseline">
            <span className="text-xs text-gray-400 w-16 shrink-0">{post.date}</span>
            <a href="#" className="text-[15px] text-gray-700 hover:text-gray-900 transition-colors">
              {post.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
