import { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";

export default function AdoptionForm({ treeId, onAdopt }) {
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); 
        if (!name.trim()) {
            alert("Please enter a name to adopt this tree!");
            return;
        }
        onAdopt(treeId, name);
        setName(""); 
    };

    return (
        <Form onSubmit={handleSubmit}>
            <InputGroup>
                <Form.Control
                    type="text"
                    placeholder="Adopter's Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    aria-label="Enter name for adoption"
                />
                <Button variant="success" type="submit">
                    Adopt
                </Button>
            </InputGroup>
        </Form>
    );
}