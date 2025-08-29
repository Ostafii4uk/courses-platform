import { useAppStore } from '@/src/store/appStore'
import { validateEmail } from '@/src/utils/validateEmail'
import { validatePassword } from '@/src/utils/validatePassword'
import cn from 'clsx'
import { useState } from 'react'

export const AuthenticationModal = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [emailError, setEmailError] = useState('')
  const { isOpenAuthenticationModal, setIsOpenAuthenticationModal } =
    useAppStore()

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleModalClose = () => {
    setIsOpenAuthenticationModal(false)
  }

  const clearForm = () => {
    setEmail('')
    setPassword('')
    setPasswordError('')
    setEmailError('')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const emailError = validateEmail(email)
    setEmailError(emailError.valid ? '' : emailError.reason)
    const passwordError = validatePassword(password)
    setPasswordError(passwordError)

    console.log('Form submitted:', { email, password })

    if (!passwordError && email && password) {
      localStorage.setItem('user', JSON.stringify({ email, password }))
      clearForm()
      handleModalClose()
    }
  }

  return (
    <div
      className={cn(
        'overflow-y-auto fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-screen max-h-full bg-black/55 dark:bg-black/85',
        isOpenAuthenticationModal ? 'flex' : 'hidden overflow-x-hidden'
      )}
    >
      <section className="w-full">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Log in to our platform
                </h3>
                <button
                  className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={handleModalClose}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className={cn(
                      `bg-gray-50 border text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`,
                      {
                        'border-red-500': emailError,
                        'border-gray-300 dark:border-gray-600': !emailError,
                      }
                    )}
                    placeholder="name@gmail.com"
                    required
                    value={email}
                    onChange={handleEmailChange}
                  />
                  {emailError && (
                    <p
                      id="email-error"
                      className="mt-2 text-sm text-red-600 dark:text-red-400"
                    >
                      {emailError}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className={cn(
                      `bg-gray-50 border text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`,
                      {
                        'border-red-500': passwordError,
                        'border-gray-300 dark:border-gray-600': !passwordError,
                      }
                    )}
                    required
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  {passwordError && (
                    <p
                      id="password-error"
                      className="mt-2 text-sm text-red-600 dark:text-red-400"
                    >
                      {passwordError}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
