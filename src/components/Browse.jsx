import { useState, useEffect } from "react";
import { Container, Row, Col, Form, Pagination } from "react-bootstrap";
import { useTrees } from "./TreeContext";
import TreeCard from "./TreeCard";
import TreeDetailModal from "./TreeDetailModal";

export default function Browse() {
   const { trees } = useTrees();
   const [searchTerm, setSearchTerm] = useState("");
   const [selectedTree, setSelectedTree] = useState(null);
   
   const [currentPage, setCurrentPage] = useState(1);
   const treesPerPage = 24;

   // Filter trees 
   const filteredTrees = trees.filter(t => {
       const props = t.attributes;
       return (props.SPP_COM || "").toLowerCase().includes(searchTerm.toLowerCase());
   });

   // Reset to page 1 when search input changes
   useEffect(() => {
      setCurrentPage(1);
   }, [searchTerm]);

   // Calculate trees for the curr page
   const indexOfLastTree = currentPage * treesPerPage;
   const indexOfFirstTree = indexOfLastTree - treesPerPage;
   const currentTrees = filteredTrees.slice(indexOfFirstTree, indexOfLastTree);

   // Calculate total pages
   const totalPages = Math.ceil(filteredTrees.length / treesPerPage);
   const paginate = (pageNumber) => setCurrentPage(pageNumber);

   return (
      <Container className="py-5">
         <div className="text-center mb-5">
         <h1 className="text-center mb-4">Browse Street Trees 🌿</h1>
            <p className="text-muted">
               Showing {filteredTrees.length} trees found
            </p>
         </div>
         
         <Row className="justify-content-center mb-5">
            <Col md={8} lg={6}>
               <Form.Group className="position-relative">
                  <Form.Control 
                     size="lg"
                     type="text" 
                     placeholder="Search by species (e.g., Maple)..." 
                     value={searchTerm}
                     onChange={(e) => setSearchTerm(e.target.value)}
                     className="shadow-sm border-0 rounded-pill px-4 py-3" 
                     aria-label="Search trees by species"
                  />
               </Form.Group>
            </Col>
         </Row>

         {/* Curr treees */}
         <Row>
            {currentTrees.length > 0 ? (
               currentTrees.map(tree => {
                  const props = tree.attributes;
                  return (
                     <Col key={props.OBJECTID} xs={12} sm={6} md={4} lg={3} className="mb-4">
                        <TreeCard tree={tree} onShowDetails={() => setSelectedTree(tree)} />
                     </Col>
                  );
               })
            ) : (
               <div className="text-center mt-4">
                  <h3>No trees found 🍂</h3>
                  <p>Try adjusting your search term.</p>
               </div>
            )}
         </Row>

         {/* Pagination */}
         {totalPages > 1 && (
            <Row className="mt-4">
               <Col className="d-flex justify-content-center">
                  <Pagination>
                     <Pagination.First onClick={() => paginate(1)} disabled={currentPage === 1} />
                     <Pagination.Prev onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} />
                     
                     <Pagination.Item active>{currentPage}</Pagination.Item>
                     <Pagination.Item disabled>of {totalPages}</Pagination.Item>

                     <Pagination.Next onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages} />
                     <Pagination.Last onClick={() => paginate(totalPages)} disabled={currentPage === totalPages} />
                  </Pagination>
               </Col>
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