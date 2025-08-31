import { Button } from '@/src/components/Button'
import { useAppStore } from '@/src/store/appStore'
import type { ICourse } from '@/src/types/course'

interface IProps {
  course: ICourse
}

export const BuyCourseBtn: React.FC<IProps> = ({ course }) => {
  const {
    setIsOpenAuthenticationModal,
    setPurchasedCourses,
    purchasedCourses,
  } = useAppStore()

  const handlePurchase = (course: ICourse) => {
    setPurchasedCourses([...purchasedCourses, course])
    localStorage.setItem(
      'purchasedCourses',
      JSON.stringify([...purchasedCourses, course])
    )
  }

  const handleBuyCourse = () => {
    if (!localStorage.getItem('user')) {
      setIsOpenAuthenticationModal(true)
    } else {
      handlePurchase(course)
    }
  }

  return <Button onClick={handleBuyCourse}>Buy</Button>
}
