import { Container, Row, Col, Accordion, Card, Form, Button } from "react-bootstrap";

export default function LearnMore() {
   return (
      <Container className="mt-5 pt-4">
         <Row className="mb-5 align-items-center">
            <Col lg={12} className="text-center">
               <h1 className="mb-3">Why Urban Forestry Matters 🍃</h1>
               <p className="lead text-muted">
                  Urban trees are more than just decoration—they are critical infrastructure for a healthy, vibrant city.
               </p>
            </Col>
         </Row>

         <Row className="mb-5">
            <Col md={8} className="mx-auto">
               <Accordion defaultActiveKey="0" className="shadow-sm">
                  <Accordion.Item eventKey="0">
                     <Accordion.Header>🌍 Environmental Benefits</Accordion.Header>
                     <Accordion.Body>
                        <ul>
                           <li className="mb-2"><strong>Improved air quality:</strong> Trees absorb carbon dioxide and filter air pollutants, improving the overall air quality in a city.</li>
                           <li className="mb-2"><strong>Better water management:</strong> Tree root systems help filter water, reduce storm water runoff, control erosion, and decrease the risk of flooding.</li>
                           <li className="mb-2"><strong>Climate change mitigation:</strong> By absorbing carbon dioxide and other greenhouse gases, urban forests help reduce the impacts of climate change.</li>
                           <li className="mb-2"><strong>Energy conservation:</strong> Trees provide shade, which cools buildings and reduces the need for air conditioning, lowering energy costs.</li>
                           <li><strong>Wildlife support:</strong> Urban forests provide essential food, water, and shelter for a variety of wildlife.</li>
                        </ul>
                     </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                     <Accordion.Header>🏙️ Human & Economic Benefits</Accordion.Header>
                     <Accordion.Body>
                        <ul>
                           <li className="mb-2"><strong>Improved health and well-being:</strong> Access to green spaces reduces stress, anxiety, and depression.</li>
                           <li className="mb-2"><strong>Increased property values:</strong> Properties in areas with a robust tree canopy have higher values.</li>
                           <li className="mb-2"><strong>Economic advantages:</strong> Trees can attract shoppers and boost local economies.</li>
                           <li><strong>Enhanced community:</strong> Urban forests foster a sense of community and improve aesthetic appeal.</li>
                        </ul>
                     </Accordion.Body>
                  </Accordion.Item>
               </Accordion>
            </Col>
         </Row>

         {/* Newsletter signup */}
         <Row className="mb-5">
            <Col md={8} className="mx-auto">
               <Card className="bg-light border-0 p-4 text-center">
                  <Card.Body>
                     <h3>Stay Updated 📨</h3>
                     <p>Subscribe to our newsletter for tree care tips and community events.</p>
                     <Form className="d-flex justify-content-center gap-2 mt-3 flex-wrap">
                        <Form.Control
                           type="email"
                           placeholder="Enter your email"
                           style={{ maxWidth: '300px' }}
                           aria-label="Email for newsletter"
                        />
                        <Button variant="success">Subscribe</Button>
                     </Form>
                  </Card.Body>
               </Card>
            </Col>
         </Row>
      </Container>
   );
}