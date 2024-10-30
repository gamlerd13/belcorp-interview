import React, { InputHTMLAttributes } from 'react'
import { Search } from 'lucide-react'

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  placeholder: string
}

export const SearchInput: React.FC<SearchInputProps> = ({
  label,
  placeholder,
  ...props
}) => (
  <div className="flex flex-col space-y-1">
    {label && (
      <label className="text-sm font-medium text-gray-700">{label}</label>
    )}
    <div className="relative flex items-center">
      <Search className="absolute left-3 text-gray-400" size={16} />
      <input
        type="search"
        className="border border-gray-300 rounded-md pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder={placeholder}
        {...props}
      />
    </div>
  </div>
)
