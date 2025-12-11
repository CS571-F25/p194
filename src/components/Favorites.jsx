import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTrees } from "./TreeContext";
import TreeCard from "./TreeCard";
import TreeDetailModal from "./TreeDetailModal"; 

export default function Favorites() {
    const { favorites } = useTrees();
    const [selectedTree, setSelectedTree] = useState(null); 

    return (
        <Container className="mt-5 pt-4">
            <h1 className="text-center mb-4">Your Favorite Trees ❤️</h1>
            {favorites.length === 0 ? (
                <div className="text-center mt-5">
                    <p className="lead text-muted">You haven't favorited any trees yet.</p>
                    <p>Go to the Browse page to find some!</p>
                </div>
            ) : (
                <Row>
                    {favorites.map(tree => (
                        <Col key={tree.attributes.OBJECTID} xs={12} sm={6} md={4} lg={3} className="mb-4">
                            <TreeCard
                                tree={tree}
                                onShowDetails={() => setSelectedTree(tree)}
                            />
                        </Col>
                    ))}
                </Row>
            )}

            <TreeDetailModal
                show={!!selectedTree}
                tree={selectedTree}
                onHide={() => setSelectedTree(null)}
            />
        </Container>
    );
}