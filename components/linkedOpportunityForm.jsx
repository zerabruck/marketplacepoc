import React, { useState } from "react";
import { FaUpload } from "react-icons/fa";

const LinkedOpportunityForm = () => {
    return (
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Link New Opportunity</h2>
        
        {/* Opportunity Details Section */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Opportunity Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
              <label className="block text-gray-700 mb-2">Opportunity Link*</label>
              <input type="text" className="w-full p-2 border rounded-md" />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Opportunity Title*</label>
              <input type="text" className="w-full p-2 border rounded-md" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700 mb-2">Opportunity Description*</label>
              <textarea className="w-full p-2 border rounded-md" rows="4"></textarea>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Opportunity's Category*</label>
              <input type="text" className="w-full p-2 border rounded-md" />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Budget*</label>
              <select className="w-full p-2 border rounded-md">
                <option value="10000">$10,000</option>
                <option value="25000">$25,000</option>
                <option value="50000">$50,000</option>
                <option value="100000">$100,000+</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Opportunity Closing Date*</label>
              <input type="date" className="w-full p-2 border rounded-md" />
            </div>
           
          </div>
        </div>

        {/* Show Opportunity Only To Section */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Show Opportunity Only To</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2">Categories</label>
              <input type="text" className="w-full p-2 border rounded-md" />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Employees Number</label>
              <input type="number" className="w-full p-2 border rounded-md" />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Provider Type</label>
              <input type="text" className="w-full p-2 border rounded-md" />
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300">
            Save
          </button>
        </div>
      </div>
    );
  };

  export default LinkedOpportunityForm;