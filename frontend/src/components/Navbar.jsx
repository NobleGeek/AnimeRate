import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from './theme-provider'
import { useStore } from '../store/useStore'
import { Moon, Sun } from 'lucide-react'

function Navbar() {
  const { theme, setTheme } = useTheme()
  const user = useStore((state) => state.user)

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold">
            AnimeRate
          </Link>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-accent"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            {user ? (
              <>
                <Link
                  to="/dashboard"
                  className="px-4 py-2 rounded-md hover:bg-accent"
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => useStore.getState().logout()}
                  className="px-4 py-2 rounded-md bg-destructive text-destructive-foreground hover:bg-destructive/90"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 rounded-md hover:bg-accent"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
