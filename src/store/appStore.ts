import { create } from 'zustand'
import type { ICourse } from '@/src/types/course'

interface IAppStore {
  isOpenAuthenticationModal: boolean
  setIsOpenAuthenticationModal: (isOpenAuthenticationModal: boolean) => void
  courses: ICourse[]
  setCourses: (courses: ICourse[]) => void
  isLoadingCourses: boolean
  setIsLoadingCourses: (isLoadingCourses: boolean) => void
}

export const useAppStore = create<IAppStore>((set) => ({
  isOpenAuthenticationModal: false,
  setIsOpenAuthenticationModal: (isOpenAuthenticationModal) =>
    set({ isOpenAuthenticationModal }),
  courses: [],
  setCourses: (courses) => set({ courses }),
  isLoadingCourses: false,
  setIsLoadingCourses: (isLoadingCourses) => set({ isLoadingCourses }),
}))
