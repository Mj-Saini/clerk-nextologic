const Settings = () => {
  return (
    <>
      <div className="w-full mx-auto ">
        {/* Platform Settings */}
        <div className="mb-6 bg-white p-6 rounded-lg shadow-lg mt-4">
          <h2 className="text-lg font-semibold mb-2">Platform Settings</h2>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium" htmlFor="themeMode">
              Theme Mode
            </label>
            <select
              id="themeMode"
              className="p-2 border border-gray-300 rounded-md w-full md:w-1/3"
            >
              <option value="Light">Light</option>
              <option value="Dark">Dark</option>
            </select>
          </div>
        </div>

        {/* 1Cliq Favourite Setting */}
        <div className="mb-6 bg-white p-6 rounded-lg shadow-lg mt-4">
          <h2 className="text-lg font-semibold mb-2">
            1Cliq Favourite Setting
          </h2>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-medium block mb-1">Segment</label>
              <select className="p-2 border border-gray-300 rounded-md w-full">
                <option>Options</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium block mb-1">Symbol</label>
              <input
                type="text"
                className="p-2 border border-gray-300 rounded-md w-full"
                defaultValue="BANKNIFTY"
              />
            </div>
            <div>
              <label className="text-sm font-medium block mb-1">
                Call Strike Price
              </label>
              <select className="p-2 border border-gray-300 rounded-md w-full">
                <option>ATM</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium block mb-1">
                Put Strike Price
              </label>
              <select className="p-2 border border-gray-300 rounded-md w-full">
                <option>ATM</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium block mb-1">
                Product Type
              </label>
              <select className="p-2 border border-gray-300 rounded-md w-full">
                <option>Intraday</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium block mb-1">
                Product Type
              </label>
              <select className="p-2 border border-gray-300 rounded-md w-full">
                <option>Intraday</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium block mb-1">
                Product Type
              </label>
              <select className="p-2 border border-gray-300 rounded-md w-full">
                <option>Intraday</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium block mb-1">
                Order Type
              </label>
              <select className="p-2 border border-gray-300 rounded-md w-full">
                <option>Market</option>
              </select>
            </div>
          </div>
        </div>

        {/* Stoploss/Target */}
        <div className="mb-6 bg-white p-6 rounded-lg shadow-lg mt-4">
          <h2 className="text-lg font-semibold mb-2">Stoploss / Target</h2>
          <div className="flex justify-between gap-3">
            <div className="w-1/2">
              <div className="flex gap-2">
                <div className="flex flex-col w-full">
                  <label className="flex items-center space-x-2">
                    <span className="text-sm font-medium mb-1">
                      Predefined Stoploss
                    </span>
                  </label>
                  <div className="">
                    <div className="flex gap-2">
                      <div className="flex gap-2">
                        <input type="checkbox" className="form-checkbox w-6" />
                        <input
                          type="number"
                          className="p-2 border border-gray-300 rounded-md w-full"
                          placeholder=""
                        />
                      </div>{" "}
                      <div className="w-1/3">
                        <input
                          type="number"
                          className="p-2 border border-gray-300 rounded-md w-full"
                          placeholder="Points"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="flex items-center space-x-2">
                    <span className="text-sm font-medium mb-1">
                      Type of Stoploss{" "}
                    </span>
                  </label>
                  <div className="w-full">
                    <input
                      type="number"
                      className="p-2 border border-gray-300 rounded-md w-full"
                      placeholder="static stoploss"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <div className="flex gap-2">
                <div className="w-2/3">
                  {" "}
                  <label className="text-sm font-medium block mb-1">
                    Predefined Target
                  </label>
                  <div className="flex gap-2">
                    <div className="w-1/3">
                    <div className="flex gap-2">
                        <input type="checkbox" className="form-checkbox w-6" />
                        <input
                          type="number"
                          className="p-2 border border-gray-300 rounded-md w-full"
                          placeholder=""
                        />
                      </div>{" "}
                    </div>
                    <div className="w-2/3">
                      <input
                        type="number"
                        className="p-2 border border-gray-300 rounded-md w-full"
                        placeholder="Points"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
          </div>
        </div>

        {/* Close Position Setting */}
        <div className="mb-6 bg-white p-6 rounded-lg shadow-lg mt-4">
          <h2 className="text-lg font-semibold mb-2">Close Position Setting</h2>
          <div>
            <label className="text-sm font-medium block mb-1">Order type</label>
            <select className="p-2 border border-gray-300 rounded-md w-full md:w-1/2">
              <option>Market</option>
            </select>
          </div>
          <p className="mt-3">
            Even though close position order type is selected as Market type,
            closing order for Stock options are going to be Market Protection
            order with 15.00 % as many broker does not allow market orders in
            stock options.
          </p>
        </div>
        <div className="flex justify-center space-x-4 bg-white p-6 rounded-lg shadow-lg mt-4">
          <button className="px-4 py-2 bg-gray-600 text-white rounded-md">
            RESET DEFAULT SETTING
          </button>
          <button className="px-4 py-2 bg-gray-600 text-white rounded-md">
            SAVE FAVOURITE SETTING
          </button>
        </div>

        {/* Usage Note */}
        <div className="mb-6 bg-white p-6 rounded-lg shadow-lg mt-4">
          <h2 className="text-lg font-semibold mb-2">Usage Note</h2>
          <p className="text-sm mb-2">
            Reset default Selection - It will reset user selected settings and
            save default settings of 1Cliq trading page
          </p>
          <p className="text-sm">
            Save favourite Selection - It will save user selected settings of
            1Cliq trading page
          </p>
        </div>

        {/* Buttons */}
      </div>
    </>
  );
};

export default Settings;
