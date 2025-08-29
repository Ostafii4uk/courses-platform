import { create } from 'zustand'

interface IAppStore {
  isOpenAuthenticationModal: boolean
  setIsOpenAuthenticationModal: (isOpenAuthenticationModal: boolean) => void
}

export const useAppStore = create<IAppStore>((set) => ({
  isOpenAuthenticationModal: false,
  setIsOpenAuthenticationModal: (isOpenAuthenticationModal) =>
    set({ isOpenAuthenticationModal }),
}))
