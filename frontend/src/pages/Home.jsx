import React from 'react'
import { mockAnimeData } from '../data/mockData'
import AnimeCard from '../components/AnimeCard'
import { Star } from 'lucide-react'

function Home() {
  const featuredAnime = mockAnimeData[0]
  const otherAnime = mockAnimeData.slice(1)

  return (
    <div className="space-y-8">
      {/* Featured Anime Banner */}
      <div className="relative h-[60vh] overflow-hidden rounded-xl">
        <div className="absolute inset-0">
          <img
            src={featuredAnime.imageUrl}
            alt={featuredAnime.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-background/20" />
        </div>
        <div className="absolute bottom-0 left-0 p-8">
          <div className="flex items-center gap-4 mb-2">
            <h1 className="text-4xl font-bold text-white">{featuredAnime.title}</h1>
            <div className="flex items-center gap-1 bg-primary/90 px-3 py-1 rounded-full">
              <Star className="h-5 w-5 fill-primary-foreground text-primary-foreground" />
              <span className="text-lg font-semibold text-primary-foreground">
                {featuredAnime.rating}/10
              </span>
            </div>
          </div>
          <p className="text-lg text-gray-200 mb-4 max-w-2xl">{featuredAnime.synopsis}</p>
          <button className="bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90">
            Watch Now
          </button>
        </div>
      </div>

      {/* Anime Grid */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Popular Anime</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {otherAnime.map((anime) => (
            <AnimeCard key={anime.id} anime={anime} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
