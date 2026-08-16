import './ComingSoon.css'

export default function ComingSoon() {
  return (
    <div className="cs-page">
      <div className="glow-layer">
        <div className="glow glow-1"></div>
        <div className="glow glow-2"></div>
        <div className="glow glow-3"></div>
      </div>
      <div className="grid-overlay"></div>

      <header>
        <div className="logo">
          <span className="logo-mark"></span>
          北京芒果云端科技有限公司
        </div>
        <div className="header-tag">Status · In Progress</div>
      </header>

      <main>
        <div className="orbit-wrap">
          <div className="orbit-ring r1"></div>
          <div className="orbit-ring r2"></div>
          <div className="orbit-dot d1"></div>
          <div className="orbit-dot d2"></div>
          <div className="orbit-core"></div>
        </div>

        <div className="eyebrow">Under Construction</div>
        <h1>
          网站建设中
          <span className="sub-en">COMING SOON</span>
        </h1>
        <p className="desc">我们正在精心打磨，为你带来更好的体验，敬请期待。</p>
      </main>

      <footer>
        <p>© 2026 北京芒果云端科技有限公司. All rights reserved.</p>
      </footer>
    </div>
  )
}
