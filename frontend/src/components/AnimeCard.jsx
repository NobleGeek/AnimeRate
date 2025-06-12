import React, { useState } from 'react'
import { Star, X } from 'lucide-react'

function AnimeCard({ anime }) {
  const { title, rating, imageUrl, year, genres } = anime
  const [showAllTags, setShowAllTags] = useState(false)

  const visibleTags = genres.slice(0, 2)
  const remainingTags = genres.length > 2 ? genres.slice(2) : []

  return (
    <div className="group relative flex flex-col h-full rounded-lg border bg-background">
      <div className="aspect-[2/3] overflow-hidden rounded-t-lg">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      <div className="flex flex-col flex-grow p-4">
        <h3 className="text-lg font-semibold leading-none tracking-tight mb-2">
          {title}
        </h3>
        
        <div className="flex items-center space-x-1 text-sm text-muted-foreground mb-2">
          <Star className="h-4 w-4 fill-primary text-primary" />
          <span>{rating}</span>
          <span>•</span>
          <span>{year}</span>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {visibleTags.map((genre) => (
            <span
              key={genre}
              className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              {genre}
            </span>
          ))}
          {remainingTags.length > 0 && (
            <button
              onClick={() => setShowAllTags(true)}
              className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors hover:bg-accent"
            >
              +{remainingTags.length} more
            </button>
          )}
        </div>

        {/* Push button to bottom */}
        <div className="mt-auto">
          <button className="w-full rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
            View Details
          </button>
        </div>
      </div>

      {/* Tags Modal */}
      {showAllTags && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="relative bg-background p-6 rounded-lg border shadow-lg max-w-md w-full mx-4">
            <button
              onClick={() => setShowAllTags(false)}
              className="absolute right-4 top-4 p-1 rounded-full hover:bg-accent"
            >
              <X className="h-4 w-4" />
            </button>
            
            <h3 className="text-lg font-semibold mb-4">All Genres</h3>
            
            <div className="flex flex-wrap gap-2">
              {genres.map((genre) => (
                <span
                  key={genre}
                  className="inline-flex items-center rounded-full border px-2.5 py-1 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnimeCard
