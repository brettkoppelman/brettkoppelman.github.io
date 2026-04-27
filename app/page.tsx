import Nav from '@/components/Nav'
import Header from '@/components/Header'
import Thoughts from '@/components/Thoughts'
import Press from '@/components/Press'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-16 max-w-2xl mx-auto">
      <Nav />
      <Header />
      <Thoughts />
      <Press />
      <Footer />
    </main>
  )
}
