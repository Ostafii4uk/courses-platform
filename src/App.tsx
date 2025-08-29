import { AuthenticationModal } from '@/src/components/AuthenticationModal'
import { useEffect, useState } from 'react'

export const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const user = localStorage.getItem('user')

  const handleAuthentication = () => {
    if (isLoggedIn) {
      localStorage.removeItem('user')
      setIsLoggedIn(false)
    } else {
      setIsModalOpen(true)
    }
  }

  useEffect(() => {
    if (user) {
      setIsLoggedIn(true)
    }
  }, [user])

  return (
    <div className="bg-white dark:bg-gray-800">
      <div className="h-screen flex flex-col min-h-screen p-4 max-w-[1440px] mx-auto">
        <header className="flex justify-between items-center">
          <h2 className="text-gray-900 dark:text-white">MBDigital.io</h2>
          <div className="flex gap-2 items-center">
            <button
              className="block text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
              onClick={handleAuthentication}
            >
              {isLoggedIn ? 'Log out' : 'Log in'}
            </button>
          </div>
        </header>
        <main className="flex-auto">
          <h1 className="text-center text-gray-900 dark:text-white">
            Courses platform
          </h1>
        </main>
        <footer className="flex justify-center">
          <p className="text-gray-900 dark:text-white">© 2022, MBDigital.io</p>
        </footer>
        <AuthenticationModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </div>
  )
}
