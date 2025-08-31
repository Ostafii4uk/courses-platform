import { useAppStore } from '@/src/store/appStore'
import cn from 'clsx'
import { Button } from '@/src/components/Button'

export const ConfirmationBuyModal = () => {
  const {
    isOpenConfirmationBuyModal,
    setIsOpenConfirmationBuyModal,
    selectedCourse,
    setPurchasedCourses,
    purchasedCourses,
    user,
    setUser,
  } = useAppStore()

  const handleModalClose = () => {
    setIsOpenConfirmationBuyModal(false)
  }

  const handlePurchase = () => {
    if (selectedCourse && user) {
      const updatedUser = {
        ...user,
        balance: user.balance - selectedCourse.price,
      }
      localStorage.setItem('user', JSON.stringify(updatedUser))
      setUser(updatedUser)
      setPurchasedCourses([...purchasedCourses, selectedCourse])
      localStorage.setItem(
        'purchasedCourses',
        JSON.stringify([...purchasedCourses, selectedCourse])
      )
    }
    handleModalClose()
  }

  if (!isOpenConfirmationBuyModal) {
    return null
  }

  return (
    <div
      className={cn(
        'overflow-y-auto fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-screen max-h-full bg-black/55 dark:bg-black/85',
        isOpenConfirmationBuyModal ? 'flex' : 'hidden overflow-x-hidden'
      )}
    >
      <section>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Confirm buying
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
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white text-center">
                {selectedCourse?.title}
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-center">
                {selectedCourse?.description}
              </p>
              <div className="flex gap-2">
                <Button onClick={handlePurchase} className="w-full">
                  Buy
                </Button>
                <Button
                  onClick={handleModalClose}
                  className="bg-gray-500 hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-700 w-full"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
