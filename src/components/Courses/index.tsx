import { CoursesList } from '@/src/components/CoursesList'
import { MyCoursesList } from '@/src/components/MyCoursesList'
import { useAppStore } from '@/src/store/appStore'
import { useEffect } from 'react'

export const Courses = () => {
  const { isMyCoursesListOpen, setPurchasedCourses } = useAppStore()

  useEffect(() => {
    const purchasedCourses = localStorage.getItem('purchasedCourses')
    if (purchasedCourses) {
      setPurchasedCourses(JSON.parse(purchasedCourses))
    }
  }, [])

  return (
    <>
      {!isMyCoursesListOpen && <CoursesList />}
      {isMyCoursesListOpen && <MyCoursesList />}
    </>
  )
}
