import React from "react";
import { FaCamera } from "react-icons/fa";

const AccountSettings = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-[375px] h-[700px] border border-gray-300 bg-gray-50 flex flex-col">
        
        <div className="px-6 py-4 border-b">
          <h2 className="text-lg font-medium">Account Settings</h2>
        </div>

        <div className="px-6 py-4 flex space-x-4">
          <div className="relative">
            <img
              src="https://i.pravatar.cc/100"
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="absolute bottom-0 right-0 bg-purple-600 w-6 h-6 flex items-center justify-center rounded-full text-white text-xs cursor-pointer">
              <FaCamera />
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Marry Doe</h3>
            <p className="text-gray-600 text-sm">Marry@Gmail.Com</p>
          </div>
        </div>


        <div className="px-6">
          <p className="text-sm text-gray-700">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
        </div>

        <div className="mt-4 border-t border-dashed"></div>
      </div>
    </div>
  );
};

export default AccountSettings;
