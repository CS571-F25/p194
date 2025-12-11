import { Card, Button } from "react-bootstrap";
import { useTrees } from "./TreeContext";
import StatusBadge from "./StatusBadge";

export default function TreeCard({ tree, onShowDetails }) {
   // Handle data 
   const props = tree.attributes;
   const { toggleFavorite, favorites, adoptedTrees } = useTrees();

   const isFav = favorites.some(t => {
      const tProps = t.attributes;
      return tProps.OBJECTID === props.OBJECTID;
   });
   const adoptedBy = adoptedTrees[props.OBJECTID];

   // extract coordinates
   let locationString = "Unknown Location";
   if (tree.geometry && tree.geometry.y) {
      locationString = `${tree.geometry.y.toFixed(5)}, ${tree.geometry.x.toFixed(5)}`;
   }

   return (
      <Card className="h-100 shadow-sm border-0">
         <div style={{ height: "10px", backgroundColor: "#56a856", borderRadius: "5px 5px 0 0" }}></div>

         <Card.Body className="d-flex flex-column">
            <div className="d-flex justify-content-between align-items-start mb-2">
               <Card.Title className="mb-0 text-truncate" title={props.SPP_COM}>
                  {props.SPP_COM || "Unknown Species"}
               </Card.Title>
               <StatusBadge adoptedBy={adoptedBy} />
            </div>

            <Card.Subtitle className="mb-3 text-muted fst-italic">
               {props.SPP_BOT}
            </Card.Subtitle>

            <div className="mt-auto">
               <p className="small text-muted mb-3">
                  📍 {locationString}
               </p>

               <div className="d-flex justify-content-between">
                  <Button variant="outline-success" size="sm" onClick={onShowDetails}>
                     View Details
                  </Button>

                  <Button
                     variant={isFav ? "danger" : "outline-danger"}
                     size="sm"
                     onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(tree);
                     }}
                     aria-label={isFav ? "Unfavorite tree" : "Favorite tree"}
                  >
                     {isFav ? "♥" : "♡"}
                  </Button>
               </div>
            </div>
         </Card.Body>
      </Card>
   );
}