

const Wappalyzer = () => {
  return (
   <div className="h-screen w-full flex items-center justify-center">
     <div className="w-1/3 bg-white text-white pt-4 rounded-lg shadow-2xl">
    
      <div className="flex items-center justify-between px-4">
        <h2 className="text-xl font-semibold text-black">Wappalyzer</h2>
        <button className="bg-gray-200 px-3 py-1 rounded-md text-sm  text-black">Export</button>
      </div>

      {/* Tabs */}
      <div className="flex mt-4 border-b border-gray-600 ">
        <button className="px-4 py-2 font-medium border-b-2 text-black border-gray-200">TECHNOLOGIES</button>
        <button className="px-4 py-2 text-black">MORE INFO</button>
      </div>

      {/* Content */}
      <div className="mt-6 space-y-4 px-4">
       <div className="flex justify-between">
       <div  className="w-full md:w-1/2">
          <h3 className="text-lg font-medium text-black">JavaScript frameworks</h3>
          <p className="mt-1 text-sm text-black">Vue.js</p>
        </div>
        <div className="w-full md:w-1/2">
          <h3 className="text-lg font-medium text-black">Security</h3>
          <p className="mt-1 text-sm text-black">reCAPTCHA</p>
        </div>
       </div>
        <div className="flex justify-between">
        <div className="w-full md:w-1/2">
          <h3 className="text-lg font-medium text-black">Font scripts</h3>
          <p className="mt-1 text-sm text-black">Google Font API</p>
        </div>
        <div className="w-full md:w-1/2"> 
          <h3 className="text-lg font-medium text-black">Miscellaneous</h3>
          <p className="mt-1 text-sm text-black">Open Graph</p>
        </div>
        </div>
        <div className="flex justify-between">
        <div className="w-full md:w-1/2">
        <h3 className="text-lg font-medium text-black">UI frameworks</h3>
        <p className="mt-1 text-sm text-black">Vuetify</p>
        </div>
      
        </div>
      
      </div>

      {/* Footer */}
      <div className="mt-6 text-sm bg-gray-200 p-4 rounded-b-lg">
        <h4 className="font-medium text-black">Generate sales leads</h4>
        <p className="mt-2 text-black">
          Find new prospects by the technologies they use. Reach out to customers of Shopify,
          Magento, Salesforce, and others.
        </p>
      </div>
    </div>
   </div>
  );
};

export default Wappalyzer;
