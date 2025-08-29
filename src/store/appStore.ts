import { create } from 'zustand'
import type { ICourse } from '@/src/types/course'

interface IAppStore {
  isOpenAuthenticationModal: boolean
  setIsOpenAuthenticationModal: (isOpenAuthenticationModal: boolean) => void
  courses: ICourse[]
  setCourses: (courses: ICourse[]) => void
  isLoadingCourses: boolean
  setIsLoadingCourses: (isLoadingCourses: boolean) => void
  selectedCourse: ICourse | null
  setSelectedCourse: (selectedCourse: ICourse | null) => void
  isOpenCoursePreviewModal: boolean
  setIsOpenCoursePreviewModal: (isOpenCoursePreviewModal: boolean) => void
  purchasedCoursesIDs: string[]
  setPurchasedCoursesIDs: (purchasedCoursesIDs: string[]) => void
  isLoggedIn: boolean
  setIsLoggedIn: (isLoggedIn: boolean) => void
}

export const useAppStore = create<IAppStore>((set) => ({
  isOpenAuthenticationModal: false,
  setIsOpenAuthenticationModal: (isOpenAuthenticationModal) =>
    set({ isOpenAuthenticationModal }),
  courses: [],
  setCourses: (courses) => set({ courses }),
  isLoadingCourses: true,
  setIsLoadingCourses: (isLoadingCourses) => set({ isLoadingCourses }),
  selectedCourse: null,
  setSelectedCourse: (selectedCourse) => set({ selectedCourse }),
  isOpenCoursePreviewModal: false,
  setIsOpenCoursePreviewModal: (isOpenCoursePreviewModal) =>
    set({ isOpenCoursePreviewModal }),
  purchasedCoursesIDs: [],
  setPurchasedCoursesIDs: (purchasedCoursesIDs) => set({ purchasedCoursesIDs }),
  isLoggedIn: false,
  setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
}))
