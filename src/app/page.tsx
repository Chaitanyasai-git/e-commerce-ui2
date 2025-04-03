'use client'

import { useState } from 'react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-gray-800">
                MyStore
              </span>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center sm:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              >
                <span className="sr-only">Open main menu</span>
                {/* Menu icon */}
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            {/* Desktop menu */}
            <div className="hidden sm:flex sm:items-center sm:space-x-8">
              <span className="text-gray-600 hover:text-gray-900 cursor-pointer">
                Products
              </span>
              <span className="text-gray-600 hover:text-gray-900 cursor-pointer">
                Cart
              </span>
              <span className="text-gray-600 hover:text-gray-900 cursor-pointer">
                Account
              </span>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <span className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 cursor-pointer">
                Products
              </span>
              <span className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 cursor-pointer">
                Cart
              </span>
              <span className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 cursor-pointer">
                Account
              </span>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to MyStore
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Discover our amazing products at great prices
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
          Shop Now
        </button>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Add featured product cards here */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-gray-300">
                Your trusted source for quality products and excellent service.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <span className="text-gray-300 hover:text-white cursor-pointer">
                    About
                  </span>
                </li>
                <li>
                  <span className="text-gray-300 hover:text-white cursor-pointer">
                    Contact
                  </span>
                </li>
                <li>
                  <span className="text-gray-300 hover:text-white cursor-pointer">
                    FAQ
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <p className="text-gray-300">
                Email: info@mystore.com
                <br />
                Phone: (555) 123-4567
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-300">
              © {new Date().getFullYear()} MyStore. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}

