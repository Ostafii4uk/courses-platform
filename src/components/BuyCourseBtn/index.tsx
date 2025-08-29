import { Button } from '@/src/components/Button'
import { useAppStore } from '@/src/store/appStore'

interface IProps {
  courseId: string
}

export const BuyCourseBtn: React.FC<IProps> = ({ courseId }) => {
  const {
    setIsOpenAuthenticationModal,
    setPurchasedCoursesIDs,
    purchasedCoursesIDs,
  } = useAppStore()

  const handlePurchase = (courseId: string) => {
    setPurchasedCoursesIDs([...purchasedCoursesIDs, courseId])
  }

  const handleBuyCourse = () => {
    if (!localStorage.getItem('user')) {
      setIsOpenAuthenticationModal(true)
    } else {
      handlePurchase(courseId)
    }
  }

  return <Button onClick={handleBuyCourse}>Buy</Button>
}
