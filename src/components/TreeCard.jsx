export default function TreeCard({ tree }) {
   const props = tree.attributes;

   return (
      <div style={styles.card} className="tree-card">
         <h2 style={styles.cardTitle}>{props.SPP_COM || "Unknown Species"}</h2>

         <p><strong>Diameter:</strong> {props.DIAMETER ?? "N/A"} in</p>
         <p><strong>Status:</strong> {props.STATUS}</p>
         <p><strong>Botanical:</strong> {props.SPP_BOT}</p>

         <p style={styles.coords}>
            <strong>Coords:</strong> <br />
            {tree.geometry.x.toFixed(4)}, {tree.geometry.y.toFixed(4)}
         </p>
      </div>
   );
}
const styles = {
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