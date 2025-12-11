import { Modal, Button, ListGroup } from "react-bootstrap";
import { useTrees } from "./TreeContext";

export default function TreeDetailModal({ show, tree, onHide }) {
    const { addToCart, cart, adoptedTrees } = useTrees();

    if (!tree) return null;

    const props = tree.attributes;
    const isAdopted = adoptedTrees[props.OBJECTID];

    // Check if tree is already in cart
    const isInCart = cart.some(t => {
        const tProps = t.attributes;
        return tProps.OBJECTID === props.OBJECTID
    });

    // get Coordinates
    let locationString = "Unknown Location";
    if (tree.geometry && tree.geometry.y) {
        locationString = `${tree.geometry.y.toFixed(5)}, ${tree.geometry.x.toFixed(5)}`;
    }

    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>{props.SPP_COM}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {isAdopted ? (
                    <div className="alert alert-success">Adopted by: {isAdopted}</div>
                ) : (
                    <p className="text-muted">Available for adoption!</p>
                )}
                <ListGroup variant="flush">
                    <ListGroup.Item><strong>Botanical Name:</strong> {props.SPP_BOT}</ListGroup.Item>
                    <ListGroup.Item><strong>Diameter:</strong> {props.DIAMETER} in</ListGroup.Item>
                    <ListGroup.Item><strong>Location (Lat, Long):</strong><br /> {locationString}</ListGroup.Item>
                </ListGroup>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>Close</Button>
                {!isAdopted && (
                    <Button
                        variant="success"
                        disabled={isInCart}
                        onClick={() => { addToCart(tree); onHide(); }}
                    >
                        {isInCart ? "In Cart" : "Add to Cart 🛒"}
                    </Button>
                )}
            </Modal.Footer>
        </Modal>
    );
}