import { AuthenticationModal } from '@/src/components/AuthenticationModal'
import { Header } from '@/src/components/Header'
import { CoursesList } from '@/src/components/CoursesList'

export const App = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="h-full flex flex-col min-h-screen p-4 max-w-[1440px] mx-auto">
        <Header />
        <main className="flex-auto">
          <CoursesList />
        </main>
        <footer className="flex justify-center">
          <p className="text-gray-900 dark:text-white">© 2022, MBDigital.io</p>
        </footer>
        <AuthenticationModal />
      </div>
    </div>
  )
}
