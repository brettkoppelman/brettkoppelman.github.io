const links = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/yourhandle' },
  { label: 'GitHub', href: 'https://github.com/yourhandle' },
  { label: 'X', href: 'https://x.com/yourhandle' },
  { label: 'Email', href: 'mailto:you@example.com' },
]

export default function Footer() {
  return (
    <footer className="pt-8 border-t border-gray-100">
      <div className="flex gap-5">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-sm text-gray-400 hover:text-gray-900 transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  )
}
