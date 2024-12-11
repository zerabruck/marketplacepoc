import React, { useState } from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaDollarSign, FaUpload } from "react-icons/fa";
import OpportunityForm from "./OpportunityForm";

const OpportunityCards = () => {
  const [showForm, setShowForm] = useState(false);

  const opportunities = [
    {
      id: 1,
      title: "Software Development Project",
      type: "Technology",
      country: "United States",
      budget: "$50,000",
      closingDate: "2024-03-31",
      description: "Looking for experienced developers to build a scalable web application using modern technologies and best practices."
    },
    {
      id: 2,
      title: "Marketing Campaign Management",
      type: "Marketing",
      country: "United Kingdom",
      budget: "$25,000",
      closingDate: "2024-04-15",
      description: "Seeking a marketing agency to develop and execute a comprehensive digital marketing campaign for our new product launch."
    },
    {
      id: 3,
      title: "UI/UX Design Project",
      type: "Design",
      country: "Canada",
      budget: "$35,000",
      closingDate: "2024-04-01",
      description: "Need a skilled UI/UX designer to redesign our mobile application interface and improve user experience."
    }
  ];

  const getTypeColor = (type) => {
    const colors = {
      Technology: "bg-blue-100 text-blue-800",
      Marketing: "bg-green-100 text-green-800",
      Design: "bg-purple-100 text-purple-800",
      default: "bg-gray-100 text-gray-800"
    };
    return colors[type] || colors.default;
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };



  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Listed Opportunities</h2>
        <button 
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
        >
          Create
        </button>
      </div>

      {showForm ? (
        <OpportunityForm />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {opportunities.map((opportunity) => (
            <div
              key={opportunity.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {opportunity.title}
                  </h3>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(
                      opportunity.type
                    )}`}
                  >
                    {opportunity.type}
                  </span>
                </div>
                
                <div className="flex items-center text-gray-600 mb-3">
                  <FaMapMarkerAlt className="mr-2" />
                  <span>{opportunity.country}</span>
                </div>

                <div className="flex items-center text-gray-600 mb-3">
                  <FaDollarSign className="mr-2" />
                  <span className="font-medium">{opportunity.budget}</span>
                </div>

                <div className="flex items-center text-gray-600 mb-4">
                  <FaCalendarAlt className="mr-2" />
                  <span>Closes on {formatDate(opportunity.closingDate)}</span>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {opportunity.description}
                </p>

                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OpportunityCards;
