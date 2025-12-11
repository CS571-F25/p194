import { Badge } from "react-bootstrap";

export default function StatusBadge({ adoptedBy }) {
    if (adoptedBy) {
        return <Badge bg="success">Adopted by {adoptedBy} 🌟</Badge>;
    }
    return <Badge bg="secondary">Available</Badge>;
}