export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Content Creation Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Turn Blog Posts into{" "}
          <span className="text-[#58a6ff]">Viral Social Threads</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Paste a URL or text and get AI-optimized Twitter &amp; LinkedIn threads in seconds — complete with hashtags, mentions, and perfect post lengths.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start Splitting — $11/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Learn More
          </a>
        </div>
        <div className="mt-14 bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-left">
          <p className="text-xs text-[#8b949e] uppercase tracking-widest mb-3 font-semibold">Preview — Thread Output</p>
          <div className="space-y-3">
            {[
              "1/ Just read the most insightful breakdown of content marketing in 2024. Here's what every creator needs to know 🧵",
              "2/ The biggest mistake? Writing for algorithms instead of humans. Authentic storytelling drives 3x more engagement than keyword-stuffed posts.",
              "3/ Key takeaway: repurpose long-form content into micro-threads. One blog post = 10 days of social content. #ContentStrategy #Marketing",
            ].map((tweet, i) => (
              <div key={i} className="bg-[#0d1117] border border-[#21262d] rounded-lg px-4 py-3 text-sm text-[#c9d1d9]">
                {tweet}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features strip */}
      <section className="border-y border-[#21262d] bg-[#161b22] py-10">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {[
            { icon: "✂️", title: "Smart Splitting", desc: "AI respects context — no mid-sentence cuts" },
            { icon: "#️⃣", title: "Auto Hashtags", desc: "Relevant tags added based on your content" },
            { icon: "🔗", title: "URL or Paste", desc: "Works with any blog URL or raw text" },
          ].map((f) => (
            <div key={f.title}>
              <div className="text-3xl mb-2">{f.icon}</div>
              <p className="font-semibold text-white text-sm mb-1">{f.title}</p>
              <p className="text-[#8b949e] text-xs">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Simple Pricing</h2>
        <p className="text-[#8b949e] text-sm mb-8">One plan. Everything included.</p>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-extrabold text-white mb-1">$11<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-[#8b949e] text-sm mb-6">Cancel anytime</p>
          <ul className="text-sm text-[#c9d1d9] space-y-2 mb-8 text-left">
            {[
              "Unlimited thread splits",
              "Twitter & LinkedIn formats",
              "Auto hashtag generation",
              "URL import support",
              "Real-time preview",
              "Priority support",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "What platforms does it support?",
              a: "ThreadSplit currently optimizes content for Twitter/X (280 chars per tweet) and LinkedIn (up to 3,000 chars per post), with platform-specific formatting and hashtag strategies.",
            },
            {
              q: "Can I import any blog URL?",
              a: "Yes — paste any publicly accessible blog URL and our tool will fetch and parse the content automatically. You can also paste raw text directly.",
            },
            {
              q: "Is there a free trial?",
              a: "We offer a 7-day money-back guarantee. If ThreadSplit doesn't save you hours of content repurposing work, we'll refund you — no questions asked.",
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#21262d] rounded-xl p-5">
              <p className="font-semibold text-white mb-2 text-sm">{item.q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] py-6 text-center text-xs text-[#8b949e]">
        © {new Date().getFullYear()} ThreadSplit. All rights reserved.
      </footer>
    </main>
  )
}
