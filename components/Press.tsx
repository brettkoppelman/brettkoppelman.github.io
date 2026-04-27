const pressLinks = [
  { label: 'TechCrunch', href: '#' },
  { label: 'The Verge', href: '#' },
  { label: 'Hacker News', href: '#' },
  { label: 'Product Hunt', href: '#' },
  { label: 'Forbes 30 Under 30', href: '#' },
  { label: 'Wired', href: '#' },
  { label: 'Fast Company', href: '#' },
  { label: 'MIT Technology Review', href: '#' },
]

export default function Press() {
  return (
    <section className="mb-20">
      <h2 className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-6">Press</h2>
      <p className="text-[15px] text-gray-500 leading-relaxed">
        {pressLinks.map((link, i) => (
          <span key={link.label}>
            <a
              href={link.href}
              className="hover:text-gray-900 transition-colors underline underline-offset-2 decoration-gray-300"
            >
              {link.label}
            </a>
            {i < pressLinks.length - 1 && <span className="mx-1 text-gray-300">·</span>}
          </span>
        ))}
      </p>
    </section>
  )
}
