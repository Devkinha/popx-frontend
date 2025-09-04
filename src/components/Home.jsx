import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      <div className="w-[375px] h-[700px] border border-gray-300 bg-gray-50 flex flex-col justify-between p-6">
        

        <div className="flex flex-col items-center space-y-2 mt-6">
          <div className="w-8 h-8 rounded-full bg-yellow-500 text-white flex items-center justify-center">1</div>
          <div className="w-8 h-8 rounded-full bg-yellow-500 text-white flex items-center justify-center">2</div>
          <div className="w-8 h-8 rounded-full bg-yellow-500 text-white flex items-center justify-center">3</div>
          <div className="w-8 h-8 rounded-full bg-yellow-500 text-white flex items-center justify-center">4</div>
          <div className="w-8 h-8 rounded-full bg-yellow-500 text-white flex items-center justify-center">5</div>
        </div>

        <div className="space-y-4 mb-6">
          <h2 className="text-xl font-bold">Welcome to PopX</h2>
          <p className="text-gray-500 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>

          <button className="w-full py-3 bg-purple-600 text-white rounded-lg font-medium">
            <Link to="/create">Create Account</Link>
          </button>
          <button className="w-full py-3 bg-purple-200 text-purple-700 rounded-lg font-medium">
            <Link to="/login">Already Registered? Login</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home


