import React, { ButtonHTMLAttributes, FC } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '../utils/cn'
import { Loader2 } from 'lucide-react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ElementType
  isLoading?: boolean
  label: string
}

const CustomButton: FC<ButtonProps> = ({
  icon: Icon,
  isLoading = false,
  label,
  onClick,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'inline-flex items-center space-x-2 px-4 py-2 border border-transparent rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
        isLoading ? 'opacity-75 cursor-not-allowed' : ''
      )}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <Loader2 className="animate-spin" size={18} />
      ) : (
        Icon && (
          <Slot className="mr-2">
            <Icon size={18} />
          </Slot>
        )
      )}
      <span>{label}</span>
    </button>
  )
}

export default CustomButton
