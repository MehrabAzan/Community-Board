import './App.css'
import AnimeCard from './components/AnimeCard.jsx'
import BoardHeader from './components/BoardHeader.jsx'

const animeCards = [
  {
    title: 'Ramen Night Watch Party',
    subtitle: 'Streaming event',
    image: 'https://placehold.co/600x360/6d4fff/ffffff?text=Watch+Party',
    action: { label: 'View details', href: 'https://example.com/anime-watch-party' },
  },
  {
    title: 'Manga Swap Picks',
    subtitle: 'Community resource',
    image: 'https://placehold.co/600x360/8a5bff/ffffff?text=Manga+Swap',
    action: { label: 'Browse offers', href: 'https://example.com/manga-swap' },
  },
  {
    title: 'Voice Acting Live',
    subtitle: 'Practice session',
    image: 'https://placehold.co/600x360/4f63ff/ffffff?text=Voice+Acting',
    action: { label: 'Register', href: 'https://example.com/voice-acting' },
  },
  {
    title: 'Anime News Feed',
    subtitle: 'Latest announcements',
    image: 'https://placehold.co/600x360/9e60ff/ffffff?text=News+Feed',
    action: { label: 'Read updates', href: 'https://example.com/anime-news' },
  },
  {
    title: 'Fan Art Showcase',
    subtitle: 'Creative contest',
    image: 'https://placehold.co/600x360/755bff/ffffff?text=Fan+Art',
    action: { label: 'Submit art', href: 'https://example.com/fan-art' },
  },
  {
    title: 'Anime Book Club',
    subtitle: 'Discussion group',
    image: 'https://placehold.co/600x360/864eff/ffffff?text=Book+Club',
    action: { label: 'Join conversation', href: 'https://example.com/book-club' },
  },
  {
    title: 'Collector Swap Meet',
    subtitle: 'Merch market',
    image: 'https://placehold.co/600x360/5f48ff/ffffff?text=Swap+Meet',
    action: { label: 'Explore listings', href: 'https://example.com/swap-meet' },
  },
  {
    title: 'Local Meetup Map',
    subtitle: 'Find nearby groups',
    image: 'https://placehold.co/600x360/6249ff/ffffff?text=Meetup+Map',
    action: { label: 'Explore map', href: 'https://example.com/meetup-map' },
  },
  {
    title: 'Studio Spotlight',
    subtitle: 'Featured artists',
    image: 'https://placehold.co/600x360/7c55ff/ffffff?text=Studio+Spotlight',
    action: { label: 'Discover crews', href: 'https://example.com/studio-spotlight' },
  },
  {
    title: 'Anime Trivia Night',
    subtitle: 'Live quiz',
    image: 'https://placehold.co/600x360/844cff/ffffff?text=Trivia+Night',
    action: { label: 'Play now', href: 'https://example.com/trivia-night' },
  },
]

function App() {
  return (
    <div className="app-shell">
      <BoardHeader
        title="Anime Community Board"
        subtitle="Explore events, meetups, and fan resources for the anime community."
      />

      <main>
        <section className="card-grid" aria-label="Anime community events and resources">
          {animeCards.map((card) => (
            <AnimeCard key={card.title} {...card} />
          ))}
        </section>
      </main>
    </div>
  )
}

export default App
