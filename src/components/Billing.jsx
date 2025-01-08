import { Link } from "react-router-dom";
import { GoBackIcon } from "./common/Icons";

const Billing = () => {
  const oneCliqSubscriptions = [
    {
      planName: "Go Cliq",
      receiptId: "Cw8L5_1732189588601",
      startDate: "28-11-2024",
      endDate: "25-12-2024",
      validity: 30,
      allowedBrokers: 7,
      amount: 1886,
      planValidity: "EXPIRED",
      paymentStatus: "PURCHASED",
      purchasedAt: "28-11-24, 09:15",
    },
    {
      planName: "Go Cliq",
      receiptId: "pfw2Eq_173218874820",
      startDate: "17-10-2024",
      endDate: "15-11-2024",
      validity: 30,
      allowedBrokers: 7,
      amount: 1886,
      planValidity: "EXPIRED",
      paymentStatus: "PURCHASED",
      purchasedAt: "17-10-24, 09:49",
    },
    {
      planName: "Go Cliq",
      receiptId: "xWbLb_1732888883879",
      startDate: "09-09-2024",
      endDate: "08-10-2024",
      validity: 30,
      allowedBrokers: 3,
      amount: 1886,
      planValidity: "EXPIRED",
      paymentStatus: "PURCHASED",
      purchasedAt: "09-09-24, 13:28",
    },
  ];

  const dittoSubscriptions = []; // No data available

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* 1Cliq Subscription Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex gap-2">

         <Link to={"/dashboard"}>
          <GoBackIcon />
         </Link>

          1Cliq Subscription
        </h2>
        <div className="overflow-x-auto bg-white rounded-lg shadow-md">
          <table className="min-w-full text-sm text-gray-600">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left">Plan Name</th>
                <th className="px-4 py-2 text-left">Receipt Id</th>
                <th className="px-4 py-2 text-left">Start Date</th>
                <th className="px-4 py-2 text-left">End Date</th>
                <th className="px-4 py-2 text-left">Validity</th>
                <th className="px-4 py-2 text-left">Allowed Brokers</th>
                <th className="px-4 py-2 text-left">Amount</th>
                <th className="px-4 py-2 text-left">Plan Validity</th>
                <th className="px-4 py-2 text-left">Payment</th>
                <th className="px-4 py-2 text-left">Purchased At</th>
              </tr>
            </thead>
            <tbody>
              {oneCliqSubscriptions.map((subscription, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-2">{subscription.planName}</td>
                  <td className="px-4 py-2">{subscription.receiptId}</td>
                  <td className="px-4 py-2">{subscription.startDate}</td>
                  <td className="px-4 py-2">{subscription.endDate}</td>
                  <td className="px-4 py-2">{subscription.validity}</td>
                  <td className="px-4 py-2">{subscription.allowedBrokers}</td>
                  <td className="px-4 py-2">{subscription.amount}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        subscription.planValidity === "EXPIRED"
                          ? "bg-red-100 text-red-500"
                          : "bg-green-100 text-green-500"
                      }`}
                    >
                      {subscription.planValidity}
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        subscription.paymentStatus === "PURCHASED"
                          ? "bg-green-100 text-green-500"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {subscription.paymentStatus}
                    </span>
                  </td>
                  <td className="px-4 py-2">{subscription.purchasedAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Ditto Subscription Section */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Ditto Subscription
        </h2>
        <div className="overflow-x-auto bg-white rounded-lg shadow-md">
          <table className="min-w-full text-sm text-gray-600">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left">Plan Name</th>
                <th className="px-4 py-2 text-left">Receipt Id</th>
                <th className="px-4 py-2 text-left">Start Date</th>
                <th className="px-4 py-2 text-left">End Date</th>
                <th className="px-4 py-2 text-left">Validity</th>
                <th className="px-4 py-2 text-left">Allowed Brokers</th>
                <th className="px-4 py-2 text-left">Amount</th>
                <th className="px-4 py-2 text-left">Plan Type</th>
                <th className="px-4 py-2 text-left">Plan Validity</th>
                <th className="px-4 py-2 text-left">Payment</th>
                <th className="px-4 py-2 text-left">Purchased At</th>
              </tr>
            </thead>
            <tbody>
              {dittoSubscriptions.length > 0 ? (
                dittoSubscriptions.map((subscription, index) => (
                  <tr key={index} className="border-t">
                    <td className="px-4 py-2">{subscription.planName}</td>
                    <td className="px-4 py-2">{subscription.receiptId}</td>
                    <td className="px-4 py-2">{subscription.startDate}</td>
                    <td className="px-4 py-2">{subscription.endDate}</td>
                    <td className="px-4 py-2">{subscription.validity}</td>
                    <td className="px-4 py-2">{subscription.allowedBrokers}</td>
                    <td className="px-4 py-2">{subscription.amount}</td>
                    <td className="px-4 py-2">{subscription.planType}</td>
                    <td className="px-4 py-2">{subscription.planValidity}</td>
                    <td className="px-4 py-2">{subscription.paymentStatus}</td>
                    <td className="px-4 py-2">{subscription.purchasedAt}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="11"
                    className="px-4 py-2 text-center text-gray-500"
                  >
                    No data available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Billing;
