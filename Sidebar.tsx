'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, BookOpen, Briefcase, User, Settings, LogOut, Bell } from 'lucide-react'

const menuItems = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'Copetencies', path: '/copetencies', icon: BookOpen },
  { name: 'Profession', path: '/Profession', icon: Briefcase },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Logo & School Info */}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="font-bold">SE</span>
          </div>
          <div>
            <h1 className="text-lg font-bold">SMK Telkom</h1>
            <p className="text-xs text-gray-400">Malang</p>
          </div>
        </div>
        <p className="text-sm text-gray-300 mt-4">Software Engineering Department</p>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 px-4">
        <div className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.path

            return (
              <Link
                key={item.name}
                href={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'hover:bg-gray-800 text-gray-300'
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{item.name}</span>
                {item.name === 'Notifications' && (
                  <span className="ml-auto bg-red-500 text-xs px-2 py-1 rounded-full">3</span>
                )}
              </Link>
            )
          })}
        </div>
      </nav>

      {/* Bottom Section */}
      <div className="p-4 border-t border-gray-700">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-600 rounded-full"></div>
          <div>
            <p className="text-sm font-medium">Student Name</p>
            <p className="text-xs text-gray-400">XI RPL 5</p>
          </div>
        </div>
      </div>
    </div>
  )
}