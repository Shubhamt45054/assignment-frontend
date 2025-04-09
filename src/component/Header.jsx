import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path;
  }

  return (
    <nav className="bg-white shadow-lg">

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold text-indigo-600">
                <img src="/form.png" alt="Form" className="h-8 w-8 block sm:hidden" />
                <span className="hidden sm:block">Feedback</span>
              </Link>
            </div>

            <div className="ml-6 flex space-x-8">
              <Link
                to="/"
                className={`${
                  isActive('/')
                    ? 'border-indigo-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                Feedback Form
              </Link>

              <Link
                to="/admin"
                className={`${
                  isActive('/admin')
                    ? 'border-indigo-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                Feedback List
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
