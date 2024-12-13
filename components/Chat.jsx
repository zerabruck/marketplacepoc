import React, { useState } from "react";
import { FiSend, FiEdit2, FiDownload, FiX, FiPlus, FiSearch } from "react-icons/fi";
import { FaCalendarAlt, FaDollarSign } from "react-icons/fa";

const ChatApplication = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "Dave lee",
      content: "Hey, how are you?",
      timestamp: "10:30 AM",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    },
    {
      id: 2,
      sender: "Tech Solutions Inc",
      avatar: "https://images.unsplash.com/photo-1570126618953-d437176e8c79?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: "I'm good! How about you?",
      timestamp: "10:31 AM",
    }
  ]);

  const [proposals, setProposals] = useState([
    {
      id: 1,
      title: "Project Proposal",
      description: "This is a sample project proposal for discussion.",
      sender: "Dave lee",
      timestamp: "10:35 AM"
    }
  ]);

  const [newMessage, setNewMessage] = useState("");
  const [showProposalModal, setShowProposalModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const [newProposal, setNewProposal] = useState({
    title: "",
    description: "",
    budget: "",
    openingDate: "",
    closingDate: ""
  });

  const [activeUsers] = useState([
    {
      id: 1,
      name: "FinTech Solutions Ltd.",
      avatar: "https://images.unsplash.com/photo-1709884735626-63e92727d8b6?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      status: "online"
    },
    {
      id: 2,
      name: "Tech Solutions Inc",
      avatar: "https://images.unsplash.com/photo-1570126618953-d437176e8c79?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      status: "online"
    }
  ]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const newMsg = {
        id: messages.length + 1,
        isProposal:false,
        sender: "Dave lee",
        content: newMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
      };
      setMessages([...messages, newMsg]);
      setNewMessage("");
    }
  };

  const handleEditProposal = (id) => {
    console.log("Editing proposal:", id);
  };

  const handleDownloadProposal = (id) => {
    console.log("Downloading proposal:", id);
  };
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };

  const handleCreateProposal = (e) => {
    e.preventDefault();
    if (newProposal.title && newProposal.description) {
      const proposal = {
        id: proposals.length + 1,
        ...newProposal,
        sender: "Dave lee",
        isProposal:true,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      };
      setMessages([...messages, proposal]);
      // setNewMessage("");
      console.log("New Messages:", messages);
      console.log("New Proposal:", proposal);
      setNewProposal({ title: "", description: "", budget: "", openingDate: "", closingDate: "" });
      setShowProposalModal(false);
    }
  };

  return (
    <div className="flex w-full h-screen bg-white ">
      {/* Sidebar */}
      <div className="w-64  border-r border-gray-200 p-4">
        {/* <h2 className="text-xl font-bold mb-4">Active Chats</h2> */}
        <div className="mb-4">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search chats..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 bg-white py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="space-y-4">
          {activeUsers.map((user) => (
            <div key={user.id} className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
              <div className="relative">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-10 h-10 rounded-full bg-blue-500"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80";
                  }}
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></span>
              </div>
              <div>
                <p className="font-medium">{user.name}</p>
                <p className="text-sm text-gray-500">{user.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col justify-between">
      {!showProposalModal  ?

        <div className="flex flex-col justify-between h-[100vh]">
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            
              message.isProposal ? 
              <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">Offer</h3>
              
            </div>
              <div key={message.id} className="border rounded-lg p-4 space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold">{message.title}</h4>
                  <div className="flex items-center text-gray-600 mb-3">
                  <FaDollarSign className="mr-2" />
                  <span className="font-medium">{message.budget}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <FaCalendarAlt className="mr-2" />
                  <span>Opens on {formatDate(message.openingDate)}</span>
                </div>

                <div className="flex items-center text-gray-600 mb-4">
                  <FaCalendarAlt className="mr-2" />
                  <span>Closes on {formatDate(message.closingDate)}</span>
                </div>
                  <p className="text-gray-600">{message.description}</p>
                  <p className="text-sm text-gray-500">
                    {message.sender} - {message.timestamp}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEditProposal(message.id)}
                    className="p-2 text-gray-600 hover:bg-gray-100 rounded-full"
                  >
                    <FiEdit2 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleDownloadProposal(message.id)}
                    className="p-2 text-gray-600 hover:bg-gray-100 rounded-full"
                  >
                    <FiDownload className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div> 
            </div>
            :
            <div
              key={message.id}
              className={`flex items-start space-x-2 ${message.sender === "Dave lee" ? "flex-row-reverse space-x-reverse" : ""}`}
            >
              <img
                src={message.avatar}
                alt={message.sender}
                className="w-8 h-8 rounded-full bg-black"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80";
                }}
              />
              <div
                className={`max-w-md p-3 rounded-lg ${message.sender === "Dave lee" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
              >
                <p className="font-medium text-sm">{message.sender}</p>
                <p>{message.content}</p>
                <p className="text-xs mt-1 opacity-75">{message.timestamp}</p>
              </div>
            </div>
            
          ))}

          
        </div>
        <form onSubmit={handleSendMessage} className="p-4 sticky bottom-0 bg-white border-t">
          <div className="flex space-x-4">
          <button
                onClick={() => setShowProposalModal(true)}
                className="p-2 text-blue-500 hover:bg-blue-50 rounded-full"
              >
                <FiPlus className="w-5 h-5" />
              </button>
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 p-2 border bg-inherit  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <FiSend className="w-5 h-5" />
            </button>
          </div>
        </form>
        </div>:
         
        <div className=" inset-0 w-full ml-auto  bg-opacity-100 bg-gray-100 flex items-center justify-center p-4">
          <div className=" shadow-md bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Create New Offer</h3>
              <button
                onClick={() => setShowProposalModal(false)}
                className="p-2 text-gray-500 hover:bg-gray-100 rounded-full"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleCreateProposal} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input
                  type="text"
                  value={newProposal.title}
                  onChange={(e) => setNewProposal({ ...newProposal, title: e.target.value })}
                  className="w-full p-2 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
              <label className="block text-gray-700 mb-2">Budget*</label>
              <select 
              defaultValue=''
              value={newProposal.budget}
                  onChange={(e) => setNewProposal({ ...newProposal, budget: e.target.value })}
                  className="w-full p-2 border rounded-md">
                <option value="10000">$10,000</option>
                <option value="25000">$25,000</option>
                <option value="50000">$50,000</option>
                <option value="100000">$100,000+</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Opening Date*</label>
              <input 
              type="date"
              value={newProposal.openingDate}
              onChange={(e) => setNewProposal({ ...newProposal, openingDate: e.target.value })}
               className="w-full p-2 border rounded-md" />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Closing Date*</label>
              <input 
              type="date"
              value={newProposal.closingDate}
              onChange={(e) => setNewProposal({ ...newProposal, closingDate: e.target.value })}
              className="w-full p-2 border rounded-md" />
            </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  value={newProposal.description}
                  onChange={(e) => setNewProposal({ ...newProposal, description: e.target.value })}
                  className="w-full bg-white p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                  required
                ></textarea>
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setShowProposalModal(false)}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Create Offer
                </button>
              </div>
            </form>
          </div>
        </div>
      }
      </div>
     
    </div>
  );
};

export default ChatApplication;
