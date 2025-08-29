import cn from 'clsx'
interface IButton {
  type?: 'button' | 'submit' | 'reset'
  onClick: (e: React.MouseEvent) => void
  children: React.ReactNode
  className?: string
}

export const Button: React.FC<IButton> = ({
  type = 'button',
  onClick,
  children,
  className,
}) => {
  return (
    <button
      className={cn(
        'block text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-all duration-300',
        className
      )}
      type={type}
      onClick={(e) => onClick(e)}
    >
      {children}
    </button>
  )
}
