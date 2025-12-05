'use client'

import { useState } from 'react'

interface SkillItemProps {
  id: number
  name: string
  description: string
  initialRating: number
  onRatingChange: (id: number, rating: number) => void
}

export default function SkillItem({ id, name, description, initialRating, onRatingChange }: SkillItemProps) {
  const [rating, setRating] = useState(initialRating)

  const getCategory = (rating: number) => {
    if (rating >= 9) return { label: 'Master', color: 'text-green-600', bg: 'bg-green-100' }
    if (rating >= 7) return { label: 'Expert', color: 'text-blue-600', bg: 'bg-blue-100' }
    if (rating >= 4) return { label: 'Competent', color: 'text-yellow-600', bg: 'bg-yellow-100' }
    return { label: 'Beginner', color: 'text-red-600', bg: 'bg-red-100' }
  }

  const handleRatingChange = (newRating: number) => {
    setRating(newRating)
    onRatingChange(id, newRating)
  }

  const category = getCategory(rating)

  return (
    <div className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-gray-800">{name}</h3>
        <div className={`px-3 py-1 rounded-full text-sm font-semibold ${category.bg} ${category.color}`}>
          {category.label}
        </div>
      </div>

      <p className="text-gray-600 mb-6">{description}</p>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="font-medium text-gray-700">Self-Assessment:</span>
          <span className="text-2xl font-bold text-blue-600">{rating}/10</span>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-500">
            <span>Beginner</span>
            <span>Master</span>
          </div>
          <div className="flex gap-1">
            {[...Array(10)].map((_, index) => (
              <button
                key={index}
                onClick={() => handleRatingChange(index + 1)}
                className={`flex-1 h-3 rounded-full transition-colors ${
                  index + 1 <= rating ? 'bg-blue-500' : 'bg-gray-200'
                }`}
                aria-label={`Set rating to ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-between mt-4">
          {[1, 4, 7, 9].map((value) => (
            <button
              key={value}
              onClick={() => handleRatingChange(value)}
              className={`px-3 py-1 text-sm rounded ${
                rating === value 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Set {value}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}