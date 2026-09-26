import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { documentLang } from '../i18n'
import './Home.css'

export default function Home() {
  const { t, i18n } = useTranslation()
  const language = i18n.resolvedLanguage === 'en' ? 'en' : 'zh'

  useEffect(() => {
    function apply() {
      const next = i18n.resolvedLanguage === 'en' ? 'en' : 'zh'
      document.documentElement.lang = documentLang(next)
      document.title = t('title')
      const meta = document.querySelector('meta[name="description"]')
      if (meta) meta.setAttribute('content', t('description'))
    }

    apply()
    i18n.on('languageChanged', apply)
    return () => i18n.off('languageChanged', apply)
  }, [i18n, t])

  return (
    <div className="site" lang={documentLang(language)}>
      <a className="skip" href="#content">
        {t('skip')}
      </a>

      <header className="site-header">
        <a className="site-brand" href="/">
          <img
            className="site-lockup"
            src="/brand/mango-f1-horizontal.svg"
            alt={t('logoAlt')}
          />
        </a>
        <div className="lang-switch" role="group" aria-label={t('languageLabel')}>
          <button
            type="button"
            lang="zh-CN"
            aria-pressed={language === 'zh'}
            onClick={() => i18n.changeLanguage('zh')}
          >
            中文
          </button>
          <button
            type="button"
            lang="en"
            aria-pressed={language === 'en'}
            onClick={() => i18n.changeLanguage('en')}
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
          <h1 id="tagline">{t('tagline')}</h1>
          <p className="site-domain">mangguo.cloud</p>
          <div className="site-actions">
            <a className="btn btn-primary" href="#work">
              {t('seeWork')}
            </a>
            <a className="btn btn-quiet" href="#contact">
              {t('contactCta')}
            </a>
          </div>
        </section>

        <section className="site-work" id="work" aria-labelledby="offer">
          <div className="site-measure">
            <h2 id="offer">{t('offerTitle')}</h2>
            <p>{t('offerBody')}</p>
          </div>
        </section>

        <section className="site-contact" id="contact" aria-labelledby="reach">
          <div className="site-measure">
            <h2 id="reach">{t('contactTitle')}</h2>
            <p>{t('company')}</p>
            <p className="site-domain">mangguo.cloud</p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>{t('footer')}</p>
      </footer>
    </div>
  )
}
