import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* Welcome banner */}
      <div className="bg-light p-5 mb-5 rounded-3" style={{ marginTop: '56px' }}>
        <Container fluid className="py-5">
          <h1 className="display-4 fw-bold">Welcome to Adopt-a-Tree Madison 🌳</h1>
          <p className="col-md-8 fs-4 text-muted">
            Join our community in preserving and growing Madison's urban forest.
            Find a tree near you, adopt it, and help make our city greener.
          </p>
          <div className="mt-4">
            <Button as={Link} to="/browse" variant="success" size="lg" className="me-3">
              Browse Trees
            </Button>
            <Button as={Link} to="/learn-more" variant="outline-dark" size="lg">
              Why Adopt?
            </Button>
          </div>
        </Container>
      </div>

      <Container>
        {/* Feature cards */}
        <Row className="mb-5 g-4">
          <Col md={4}>
            <Card className="h-100 border-0 shadow-sm text-center p-3">
              <div className="display-4 mb-2">🔍</div>
              <Card.Body>
                <Card.Title>Explore</Card.Title>
                <Card.Text>
                  Browse our interactive list of real street trees in Madison using open city data.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 border-0 shadow-sm text-center p-3">
              <div className="display-4 mb-2">❤️</div>
              <Card.Body>
                <Card.Title>Adopt</Card.Title>
                <Card.Text>
                  Find your favorite tree, add it to your cart, and become an official adopter.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 border-0 shadow-sm text-center p-3">
              <div className="display-4 mb-2">🌱</div>
              <Card.Body>
                <Card.Title>Care</Card.Title>
                <Card.Text>
                  Learn about the environmental benefits and how you can help your tree thrive.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}