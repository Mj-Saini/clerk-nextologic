import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Outlet, useLocation } from "react-router-dom";
import { PlanHandIcon } from "./common/Icons";

const PricePlan = () => {
  const location = useLocation();

  return (
    <div className="mt-4">
      {location.pathname === "/dashboard/pricing/price" ? (
        ""
      ) : (
        <div>
          <div className="text-center mb-3 bg-white shadow-lg p-3 rounded-lg">
            <h5 className="text-[#6e3b37] mb-3 text-base">
              Brokers Available in 1Cliq
            </h5>
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
                  className="btn_light btn-outline-secondary btn-sm mx-1 mb-2 !py-1.5 rounded-5"
                >
                  {broker}
                </button>
              ))}
            </div>
            <p className="mb-0 pt-3">
              <small className="text-[#6e3b37] text-[13px] font-light">
                (Broker having * in name charges separate fees from users for
                API access which they have to pay directly to the broker only)
              </small>
            </p>
          </div>

          <div className="row ">
            <div className="col-md-6 mb-4">
              <div className="text-center h-100 flex flex-col justify-between bg-white shadow-lg rounded-md !border !border-[#C42B1E] p-3">
                <div className="">
                  <div className="card-header flex flex-col items-center">
                    <PlanHandIcon />
                    <h5 className="my-2 text-[#6e3b37] text-lg sm:text-xl lg:text-2xl">
                      Go Cliq
                    </h5>
                    <p className="text-[13px] text-[#C42B1E] rounded-2xl border !bg-[#C42B1E29] px-2 py-1">
                      FOR 1 MONTH
                    </p>
                  </div>
                  <div className="card-body">
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl text-[#C42B1E] ">
                      ₹1599{" "}
                      <span className="text-sm text-[#6e3b37]">/month</span>
                    </h3>
                    <p className="text-muted"> (Excluding GST)</p>
                    <ul className="list-unstyled">
                      <li className="text-base pb-2 text-[#6e3b37]">
                        7 Broker(s) Allowed
                      </li>
                      <li className="text-base pb-2 text-[#6e3b37]">
                        Basket Order
                      </li>
                      <li className="text-base pb-2 text-[#6e3b37]">
                        Place Unlimited Qty
                      </li>
                      <li className="text-base pb-2 text-[#6e3b37]">
                        All Market Order
                      </li>
                      <li className="text-base pb-2 text-[#6e3b37]">
                        MTM Target And SL
                      </li>
                      <li className="text-base pb-2 text-[#6e3b37]">
                        Take trade on single click
                      </li>
                      <li className="text-base pb-2 text-[#6e3b37]">
                        Multiple Broker at single place (1 Broker at a time)
                      </li>
                      <li className="text-base pb-2 text-[#6e3b37]">
                        Close All Positions
                      </li>
                      <li className="text-base pb-2 text-[#6e3b37]">
                        Trailing SL & Manual SL
                      </li>
                      <li className="text-base pb-2 text-[#6e3b37]">
                        Live MTM update
                      </li>
                      <li className="text-base pb-2 text-[#6e3b37]">
                        Predefined Auto SL & Target
                      </li>
                      <li className="text-base pb-2 text-[#6e3b37]">
                        Limit order
                      </li>
                    </ul>
                  </div>
                </div>
                <Link to={"price"} className="btn_dark">
                  SUBSCRIBE
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-6 mb-4">
              <div className="text-center h-100 flex flex-col justify-between bg-white shadow-lg rounded-md !border !border-[#C42B1E] p-3">
                <div className="flex flex-col items-center">
                  <PlanHandIcon />
                  <h5 className="my-2 text-[#6e3b37] text-lg sm:text-xl lg:text-2xl">
                    Go Cliq
                  </h5>
                  <p className="text-[13px] text-[#C42B1E] rounded-2xl border !bg-[#C42B1E29] px-2 py-1">
                    FOR 1 MONTH
                  </p>
                </div>
                <div className="card-body flex flex-col justify-between">
                  <div>
                    <h3>₹1167</h3>
                    <p className="text-muted">/month (Excluding GST)</p>
                    <ul className="list-unstyled ">
                      <li className="text-base pb-2 text-[#6e3b37]">
                        7 Broker(s) Allowed
                      </li>
                      <li className="text-base pb-2 text-[#6e3b37]">
                        LTP Limit order
                      </li>
                      <li className="text-base pb-2 text-[#6e3b37]">
                        Keyboard Shortcuts
                      </li>
                      <li className="text-base pb-2 text-[#6e3b37]">
                        Basket Order
                      </li>
                      <li className="text-base pb-2 text-[#6e3b37]">
                        Place Unlimited Qty
                      </li>
                      <li className="text-base pb-2 text-[#6e3b37]">
                        All Market Order
                      </li>
                      <li className="text-base pb-2 text-[#6e3b37]">
                        MTM Target And SL
                      </li>
                      <li className="text-base pb-2 text-[#6e3b37]">
                        Take trade on single click
                      </li>
                      <li className="text-base pb-2 text-[#6e3b37]">
                        Multiple Broker at single place (1 Broker at a time)
                      </li>
                      <li className="text-base pb-2 text-[#6e3b37]">
                        Close All Positions
                      </li>
                      <li className="text-base pb-2 text-[#6e3b37]">
                        Trailing SL & Manual SL
                      </li>
                      <li className="text-base pb-2 text-[#6e3b37]">
                        Live MTM update
                      </li>
                      <li className="text-base pb-2 text-[#6e3b37]">
                        Predefined Auto SL & Target
                      </li>
                      <li className="text-base pb-2 text-[#6e3b37]">
                        Limit order
                      </li>
                    </ul>
                  </div>
                  <Link to={"price"} className="btn_dark">
                    SUBSCRIBE
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Disclaimer Section */}
          <div className="text-center pt-3 border-b pb-3 bg-white shadow-lg rounded-lg px-2">
            <h5 className="text-lg md:text-xl text-[#6e3b37]">Disclaimer</h5>
            <p className="text-base text-[#6e3b37]">
            Although information has been obtained from and is based upon sources we believe to be reliable, we do not guarantee its accuracy and the information may be incomplete or condensed. All opinions and estimates constitute our judgment as of the date of the report and are subject to change without notice. This report is for informational purposes only and none of the stock information, data and company information presented herein constitutes a legally binding recommendation or a solicitation of any offer to buy or sell any securities. Information presented is general information that does not take into account your individual circumstances, financial situation, or needs, nor does it present a personalized recommendation to you. Individual stocks presented may not be suitable for you.
            </p>
            <p className="text-base text-[#6e3b37] border-b pb-3">
            Any opinions, chats, messages, news, research, analyses, prices, or other information contained on this Website are provided as general market information for educational and entertainment purposes only, and do not constitute investment advice. The Website should not be relied upon as a substitute for extensive independent market research before making your actual trading decisions. Opinions, market data, recommendations or any other content is subject to change at any time without notice. Options Scalping Private Limited will not accept liability for any loss or damage, including without limitation any loss of profit, which may arise directly or indirectly from use of or reliance on such information. Options Scalping Private Limited is a research and information company and not investment/trading adviser. Please consult an adviser about the appropriateness of your investment/trading decisions.
            </p>
          <div className="text-center mt-3 border-b pb-3">
            <h5 className="text-lg md:text-xl text-[#6e3b37]">Note</h5>
            <p className="text-lg md:text-xl text-[#6e3b37]">
              We are not SEBI Registered Advisor and We are NOT responsible for
              your trading profits/losses if you use our charts and data for
              trading. Please consult your investment advisor.
            </p>
            
            <small className="text-lg md:text-xl text-[#6e3b37]">
              Monthly subscription means 30 days of subscription period.
            </small>
         
            <br />
            <p className="text-lg md:text-xl text-[#6e3b37] mt-3">All Plans are under 18% GST.</p>
          </div>
          </div>
        </div>
      )}
      <Outlet />
    </div>
  );
};
export default PricePlan;
