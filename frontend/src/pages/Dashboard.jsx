import React from 'react'
import { useStore } from '../store/useStore'
import { Navigate } from 'react-router-dom'

function Dashboard() {
  const user = useStore((state) => state.user)

  if (!user) {
    return <Navigate to="/login" replace />
  }

  return (
    <div className="space-y-8">
      <div className="border-b pb-4">
        <h1 className="text-3xl font-bold">Welcome, {user.username}!</h1>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Stats Card */}
        <div className="rounded-lg border p-6">
          <h3 className="text-lg font-semibold">Your Stats</h3>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Anime Rated</p>
              <p className="text-2xl font-bold">24</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Comments</p>
              <p className="text-2xl font-bold">12</p>
            </div>
          </div>
        </div>

        {/* Recent Ratings */}
        <div className="rounded-lg border p-6">
          <h3 className="text-lg font-semibold">Recent Ratings</h3>
          <div className="mt-4 space-y-4">
            {mockAnimeData.slice(0, 3).map((anime) => (
              <div key={anime.id} className="flex items-center justify-between">
                <span className="text-sm">{anime.title}</span>
                <span className="text-sm font-semibold">{anime.rating}/10</span>
              </div>
            ))}
          </div>
        </div>

        {/* Watchlist */}
        <div className="rounded-lg border p-6">
          <h3 className="text-lg font-semibold">Watchlist</h3>
          <div className="mt-4 space-y-4">
            {mockAnimeData.slice(0, 3).map((anime) => (
              <div key={anime.id} className="flex items-center justify-between">
                <span className="text-sm">{anime.title}</span>
                <button className="text-sm text-destructive">Remove</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
