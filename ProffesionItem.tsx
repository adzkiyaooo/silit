'use client'

import { useState } from 'react'
import { Heart } from 'lucide-react'
import Link from 'next/link'
import type { Profession } from '../data/profession' // gunakan 'type' untuk import type

interface ProfessionItemProps {
  profession: Profession
}

export default function ProfessionItem({ profession }: ProfessionItemProps) {
  const [isLiked, setIsLiked] = useState(false)

  const formatSalary = (amount: number) => {
    if (amount >= 1000000) {
      return `${(amount / 1000000).toFixed(0)}JT`
    }
    return amount.toLocaleString('id-ID')
  }

  return (
    <div className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="flex justify-between items-start mb-4">
        <Link 
          href={`/profession/${profession.id}`}
          className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors"
        >
          {profession.title}
        </Link>
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label={isLiked ? 'Unlike profession' : 'Like profession'}
        >
          <Heart 
            size={20} 
            className={isLiked ? 'fill-red-500 text-red-500' : 'text-gray-400'} 
          />
        </button>
      </div>

      <div className="mb-4">
        <div className="text-lg font-semibold text-green-600">
          {profession.salaryRange.currency === 'IDR/month' ? 'Rp' : '$'}
          {formatSalary(profession.salaryRange.min)} - {formatSalary(profession.salaryRange.max)}
          <span className="text-sm text-gray-500 ml-1">/month</span>
        </div>
      </div>

      <p className="text-gray-600 mb-6 line-clamp-3">{profession.description}</p>

      <div className="flex items-center justify-between">
        <Link
          href={`/profession/${profession.id}`}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          View Details
        </Link>
        <span className="text-sm text-gray-500">#{profession.id}</span>
      </div>
    </div>
  )
}