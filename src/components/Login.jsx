import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      <div className="w-[375px] h-[700px] border border-gray-300 bg-gray-50 p-6 flex flex-col">
        

        <h2 className="text-2xl font-bold mb-2">Signin to your PopX account</h2>
        <p className="text-gray-500 text-sm mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>


        <form className="space-y-4">

          <div>
            <label className="block text-sm text-purple-600 font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-600"
            />
          </div>


          <div>
            <label className="block text-sm text-purple-600 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-600"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gray-300 text-white font-medium rounded-md cursor-not-allowed"
            disabled
          >
            <Link to="/account">Login</Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
