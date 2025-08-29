import { useEffect, useState } from 'react'
import { useAppStore } from '@/src/store/appStore'
import { ThemeToggle } from '@/src/components/ThemeToggle'
import { Button } from '@/src/components/Button'

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const { setIsOpenAuthenticationModal } = useAppStore()

  const user = localStorage.getItem('user')

  const handleAuthentication = () => {
    if (isLoggedIn) {
      localStorage.removeItem('user')
      setIsLoggedIn(false)
    } else {
      setIsOpenAuthenticationModal(true)
    }
  }

  useEffect(() => {
    if (user) {
      setIsLoggedIn(true)
    }
  }, [user])

  return (
    <header className="flex justify-between items-center sticky top-0 z-50 bg-white dark:bg-gray-900 p-4">
      <a href="https://mbdigital.io/" target="_blank" rel="noopener noreferrer">
        <h2 className="text-gray-900 dark:text-white">MBDigital.io</h2>
      </a>
      <div className="flex gap-2 items-center">
        <ThemeToggle />
        <Button onClick={handleAuthentication}>
          {isLoggedIn ? 'Log out' : 'Log in'}
        </Button>
      </div>
    </header>
  )
}
