import cn from 'clsx'
interface IButton {
  type?: 'button' | 'submit' | 'reset'
  onClick: (e: React.MouseEvent) => void
  children: React.ReactNode
  className?: string
  disabled?: boolean
}

export const Button: React.FC<IButton> = ({
  type = 'button',
  onClick,
  children,
  disabled,
  className,
}) => {
  return (
    <button
      className={cn(
        'block text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-all duration-300 disabled:!opacity-50 disabled:!cursor-not-allowed disabled:!bg-gray-400',
        className
      )}
      type={type}
      onClick={(e) => onClick(e)}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
