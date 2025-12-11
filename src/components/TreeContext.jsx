import { createContext, useState, useEffect, useContext } from "react";

const TreeContext = createContext();

export function useTrees() {
    return useContext(TreeContext);
}

export function TreeProvider({ children }) {
    const [trees, setTrees] = useState([]);
    const [cart, setCart] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [adoptedTrees, setAdoptedTrees] = useState({});

    // Fetch trees 
    useEffect(() => {
        fetch("https://maps.cityofmadison.com/arcgis/rest/services/Public/OPEN_DATA/MapServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json")
            .then(res => res.json())
            .then(data => {
                setTrees(data.features || []);
            })
            .catch(err => console.error(err));
    }, []);

    const toggleFavorite = (tree) => {
        setFavorites(prev => {
            const isFav = prev.find(t => t.attributes.OBJECTID === tree.attributes.OBJECTID);
            return isFav
                ? prev.filter(t => t.attributes.OBJECTID !== tree.attributes.OBJECTID)
                : [...prev, tree];
        });
    };

    const addToCart = (tree) => {
        if (!cart.find(t => t.attributes.OBJECTID === tree.attributes.OBJECTID)) {
            setCart([...cart, tree]);
        }
    };

    const removeFromCart = (treeId) => {
        setCart(cart.filter(t => t.attributes.OBJECTID !== treeId));
    };

    const adoptTree = (treeId, username) => {
        setAdoptedTrees(prev => ({ ...prev, [treeId]: username }));
        removeFromCart(treeId);
    };

    return (
        <TreeContext.Provider value={{ trees, cart, favorites, adoptedTrees, toggleFavorite, addToCart, removeFromCart, adoptTree }}>
            {children}
        </TreeContext.Provider>
    );
}