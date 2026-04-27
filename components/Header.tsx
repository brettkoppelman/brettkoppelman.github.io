export default function Header() {
  return (
    <section id="me" className="mb-20">
      <h1 className="text-3xl font-medium tracking-tight text-gray-900 mb-1">Your Name</h1>
      <p className="text-sm text-gray-400 mb-10">@yourhandle</p>

      <div className="space-y-4 text-gray-600 leading-relaxed text-[15px] max-w-xl">
        <p>
          I'm a builder interested in the intersection of software, systems, and people. Currently
          working on something new — focused on making complex things feel simple.
        </p>
        <p>
          Previously I spent several years at a handful of early-stage startups, wearing many hats:
          engineering, product, and occasionally things that didn't have a title. I like problems
          that seem intractable until they're not.
        </p>
        <p>
          Before that, I studied computer science and spent two summers doing research I've mostly
          forgotten but learned a lot from. The experience taught me that rigor matters even when
          nobody's checking.
        </p>
        <p>
          One time I shipped a feature in a weekend that ended up on the front page of Hacker News.
          The code was embarrassing. The lesson wasn't.
        </p>
      </div>
    </section>
  )
}
