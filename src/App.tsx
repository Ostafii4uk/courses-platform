import { Header } from '@/src/components/Header'
import { CoursesList } from '@/src/components/CoursesList'
import { Modals } from '@/src/components/Modals'
import { Footer } from '@/src/components/Footer'

export const App = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="h-full flex flex-col min-h-screen px-4 max-w-[1440px] mx-auto">
        <Header />
        <main className="flex-auto mb-6">
          <CoursesList />
        </main>
        <Footer />
        <Modals />
      </div>
    </div>
  )
}
