import { useEffect, useState } from "react";
import TreeCard from "./TreeCard";

export default function Home() {
   const [trees, setTrees] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      fetch("https://maps.cityofmadison.com/arcgis/rest/services/Public/OPEN_DATA/MapServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json")
         .then(res => res.json())
         .then(data => {
            console.log(data.features)
            setTrees(data.features);
            setLoading(false);
         })
         .catch(err => {
            console.error("Error fetching trees:", err);
            setLoading(false);
         });
   }, []);

   if (loading) {
      return <div style={{ padding: "2rem" }}>Loading trees… 🌳</div>;
   }

   return (
      <div style={styles.container}>
         <h1 style={styles.heading}>Browse Street Trees 🌿</h1>

         <div style={styles.grid}>
            {trees.map(tree => (
               <TreeCard key={tree.attributes.OBJECTID} tree={tree} />
            ))}
         </div>
      </div>
   );
}

const styles = {
   container: {
      padding: "2rem",
      marginTop: "5rem"
   },
   heading: {
      textAlign: "center",
      marginBottom: "2rem",
   },
   grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
      gap: "1.5rem",
   },
   card: {
      background: "#f7fff7",
      border: "1px solid #cfe8cf",
      borderRadius: "10px",
      padding: "1rem",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
   },
   cardTitle: {
      marginBottom: "0.5rem",
   },
   coords: {
      marginTop: "0.5rem",
      fontSize: "0.85rem",
      color: "#555",
   },
};
