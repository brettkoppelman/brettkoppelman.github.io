export default function Nav() {
  return (
    <nav className="flex gap-6 text-sm text-gray-400 mb-20">
      <a href="#me" className="hover:text-gray-900 transition-colors">me</a>
      <a href="#thoughts" className="hover:text-gray-900 transition-colors">thoughts</a>
      <a href="#books" className="hover:text-gray-900 transition-colors">books</a>
    </nav>
  )
}
