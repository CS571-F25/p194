import { Container, ListGroup, Button, Row, Col } from "react-bootstrap";
import { useTrees } from "./TreeContext";
import AdoptionForm from "./AdoptionForm";

export default function Cart() {
    const { cart, removeFromCart, adoptTree } = useTrees();

    return (
        <Container className="mt-5 pt-4">
            <h1 className="text-center mb-4">Your Cart 🛒</h1>
            {cart.length === 0 ? (
                <div className="alert alert-info">
                    Your cart is empty. Go find some trees!
                </div>
            ) : (
                <ListGroup>
                    {cart.map(tree => (
                        <ListGroup.Item key={tree.attributes.OBJECTID} className="py-3">
                            <Row className="align-items-center">
                                <Col md={5}>
                                    <h5 className="mb-1">{tree.attributes.SPP_COM}</h5>
                                    <p className="text-muted mb-0 small">
                                        📍 {tree.attributes.SITE_ADDRESS}
                                    </p>
                                </Col>

                                <Col md={5} className="my-2 my-md-0">
                                    <AdoptionForm
                                        treeId={tree.attributes.OBJECTID}
                                        onAdopt={adoptTree}
                                    />
                                </Col>

                                <Col md={2} className="text-end">
                                    <Button
                                        variant="outline-danger"
                                        size="sm"
                                        onClick={() => removeFromCart(tree.attributes.OBJECTID)}
                                    >
                                        Remove
                                    </Button>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            )}
        </Container>
    );
}