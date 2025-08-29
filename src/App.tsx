import { AuthenticationModal } from '@/src/components/AuthenticationModal'
import { Header } from '@/src/components/Header'

export const App = () => {
  return (
    <div className="bg-white dark:bg-gray-800">
      <div className="h-screen flex flex-col min-h-screen p-4 max-w-[1440px] mx-auto">
        <Header />
        <main className="flex-auto">
          <h1 className="text-center text-gray-900 dark:text-white">
            Courses platform
          </h1>
        </main>
        <footer className="flex justify-center">
          <p className="text-gray-900 dark:text-white">© 2022, MBDigital.io</p>
        </footer>
        <AuthenticationModal />
      </div>
    </div>
  )
}
