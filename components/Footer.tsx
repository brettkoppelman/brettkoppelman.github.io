const links = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/brettkoppelman24' },
  { label: 'Email', href: 'mailto:brettkoppelman01@gmail.com' },
]

export default function Footer() {
  return (
    <footer className="pt-8 border-t border-border">
      <div className="flex gap-6">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-sm font-sans text-subtle hover:text-accent transition-colors duration-200"
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  )
}
