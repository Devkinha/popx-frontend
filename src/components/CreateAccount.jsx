import React from "react";
import { Link } from "react-router-dom";

const CreateAccount = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      <div className="w-[375px] h-[700px] border border-gray-300 bg-gray-50 p-6 flex flex-col">
        

        <h2 className="text-2xl font-bold mb-2">Create your PopX account</h2>


        <form className="space-y-4 flex-1 overflow-y-auto">

          <div>
            <label className="block text-sm text-purple-600 font-medium mb-1">
              Full Name*
            </label>
            <input
              type="text"
              placeholder="Marry Doe"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-600"
            />
          </div>


          <div>
            <label className="block text-sm text-purple-600 font-medium mb-1">
              Phone number*
            </label>
            <input
              type="text"
              placeholder="Marry Doe"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-600"
            />
          </div>


          <div>
            <label className="block text-sm text-purple-600 font-medium mb-1">
              Email address*
            </label>
            <input
              type="email"
              placeholder="Marry Doe"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-600"
            />
          </div>


          <div>
            <label className="block text-sm text-purple-600 font-medium mb-1">
              Password*
            </label>
            <input
              type="password"
              placeholder="Marry Doe"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-600"
            />
          </div>


          <div>
            <label className="block text-sm text-purple-600 font-medium mb-1">
              Company name
            </label>
            <input
              type="text"
              placeholder="Marry Doe"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-600"
            />
          </div>


          <div>
            <p className="text-sm text-gray-600 font-medium mb-2">
              Are you an Agency?*
            </p>
            <div className="flex items-center space-x-6">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="agency"
                  className="text-purple-600 focus:ring-purple-600"
                  defaultChecked
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="agency"
                  className="text-purple-600 focus:ring-purple-600"
                />
                <span>No</span>
              </label>
            </div>
          </div>
        </form>

        <button className="w-full py-3 mt-6 bg-purple-600 text-white rounded-lg font-medium">
          <Link to="/account">Create Account</Link>
        </button>
      </div>
    </div>
  );
};

export default CreateAccount;
