import './Home.css'

export default function Home() {
  return (
    <div className="site">
      <a className="skip" href="#content">
        跳到正文
      </a>

      <header className="site-header">
        <a className="site-brand" href="/">
          <img
            className="site-lockup"
            src="/brand/mango-f1-horizontal.svg"
            alt="芒果云端科技"
          />
        </a>
      </header>

      <main id="content">
        <section className="site-hero" aria-labelledby="tagline">
          <img
            className="site-mark"
            src="/brand/mango-f1-vertical.svg"
            alt="MANGO"
          />
          <h1 id="tagline">用 AI 让生意更省事</h1>
          <p className="site-domain">mangguo.cloud</p>
          <div className="site-actions">
            <a className="btn btn-primary" href="#work">
              了解方案
            </a>
            <a className="btn btn-quiet" href="#contact">
              联系我们
            </a>
          </div>
        </section>

        <section className="site-work" id="work" aria-labelledby="offer">
          <div className="site-measure">
            <h2 id="offer">给公司和商家做能用的 AI 工具</h2>
            <p>
              省下时间，把运营成本降下来，并且让人当天就能上手。北京芒果云端科技有限公司做的就是这几件事。
            </p>
            <p className="site-en">
              We build practical AI tools for companies and merchants.
            </p>
          </div>
        </section>

        <section className="site-contact" id="contact" aria-labelledby="reach">
          <div className="site-measure">
            <h2 id="reach">联系我们</h2>
            <p>北京芒果云端科技有限公司</p>
            <p className="site-en">Beijing Mango Cloud Technology Co., Ltd.</p>
            <p className="site-domain">mangguo.cloud</p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>© 2026 北京芒果云端科技有限公司</p>
      </footer>
    </div>
  )
}
