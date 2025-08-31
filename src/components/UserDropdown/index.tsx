import { useEffect, useRef, useState } from 'react'
import { useAppStore } from '@/src/store/appStore'

export const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const {
    setIsLoggedIn,
    setPurchasedCourses,
    setUser,
    user,
    setIsMyCoursesListOpen,
  } = useAppStore()

  const handleSignOut = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('purchasedCourses')
    setUser(null)
    setPurchasedCourses([])
    setIsLoggedIn(false)
  }

  const handleMyCoursesClick = () => {
    setIsOpen(false)
    setIsMyCoursesListOpen(true)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    const localUser = localStorage.getItem('user')

    if (localUser) {
      setUser(JSON.parse(localUser))
    }
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <button onClick={() => setIsOpen(!isOpen)} className="flex">
        <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
          <svg
            className="absolute w-12 h-12 text-gray-400 -left-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </button>

      {isOpen && (
        <div className="absolute divide-y divide-gray-100 dark:divide-gray-600 right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-700">
          <div className="px-4 py-3 text-sm text-gray-900 dark:text-white flex flex-col gap-1">
            <div className="font-medium truncate">{user?.email}</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              User balance: ${user?.balance ?? 0}
            </p>
          </div>
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            <li
              onClick={handleMyCoursesClick}
              className="w-full block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
            >
              My Courses
            </li>
          </ul>
          <div className="py-1">
            <button
              onClick={handleSignOut}
              className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
