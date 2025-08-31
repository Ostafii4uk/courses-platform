import { create } from 'zustand'
import type { ICourse } from '@/src/types/course'
import type { IUser } from '@/src/types/user'

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
  purchasedCourses: ICourse[]
  setPurchasedCourses: (purchasedCourses: ICourse[]) => void
  isLoggedIn: boolean
  setIsLoggedIn: (isLoggedIn: boolean) => void
  user: IUser | null
  setUser: (user: IUser | null) => void
  isMyCoursesListOpen: boolean
  setIsMyCoursesListOpen: (isMyCoursesListOpen: boolean) => void
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
  purchasedCourses: [],
  setPurchasedCourses: (purchasedCourses) => set({ purchasedCourses }),
  isLoggedIn: false,
  setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
  user: null,
  setUser: (user) => set({ user }),
  isMyCoursesListOpen: false,
  setIsMyCoursesListOpen: (isMyCoursesListOpen) => set({ isMyCoursesListOpen }),
}))
