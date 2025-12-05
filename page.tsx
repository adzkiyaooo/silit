'use client'

import { useState } from 'react'
import SkillItem from '@/components/SkillItem'

const initialSkills = [
  {
    id: 1,
    name: 'Programming',
    description: 'Mastering programming languages like JavaScript, TypeScript, Python for software development.',
    initialRating: 8,
  },
  {
    id: 2,
    name: 'Algorithms',
    description: 'Understanding data structures, algorithms, and problem-solving techniques.',
    initialRating: 5,
  },
  {
    id: 3,
    name: 'Databases',
    description: 'Designing and managing databases using SQL, NoSQL, and database optimization.',
    initialRating: 9,
  },
  {
    id: 4,
    name: 'UI/UX',
    description: 'Creating user-friendly interfaces and optimal user experiences with design thinking.',
    initialRating: 10,
  },
  {
    id: 5,
    name: 'Software Testing',
    description: 'Implementing testing strategies, unit tests, and quality assurance processes.',
    initialRating: 6,
  },
  {
    id: 6,
    name: 'Version Control',
    description: 'Using Git and GitHub for collaborative development and version management.',
    initialRating: 7,
  },
]

export default function CompetenciesPage() {
  const [skills, setSkills] = useState(initialSkills)

  const updateRating = (id: number, newRating: number) => {
    setSkills(skills.map(skill => 
      skill.id === id ? { ...skill, initialRating: newRating } : skill
    ))
  }

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-6 rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold mb-2">Competencies</h1>
        <p className="text-lg">Skills you will master in Software Engineering Department</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {skills.map((skill) => (
          <SkillItem
            key={skill.id}
            id={skill.id}
            name={skill.name}
            description={skill.description}
            initialRating={skill.initialRating}
            onRatingChange={updateRating}
          />
        ))}
      </div>

      <div className="mt-8 p-6 bg-gray-50 rounded-xl">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Skill Categories Legend</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <h4 className="font-bold text-red-700">Beginner</h4>
            <p className="text-sm text-red-600">Rating: 1-3</p>
          </div>
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h4 className="font-bold text-yellow-700">Competent</h4>
            <p className="text-sm text-yellow-600">Rating: 4-6</p>
          </div>
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="font-bold text-blue-700">Expert</h4>
            <p className="text-sm text-blue-600">Rating: 7-8</p>
          </div>
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <h4 className="font-bold text-green-700">Master</h4>
            <p className="text-sm text-green-600">Rating: 9-10</p>
          </div>
        </div>
      </div>
    </div>
  )
}