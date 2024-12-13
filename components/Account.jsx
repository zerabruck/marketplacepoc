import React, { useState } from "react";
import { FaBuilding, FaUser, FaIdCard, FaCalendar, FaHandshake, FaUsers, FaGlobe, FaMapMarkedAlt, FaCity, FaMapPin, FaRegFlag, FaMailBulk, FaPhone, FaTags } from "react-icons/fa";

const CompanyProfile = () => {
  const initialData = {
    companyName: "Mereb",
    managerName: "Samuel Mussie",
    crNumber: "0000",
    activeSince: "2021",
    affiliatedWith: "Seeking Partnership",
    numberOfEmployees: "5-15",
    website: "LinkedIn",
    country: "Ethiopia",
    city: "Addis Ababa",
    address: "Kotebe",
    stateRegion: "",
    zipCode: "1000",
    phoneNumber: "0972249571",
    categories: [
      "IT Services",
      "Database Administration",
      "DevOps Engineering",
      "Information Security",
      "Network Administration",
      "Solutions Architecture",
      "Software"
    ]
  };

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(initialData);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCategoryToggle = (category) => {
    setFormData((prev) => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter((c) => c !== category)
        : [...prev.categories, category]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const availableCategories = [
    "IT Services",
    "Database Administration",
    "DevOps Engineering",
    "Information Security",
    "Network Administration",
    "Solutions Architecture",
    "Software"
  ];

  const InputField = ({ icon: Icon, label, name, value, type = "text" }) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <div className="relative">
        <span className="absolute left-3 top-3 text-gray-400">
          <Icon />
        </span>
        {isEditing ? (
          <input
            type={type}
            name={name}
            value={value}
            onChange={handleInputChange}
            className="pl-10 w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        ) : (
          <div className="pl-10 p-2 bg-gray-50 rounded-md">{value}</div>
        )}
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Company Profile</h1>
          {!isEditing && (
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              Edit Profile
            </button>
          )}
        </div>

        {showSuccess && (
          <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-md">
            Profile updated successfully!
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              icon={FaBuilding}
              label="Company Name"
              name="companyName"
              value={formData.companyName}
            />
            <InputField
              icon={FaUser}
              label="Manager Name"
              name="managerName"
              value={formData.managerName}
            />
            <InputField
              icon={FaIdCard}
              label="CR Number"
              name="crNumber"
              value={formData.crNumber}
            />
            <InputField
              icon={FaCalendar}
              label="Active Since"
              name="activeSince"
              value={formData.activeSince}
            />
            <InputField
              icon={FaHandshake}
              label="Affiliated With"
              name="affiliatedWith"
              value={formData.affiliatedWith}
            />
            <InputField
              icon={FaUsers}
              label="Number of Employees"
              name="numberOfEmployees"
              value={formData.numberOfEmployees}
            />
            <InputField
              icon={FaGlobe}
              label="Website"
              name="website"
              value={formData.website}
            />
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Address Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                icon={FaMapMarkedAlt}
                label="Country"
                name="country"
                value={formData.country}
              />
              <InputField
                icon={FaCity}
                label="City"
                name="city"
                value={formData.city}
              />
              <InputField
                icon={FaMapPin}
                label="Address"
                name="address"
                value={formData.address}
              />
              <InputField
                icon={FaRegFlag}
                label="State/Province/Region"
                name="stateRegion"
                value={formData.stateRegion}
              />
              <InputField
                icon={FaMailBulk}
                label="Zip/Postal Code"
                name="zipCode"
                value={formData.zipCode}
              />
              <InputField
                icon={FaPhone}
                label="Phone Number"
                name="phoneNumber"
                value={formData.phoneNumber}
              />
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">
              <FaTags className="inline mr-2" />
              Categories & Specialties
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {availableCategories.map((category) => (
                <div key={category} className="flex items-center">
                  {isEditing ? (
                    <input
                      type="checkbox"
                      checked={formData.categories.includes(category)}
                      onChange={() => handleCategoryToggle(category)}
                      className="mr-2"
                    />
                  ) : (
                    <div
                      className={`w-3 h-3 rounded-full mr-2 ${
                        formData.categories.includes(category)
                          ? "bg-blue-500"
                          : "bg-gray-300"
                      }`}
                    />
                  )}
                  <span>{category}</span>
                </div>
              ))}
            </div>
          </div>

          {isEditing && (
            <div className="mt-8 flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => {
                  setFormData(initialData);
                  setIsEditing(false);
                }}
                className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
              >
                Save Changes
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default CompanyProfile;