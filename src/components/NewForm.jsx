/* eslint-disable react/prop-types */
import { useState } from 'react';

const NewForm = ({setAddBroker}) => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    broker: '',
    loginId: '',
    apiKey: '',
    secretKey: '',
    accountTag: '',
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    setFormData({
        broker: '',
        loginId: '',
        apiKey: '',
        secretKey: '',
        accountTag: '',
      })
  };

  return (
    <>
      <div className="w-full md:w-1/3 bg-white shadow-lg rounded-lg p-6 z-10">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Add broker API details
        </h2>
        <p className="text-red-500 text-sm mb-6 text-center">
          Please DO NOT enter your account password in below form.
        </p>
        <form onSubmit={handleSubmit}>
          {/* Select Broker */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Select broker
            </label>
            <select
              name="broker"
              value={formData.broker}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
            >
              <option value="">Select broker</option>
              <option value="broker1">Broker 1</option>
              <option value="broker2">Broker 2</option>
            </select>
          </div>

          {/* Broker Login ID */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Broker Login Id
            </label>
            <input
              type="text"
              name="loginId"
              value={formData.loginId}
              onChange={handleChange}
              placeholder="Broker Login Id"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
            />
          </div>

          {/* API Key */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Api Key
            </label>
            <input
              type="text"
              name="apiKey"
              value={formData.apiKey}
              onChange={handleChange}
              placeholder="Api Key"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
            />
          </div>

          {/* App Secret Key */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              App secret Key
            </label>
            <input
              type="text"
              name="secretKey"
              value={formData.secretKey}
              onChange={handleChange}
              placeholder="App secret Key"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
            />
          </div>

          {/* Name Tag */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Name tag for account (Ex. XYZ&apos;s account)
            </label>
            <input
              type="text"
              name="accountTag"
              value={formData.accountTag}
              onChange={handleChange}
              placeholder="Name tag for account (Ex. XYZ's account)"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
            />
          </div>

          {/* Redirect URL */}
          <div className="mb-4 flex flex-col w-full">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Redirect URL
              </label>
           <div className='flex'>
           <div className="flex-grow">
              <input
                type="text"
                placeholder="Please select broker"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
                disabled
              />
            </div>
            <button
              type="button"
              className="ml-4 px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-lg shadow hover:bg-red-600 focus:outline-none"
            >
              COPY
            </button>
           </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-6">
            <button
              type="submit"
              className="w-1/2 mr-2 px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-lg shadow hover:bg-red-600 focus:outline-none"
            >
              ADD BROKER
            </button>
            <button
              type="button"
              onClick={()=>setAddBroker(false)}
              className="w-1/2 ml-2 px-4 py-2 bg-gray-400 text-white text-sm font-medium rounded-lg shadow hover:bg-gray-500 focus:outline-none"
            >
              CANCEL
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default NewForm
