export default function Header() {
  return (
    <section id="me" className="mb-28">
      <h1 className="font-display text-5xl font-normal tracking-tight text-ink mb-2">
        Brett Koppelman
      </h1>
      <p className="text-sm text-subtle font-sans mb-14 tracking-wide">@brettkoppelman</p>

      <div className="space-y-5 text-[#44403C] leading-[1.8] text-base max-w-[530px] font-sans font-normal">
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
