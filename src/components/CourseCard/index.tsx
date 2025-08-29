import type { ICourse } from '@/src/types/course'
import { useRef } from 'react'
import { useAppStore } from '@/src/store/appStore'
import { BuyCourseBtn } from '@/src/components/BuyCourseBtn'
import { MAX_VIDEO_PREVIEW_TIME } from '@/src/constants'
import { Button } from '@/src/components/Button'
import cn from 'clsx'

interface IProps {
  course: ICourse
}

export const CourseCard: React.FC<IProps> = ({ course }) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  let hoverTimeout: NodeJS.Timeout
  const {
    setIsOpenAuthenticationModal,
    setSelectedCourse,
    setIsOpenCoursePreviewModal,
    purchasedCoursesIDs,
    isLoggedIn,
  } = useAppStore()

  const isPurchasedCourse = purchasedCoursesIDs.includes(course.id)

  const handleMouseEnter = () => {
    hoverTimeout = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch(() => console.error('Video play failed'))
      }
    }, 1000)
  }

  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget
    if (video.currentTime >= MAX_VIDEO_PREVIEW_TIME) {
      video.currentTime = 0
    }
  }

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeout)
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  const handleClickCourse = () => {
    if (!isLoggedIn) {
      setIsOpenAuthenticationModal(true)
    } else {
      if (isPurchasedCourse) {
        setSelectedCourse(course)
        setIsOpenCoursePreviewModal(true)
        handleMouseLeave()
      }
    }
  }

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <video
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClickCourse}
        ref={videoRef}
        className={cn('p-8 w-full h-64', {
          'cursor-not-allowed': !isPurchasedCourse,
          'cursor-pointer': isPurchasedCourse,
        })}
        src={course.videoUrl}
        loop
        muted
        onTimeUpdate={handleTimeUpdate}
      />
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {course.title}
          </h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {course.description}
          </p>
        </div>
        {!isPurchasedCourse || !isLoggedIn ? (
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              ${course.price}
            </span>
            <BuyCourseBtn courseId={course.id} />
          </div>
        ) : (
          <Button onClick={handleClickCourse}>Watch Course</Button>
        )}
      </div>
    </div>
  )
}
