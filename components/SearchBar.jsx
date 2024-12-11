"use client";
import React, { useState } from "react";
import {FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [searchFilters, setSearchFilters] = useState({
    keyword: "",
    seekingPartnership: false,
    seekingFinancing: false,
    category: "",
    country: "",
    providerTypes: [],
    companySize: ""
  });

  const categories = ["Technology", "Marketing", "Design", "Finance", "Healthcare", "Education"];
  const countries = ["United States", "United Kingdom", "Canada", "Australia", "Germany", "France"];
  const providerTypes = ["Consultant", "Agency", "Freelancer", "Corporation", "Startup"];
  const companySizes = ["1-10", "11-50", "51-200", "201-500", "500+"];

  const handleProviderTypeChange = (type) => {
    setSearchFilters(prev => ({
      ...prev,
      providerTypes: prev.providerTypes.includes(type)
        ? prev.providerTypes.filter(t => t !== type)
        : [...prev.providerTypes, type]
    }));
  };

 
  return (
    <div className="container mx-auto px-4 py-1">
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Keyword Search */}
        <div className="col-span-full">
          <div className="relative">
            <input
              type="text"
              placeholder="Enter Keywords"
              className="w-full p-3 pr-10 border rounded-lg"
              value={searchFilters.keyword}
              onChange={(e) => setSearchFilters({...searchFilters, keyword: e.target.value})}
            />
            <FaSearch className="absolute right-3 top-3.5 text-gray-400" />
          </div>
        </div>

        {/* Partnership and Financing */}
        <div className="flex space-x-4">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={searchFilters.seekingPartnership}
              onChange={(e) => setSearchFilters({...searchFilters, seekingPartnership: e.target.checked})}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span>Seeking Partnership</span>
          </label>
        </div>

        <div className="flex space-x-4">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={searchFilters.seekingFinancing}
              onChange={(e) => setSearchFilters({...searchFilters, seekingFinancing: e.target.checked})}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span>Seeking Financing</span>
          </label>
        </div>

        {/* Categories Dropdown */}
        <div>
          <select
            className="w-full p-2 border rounded-lg"
            value={searchFilters.category}
            onChange={(e) => setSearchFilters({...searchFilters, category: e.target.value})}
          >
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        {/* Country Dropdown */}
        <div>
          <select
            className="w-full p-2 border rounded-lg"
            value={searchFilters.country}
            onChange={(e) => setSearchFilters({...searchFilters, country: e.target.value})}
          >
            <option value="">Select Country</option>
            {countries.map((country) => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
        </div>

        {/* Company Size Dropdown */}
        <div>
          <select
            className="w-full p-2 border rounded-lg"
            value={searchFilters.companySize}
            onChange={(e) => setSearchFilters({...searchFilters, companySize: e.target.value})}
          >
            <option value="">Select Company Size</option>
            {companySizes.map((size) => (
              <option key={size} value={size}>{size} employees</option>
            ))}
          </select>
        </div>

        {/* Provider Types Multi-select */}
        <div className="col-span-full">
          <p className="mb-2 font-medium">Provider Types</p>
          <div className="flex flex-wrap gap-4">
            {providerTypes.map((type) => (
              <label key={type} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={searchFilters.providerTypes.includes(type)}
                  onChange={() => handleProviderTypeChange(type)}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span>{type}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SearchBar;