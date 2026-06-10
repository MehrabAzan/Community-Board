function AnimeCard({ title, subtitle, image, action }) {
  return (
    <article className="card">
      <img className="card-image" src={image} alt={title} />
      <div className="card-body">
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <a href={action.href} target="_blank" rel="noreferrer" className="card-action">
          {action.label}
        </a>
      </div>
    </article>
  )
}

export default AnimeCard
