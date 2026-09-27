import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { PlaceCard } from './components/PlaceCard'
import { places } from './data/places'

function App() {
  return (
    <div className="page">
      <Header />

      <main className="place-grid">
        {places.map((place) => (
          <PlaceCard key={place.id} place={place} />
        ))}
      </main>

      <Footer />
    </div>
  )
}

export default App
