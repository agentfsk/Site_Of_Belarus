import { useState } from 'react'
import type { Place } from '../data/places'

type PlaceCardProps = {
  place: Place
}

export function PlaceCard({ place }: PlaceCardProps) {
  const [imageFailed, setImageFailed] = useState(false)

  return (
    <article className="place-card" data-place-id={place.id}>
      <div className="place-card__media">
        {imageFailed ? (
          <div
            className="place-card__placeholder"
            role="img"
            aria-label={`Photograph of ${place.name} could not be loaded`}
          >
            <span className="place-card__placeholder-name">{place.name}</span>
            <span className="place-card__placeholder-note">Photo not available</span>
          </div>
        ) : (
          <img
            className="place-card__image"
            src={place.image}
            alt={place.alt}
            loading="lazy"
            decoding="async"
            onError={() => setImageFailed(true)}
          />
        )}
      </div>

      <div className="place-card__body">
        <h2 className="place-card__name">{place.name}</h2>
        <p className="place-card__city">{place.city}</p>

        <div className="place-card__sentences">
          {place.sentences.map((sentence) => (
            <p key={sentence}>{sentence}</p>
          ))}
        </div>

        <p className="place-card__credit">
          <span className="place-card__credit-label">Photo:</span> {place.author},{' '}
          <a
            className="place-card__license"
            href={place.licenseUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {place.license}
          </a>
          , via{' '}
          <a
            className="place-card__source"
            href={place.imageSourcePage}
            target="_blank"
            rel="noopener noreferrer"
          >
            Wikimedia Commons
          </a>
        </p>
      </div>
    </article>
  )
}
