import { Button } from '@/src/components/Button'
import { useAppStore } from '@/src/store/appStore'
import type { ICourse } from '@/src/types/course'

interface IProps {
  course: ICourse
}

export const BuyCourseBtn: React.FC<IProps> = ({ course }) => {
  const {
    setIsOpenAuthenticationModal,
    setSelectedCourse,
    setIsOpenConfirmationBuyModal,
    user,
  } = useAppStore()

  const handleBuyCourse = () => {
    if (!localStorage.getItem('user')) {
      setIsOpenAuthenticationModal(true)
    } else {
      if (course.price <= (user?.balance || 0)) {
        setSelectedCourse(course)
        setIsOpenConfirmationBuyModal(true)
      }
    }
  }

  return (
    <Button
      disabled={course.price > (user?.balance || 0)}
      onClick={handleBuyCourse}
    >
      Buy
    </Button>
  )
}
