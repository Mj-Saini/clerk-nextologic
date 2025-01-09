import  { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const PriceSettings = () => {
  const [promoCode, setPromoCode] = useState("");
  const [isGSTAvailable, setIsGSTAvailable] = useState(false);

  const handlePromoApply = () => {
    // Handle promo code application logic here
    console.log("Promo Code Applied:", promoCode);
  };

  const handleGSTChange = (e) => {
    setIsGSTAvailable(e.target.value === "Yes");
  };

  return (
    <Container fluid className="p-4 z-50 relative bg-white">
      <Row>
        {/* Left Column: Price Breakup */}
        <Col md={4} className="border p-3">
          <h5>Price Breakup</h5>
          <div className="d-flex justify-content-between border-bottom py-2">
            <span>Plan Name</span>
            <span>Go Cliq</span>
          </div>
          <div className="d-flex justify-content-between border-bottom py-2">
            <span>Price</span>
            <span>1599.00</span>
          </div>
          <div className="d-flex justify-content-between border-bottom py-2">
            <span>GST (18%)</span>
            <span>+ 287.82</span>
          </div>
          <div className="d-flex justify-content-between border-bottom py-2">
            <span>Price With GST</span>
            <span>= 1886.82</span>
          </div>
          <div className="d-flex justify-content-between border-bottom py-2">
            <span>Final Price You Pay</span>
            <span>1886</span>
          </div>
          <Form.Group controlId="promoCode" className="mt-3">
            <Form.Label>Promo Code</Form.Label>
            <div className="d-flex">
              <Form.Control
                type="text"
                placeholder="Enter Promo Code (if available)"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
              <Button
                variant="danger"
                className="ms-2"
                onClick={handlePromoApply}
              >
                APPLY
              </Button>
            </div>
          </Form.Group>
        </Col>

        {/* Right Column: Billing Details */}
        <Col md={8} className="border p-3">
          <h5>Billing Details</h5>
          <p>
            As following details are going to be used while generating invoice,
            Please fill billing details carefully as you can not change it once
            invoice is generated.
          </p>
          <Form>
            <Row>
              <Col md={6}>
                <Form.Group controlId="firstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your first name" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="lastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your last name" />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId="address" className="mt-3">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Enter your Address" />
            </Form.Group>
            <Row className="mt-3">
              <Col md={6}>
                <Form.Group controlId="phoneNumber">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="text" placeholder="Enter your phone number" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="pinCode">
                  <Form.Label>Pin Code</Form.Label>
                  <Form.Control type="text" placeholder="Enter your pin code" />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Is GST Number available?</Form.Label>
                  <div>
                    <Form.Check
                      inline
                      label="No"
                      type="radio"
                      name="gstAvailable"
                      value="No"
                      checked={!isGSTAvailable}
                      onChange={handleGSTChange}
                    />
                    <Form.Check
                      inline
                      label="Yes"
                      type="radio"
                      name="gstAvailable"
                      value="Yes"
                      checked={isGSTAvailable}
                      onChange={handleGSTChange}
                    />
                  </div>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="state">
                  <Form.Label>State</Form.Label>
                  <Form.Select>
                    <option>Select State</option>
                    <option value="1">State 1</option>
                    <option value="2">State 2</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <p className="mt-4 text-danger">
              Please read terms and conditions carefully.
            </p>
            <Form.Check
              type="checkbox"
              label="I'm buying 1Cliq plan, and I'm aware that Oi Pulse features are not included in the subscription."
            />
            <Form.Check
              type="checkbox"
              label="No refund, transfer, or cancellation will be entertained once paid, so please think twice before subscribing."
            />
            <Form.Check
              type="checkbox"
              label="Oi Pulse and 1Cliq are not liable for broker addition issues, broker API-related problems, or broker order placement problems."
            />
            <Form.Check
              type="checkbox"
              label="We are not responsible for your profits or losses when trading on the 1Cliq platform."
            />
            <Form.Check
              type="checkbox"
              label="I am aware that Oi Pulse and 1Cliq does not provide any buy/sell call."
            />
            <Form.Check
              type="checkbox"
              label="I accept the Terms & Conditions and Refund Policy."
              className="mb-4"
            />
            <Button variant="danger" type="submit" className="w-100">
              APPLY
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default PriceSettings