import { Header } from '@/src/components/Header'
import { Modals } from '@/src/components/Modals'
import { Footer } from '@/src/components/Footer'
import { Courses } from './components/Courses'

export const App = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="h-full flex flex-col min-h-screen px-4 max-w-[1440px] mx-auto">
        <Header />
        <main className="flex-auto mb-6">
          <Courses />
        </main>
        <Footer />
        <Modals />
      </div>
    </div>
  )
}
