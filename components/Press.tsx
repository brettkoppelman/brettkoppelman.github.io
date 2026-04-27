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
    <section id="press" className="mb-28 pt-10 border-t border-border">
      <p className="text-[10px] font-sans font-medium uppercase tracking-[0.15em] text-subtle mb-7">
        Press
      </p>
      <p className="text-[15px] text-muted leading-relaxed font-sans font-light">
        {pressLinks.map((link, i) => (
          <span key={link.label}>
            <a
              href={link.href}
              className="hover:text-accent transition-colors duration-200 underline underline-offset-[3px] decoration-border hover:decoration-accent/40"
            >
              {link.label}
            </a>
            {i < pressLinks.length - 1 && (
              <span className="mx-2 text-border select-none">·</span>
            )}
          </span>
        ))}
      </p>
    </section>
  )
}
