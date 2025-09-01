import { useAppStore } from '@/src/store/appStore'
import { CourseCard } from '@/src/components/CourseCard'
import { Button } from '@/src/components/Button'

export const MyCoursesList = () => {
  const { purchasedCourses, setIsMyCoursesListOpen } = useAppStore()

  return (
    <div className="flex flex-col items-center gap-6 relative">
      <Button
        className="md:absolute top-4 left-4 flex items-center gap-2"
        onClick={() => setIsMyCoursesListOpen(false)}
      >
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 8 14"
        >
          <path
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
          />
        </svg>
        Back to Platform
      </Button>
      <h1 className="text-center text-gray-900 dark:text-white">My Courses</h1>
      <div className="flex flex-wrap gap-4 justify-center">
        {purchasedCourses.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">
            You have't bought any courses yet.
          </p>
        ) : (
          purchasedCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))
        )}
      </div>
      {purchasedCourses.length === 0 && (
        <Button onClick={() => setIsMyCoursesListOpen(false)}>
          Buy Courses
        </Button>
      )}
    </div>
  )
}
