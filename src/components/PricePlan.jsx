import "bootstrap/dist/css/bootstrap.min.css";

const PricePlan = () => {
  return (
    <div className="container mt-4">
      {/* Header Section */}
      <div className="text-center mb-4">
        <h5>Brokers Available in 1Cliq</h5>
        <div className="d-flex flex-wrap justify-content-center mt-2">
          {[
            "FYERS",
            "ZERODHA",
            "TRADESMART",
            "FINVASIA",
            "KOTAK NEO",
            "FLAT TRADE",
            "PROSTOCKS",
            "5 PAISA",
            "ALICE BLUE",
            "DHAN",
            "GOODWILL",
            "ESPRESSO",
            "ZEBU",
            "UPSTOX",
            "ASTHA TRADE",
          ].map((broker, index) => (
            <button
              key={index}
              className="btn btn-outline-secondary btn-sm mx-1 mb-2 rounded-5"
            >
              {broker}
            </button>
          ))}
        </div>
        <small className="text-muted">
          (Broker having * in name charges separate fees from users for API
          access which they have to pay directly to the broker only)
        </small>
      </div>

      <div className="row">
        <div className="col-md-6 mb-4 z-0">
          <div className="card text-center h-100 flex flex-col justify-between">
            <div className="">
              <div className="card-header bg-white">
                <h5>Go Cliq</h5>
                <p className="text-muted">FOR 1 MONTH</p>
              </div>
              <div className="card-body">
                <h3>₹1599</h3>
                <p className="text-muted">/month (Excluding GST)</p>
                <ul className="list-unstyled">
                  <li className="text-sm">7 Broker(s) Allowed</li>
                  <li className="text-sm">Basket Order</li>
                  <li className="text-sm">Place Unlimited Qty</li>
                  <li className="text-sm">All Market Order</li>
                  <li className="text-sm">MTM Target And SL</li>
                  <li className="text-sm">Take trade on single click</li>
                  <li className="text-sm">
                    Multiple Broker at single place (1 Broker at a time)
                  </li>
                  <li className="text-sm">Close All Positions</li>
                  <li className="text-sm">Trailing SL & Manual SL</li>
                  <li className="text-sm">Live MTM update</li>
                  <li className="text-sm">Predefined Auto SL & Target</li>
                  <li className="text-sm">Limit order</li>
                </ul>
              </div>
            </div>
            <button className="btn !bg-gray-200 btn-lg mb-3 mx-3">
              SUBSCRIBE
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-6 mb-4">
          <div className="card text-center">
            <div className="card-header bg-white">
              <h5>Go Cliq Annual</h5>
              <p className="text-muted">FOR 12 MONTHS</p>
            </div>
            <div className="card-body flex flex-col justify-between">
              <div>
                <h3>₹1167</h3>
                <p className="text-muted">/month (Excluding GST)</p>
                <ul className="list-unstyled ">
                  <li className="text-sm">7 Broker(s) Allowed</li>
                  <li className="text-sm">LTP Limit order</li>
                  <li className="text-sm">Keyboard Shortcuts</li>
                  <li className="text-sm">Basket Order</li>
                  <li className="text-sm">Place Unlimited Qty</li>
                  <li className="text-sm">All Market Order</li>
                  <li className="text-sm">MTM Target And SL</li>
                  <li className="text-sm">Take trade on single click</li>
                  <li className="text-sm">
                    Multiple Broker at single place (1 Broker at a time)
                  </li>
                  <li className="text-sm">Close All Positions</li>
                  <li className="text-sm">Trailing SL & Manual SL</li>
                  <li className="text-sm">Live MTM update</li>
                  <li className="text-sm">Predefined Auto SL & Target</li>
                  <li className="text-sm">Limit order</li>
                </ul>
              </div>
              <button className="btn !bg-gray-200 btn-lg">SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer Section */}
      <div className="text-center mt-4 border-b pb-3">
        <h5>Disclaimer</h5>
        <small className="text-muted">
          Although information has been obtained from and is based upon sources
          we believe to be reliable, we do not guarantee its accuracy and the
          information may be incomplete or condensed. All opinions and estimates
          constitute our judgment as of the date of the report and are subject
          to change without notice.
        </small>
      </div>
      <div className="text-center mt-4 border-b pb-3">
        <h5>Note</h5>
        <small>
          We are not SEBI Registered Advisor and We are NOT responsible for your
          trading profits/losses if you use our charts and data for trading.
          Please consult your investment advisor.
        </small>
        <br />
        <small className="text-muted">
          Monthly subscription means 30 days of subscription period.
        </small>
        <br />
        <br />
        <small>All Plans are under 18% GST.</small>
      </div>
    </div>
  );
};
export default PricePlan;
