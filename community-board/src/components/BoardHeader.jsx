function BoardHeader({ title, subtitle }) {
  return (
    <header className="hero-header">
      <div className="hero-awning" aria-hidden="true" />
      <div className="hero-copy">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </header>
  )
}

export default BoardHeader
