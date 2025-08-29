import { AuthenticationModal } from '@/src/components/AuthenticationModal'
import { CoursePreviewModal } from '@/src/components/CoursePreviewModal'
import { useEffect } from 'react'
import { useAppStore } from '@/src/store/appStore'

export const Modals = () => {
  const { isOpenAuthenticationModal, isOpenCoursePreviewModal } = useAppStore()

  useEffect(() => {
    if (isOpenAuthenticationModal || isOpenCoursePreviewModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpenAuthenticationModal, isOpenCoursePreviewModal])

  return (
    <>
      <AuthenticationModal />
      <CoursePreviewModal />
    </>
  )
}
