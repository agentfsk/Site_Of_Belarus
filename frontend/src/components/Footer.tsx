import { places } from '../data/places'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p className="site-footer__note">
          All photographs on this page come from Wikimedia Commons. Every photo belongs to its
          author and is used under the licence shown under the photo. Thank you to all the
          photographers who shared their pictures for free.
        </p>

        <h2 className="site-footer__heading">Photo sources</h2>
        <ul className="site-footer__list">
          {places.map((place) => (
            <li key={place.id}>
              <a href={place.imageSourcePage} target="_blank" rel="noopener noreferrer">
                {place.name}
              </a>
              <span className="site-footer__sep"> — </span>
              {place.author}, {place.license}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
