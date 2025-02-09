'use client'

import { Search } from '@mui/icons-material'
import { useState } from 'react'

export default function SearchBox() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative flex items-center">
      {isOpen ? (
        <div className="flex items-center bg-gray-100 rounded-lg overflow-hidden animate-slideIn">
          <input
            type="text"
            placeholder="Search..."
            className="w-64 px-4 py-2 text-gray-700 bg-transparent outline-none"
            autoFocus
            onBlur={() => setTimeout(() => setIsOpen(false), 200)}
          />
          <Search className="mx-2 text-gray-500" />
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <Search className="text-gray-700" />
        </button>
      )}
    </div>
  )
} 