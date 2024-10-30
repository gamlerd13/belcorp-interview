import React, { InputHTMLAttributes } from 'react'
import { Search } from 'lucide-react'

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  placeholder: string
  value: string
  onChangeValue: (value: string) => void
}

export const SearchInputQuery: React.FC<SearchInputProps> = ({
  label,
  placeholder,
  value,
  onChangeValue,
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
        value={value}
        onChange={(e) => onChangeValue(e.target.value)}
        className="border border-gray-300 rounded-md pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder={placeholder}
        {...props}
      />
    </div>
  </div>
)
