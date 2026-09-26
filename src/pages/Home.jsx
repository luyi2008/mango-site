import { useEffect, useState } from 'react'
import { copy, readLang, storeLang } from '../copy'
import './Home.css'

export default function Home() {
  const [lang, setLang] = useState(readLang)
  const text = copy[lang]

  useEffect(() => {
    document.documentElement.lang = text.code
    document.title = text.title
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', text.description)
    storeLang(lang)
  }, [lang, text])

  function choose(next) {
    if (next !== lang) setLang(next)
  }

  return (
    <div className="site" lang={text.code}>
      <a className="skip" href="#content">
        {text.skip}
      </a>

      <header className="site-header">
        <a className="site-brand" href="/">
          <img
            className="site-lockup"
            src="/brand/mango-f1-horizontal.svg"
            alt={text.logoAlt}
          />
        </a>
        <div className="lang-switch" role="group" aria-label={text.languageLabel}>
          <button
            type="button"
            lang="zh-CN"
            aria-pressed={lang === 'zh'}
            onClick={() => choose('zh')}
          >
            中文
          </button>
          <button
            type="button"
            lang="en"
            aria-pressed={lang === 'en'}
            onClick={() => choose('en')}
          >
            English
          </button>
        </div>
      </header>

      <main id="content">
        <section className="site-hero" aria-labelledby="tagline">
          <img
            className="site-mark"
            src="/brand/mango-f1-vertical.svg"
            alt="MANGO"
          />
          <h1 id="tagline">{text.tagline}</h1>
          <p className="site-domain">mangguo.cloud</p>
          <div className="site-actions">
            <a className="btn btn-primary" href="#work">
              {text.seeWork}
            </a>
            <a className="btn btn-quiet" href="#contact">
              {text.contactCta}
            </a>
          </div>
        </section>

        <section className="site-work" id="work" aria-labelledby="offer">
          <div className="site-measure">
            <h2 id="offer">{text.offerTitle}</h2>
            <p>{text.offerBody}</p>
          </div>
        </section>

        <section className="site-contact" id="contact" aria-labelledby="reach">
          <div className="site-measure">
            <h2 id="reach">{text.contactTitle}</h2>
            <p>{text.company}</p>
            <p className="site-domain">mangguo.cloud</p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>{text.footer}</p>
      </footer>
    </div>
  )
}
