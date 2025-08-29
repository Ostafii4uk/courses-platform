import type { ICourse } from '@/src/types/course'
import { useRef } from 'react'

interface IProps {
  course: ICourse
}

export const CourseCard: React.FC<IProps> = ({ course }) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  let hoverTimeout: NodeJS.Timeout

  const handleMouseEnter = () => {
    hoverTimeout = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch(() => console.error('Video play failed'))
      }
    }, 1000)
  }

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeout)
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 cursor-pointer"
    >
      <video
        ref={videoRef}
        className="p-8 w-full h-64"
        src={course.videoUrl}
        loop
        muted
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
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${course.price}
          </span>
          <a
            href="#"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Buy
          </a>
        </div>
      </div>
    </div>
  )
}
