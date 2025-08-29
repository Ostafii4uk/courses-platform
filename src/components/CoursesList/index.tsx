import { useEffect } from 'react'
import { coursesService } from '@/src/services/courses/userVaultStatsService'
import { useAppStore } from '@/src/store/appStore'
import { CourseCard } from '@/src/components/CourseCard'
import { CourseCardSkeleton } from '@/src/components/CourseCardSkeleton'

export const CoursesList = () => {
  const { courses, isLoadingCourses } = useAppStore()

  useEffect(() => {
    coursesService.getCourses()
  }, [])

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-center text-gray-900 dark:text-white">Our Courses</h1>
      <div className="flex flex-wrap gap-4 justify-center">
        {isLoadingCourses
          ? Array.from({ length: 10 }).map((_, index) => (
              <CourseCardSkeleton key={index} />
            ))
          : courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
      </div>
    </div>
  )
}
