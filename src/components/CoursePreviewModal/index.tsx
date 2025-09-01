import cn from 'clsx'
import { useAppStore } from '@/src/store/appStore'
import { useEffect, useRef } from 'react'

export const CoursePreviewModal = () => {
  const {
    isOpenCoursePreviewModal,
    setIsOpenCoursePreviewModal,
    selectedCourse,
    setSelectedCourse,
  } = useAppStore()
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleModalClose = () => {
    setIsOpenCoursePreviewModal(false)
    setSelectedCourse(null)
  }

  useEffect(() => {
    if (!isOpenCoursePreviewModal && videoRef.current) {
      videoRef.current.pause()
    }
  }, [isOpenCoursePreviewModal])

  if (!isOpenCoursePreviewModal) {
    return null
  }

  return (
    <div
      className={cn(
        'overflow-y-auto fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-screen max-h-full bg-black/55 dark:bg-black/85',
        isOpenCoursePreviewModal ? 'flex' : 'hidden overflow-x-hidden'
      )}
    >
      <section className="w-full">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-5xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {selectedCourse?.title}
                </h3>
                <button
                  className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={handleModalClose}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <video
                ref={videoRef}
                src={selectedCourse?.videoUrl}
                controls
                className="w-full h-64 sm:h-2/3"
                autoPlay
              />
              <p className="text-gray-500 dark:text-gray-400">
                {selectedCourse?.description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
