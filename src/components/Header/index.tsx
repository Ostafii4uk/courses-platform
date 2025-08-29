import { useEffect, useState } from 'react'
import { useAppStore } from '@/src/store/appStore'
import { ThemeToggle } from '@/src/components/ThemeToggle'

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
    <header className="flex justify-between items-center">
      <h2 className="text-gray-900 dark:text-white">MBDigital.io</h2>
      <div className="flex gap-2 items-center">
        <ThemeToggle />
        <button
          className="block text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
          onClick={handleAuthentication}
        >
          {isLoggedIn ? 'Log out' : 'Log in'}
        </button>
      </div>
    </header>
  )
}
