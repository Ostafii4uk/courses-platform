import { AuthenticationModal } from '@/src/components/AuthenticationModal'
import { CoursePreviewModal } from '@/src/components/CoursePreviewModal'
import { ConfirmationBuyModal } from '@/src/components/ConfirmationBuyModal'
import { useEffect } from 'react'
import { useAppStore } from '@/src/store/appStore'

export const Modals = () => {
  const {
    isOpenAuthenticationModal,
    isOpenCoursePreviewModal,
    isOpenConfirmationBuyModal,
  } = useAppStore()

  useEffect(() => {
    const hasOpenModal =
      isOpenAuthenticationModal ||
      isOpenCoursePreviewModal ||
      isOpenConfirmationBuyModal

    document.body.style.overflow = hasOpenModal ? 'hidden' : 'auto'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [
    isOpenAuthenticationModal,
    isOpenCoursePreviewModal,
    isOpenConfirmationBuyModal,
  ])

  return (
    <>
      <AuthenticationModal />
      <CoursePreviewModal />
      <ConfirmationBuyModal />
    </>
  )
}
