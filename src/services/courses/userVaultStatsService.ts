import type { ICourse } from '@/src/types/course'
import $client from '../client'
import { useAppStore } from '@/src/store/appStore'

class CoursesService {
  async getCourses() {
    const { setIsLoadingCourses, setCourses } = useAppStore.getState()
    setIsLoadingCourses(true)

    try {
      const { data } = await $client.get<ICourse[]>('/api/v1/courses')
      setCourses(data)
    } catch (error) {
      console.error('Failed to fetch courses:', error)
    } finally {
      setIsLoadingCourses(false)
    }
  }
}

export const coursesService = new CoursesService()
