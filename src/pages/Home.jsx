import './Home.css'

export default function Home() {
  return (
    <div className="home-page">
      <div className="glow-layer">
        <div className="glow glow-1"></div>
        <div className="glow glow-2"></div>
      </div>
      <div className="grid-overlay"></div>

      <header>
        <div className="logo">
          <span className="logo-mark"></span>
          Mango Cloud
        </div>
        <div className="header-tag">In progress</div>
      </header>

      <main>
        <h1>Mango Cloud</h1>
        <p className="oneliner">
          We use AI to help businesses work more efficiently and cost less.
        </p>
        <p className="intro">
          Beijing Mango Cloud Technology Co., Ltd. builds practical AI solutions
          for companies and merchants. We focus on saving time, lowering
          operating costs, and building tools people can actually use.
        </p>
      </main>

      <footer>
        <p>© 2026 Beijing Mango Cloud Technology Co., Ltd.</p>
      </footer>
    </div>
  )
}
