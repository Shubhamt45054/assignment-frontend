import React, { useState, useEffect } from 'react'
import { toast } from 'react-hot-toast'
import axios from 'axios'

const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchFeedbacks = async () => {
    setLoading(true)
    try {
      const response = await axios.get('http://localhost:5000/api/feedback/feedbacks')
      console.log('Response data:', response.data)
      
      if (Array.isArray(response.data)) {
        setFeedbacks(response.data)
        toast.success('Feedbacks loaded successfully!')
      } else {
        const feedbackData = response.data.data || response.data
        setFeedbacks(Array.isArray(feedbackData) ? feedbackData : [feedbackData])
        toast.success('Feedbacks loaded successfully!')
      }
    } catch (error) {
      toast.error('Error loading feedbacks')
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchFeedbacks()
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Submitted Feedbacks</h2>
          {loading && (
            <div className="mt-4">
              <svg className="animate-spin h-8 w-8 text-indigo-600 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
          )}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {feedbacks.map((feedback) => (

            <div
              key={feedback._id}
              className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <div className="px-4 py-5 sm:p-6">

                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{feedback.fullname}</h3>
                    <p className="text-sm text-indigo-600">{feedback.email}</p>
                  </div>
                </div>
                
                <div className="mt-4">
                  <p className="text-gray-600">{feedback.message}</p>
                </div>
                <div className="mt-4">
                  <p className="text-xs text-gray-500">
                    Submitted on {new Date(feedback.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>

            </div>

          ))}
        </div>
      </div>
    </div>
  )
}

export default FeedbackList
