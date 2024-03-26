import { useState, useEffect } from "react";
import getMenuItems from "../api/MenuItemsGetter/getMenuItems";

function useMenuItems(initialCategory = '') {
    const [category, setCategory] = useState(initialCategory);
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
         getMenuItems(category)
            .then(data => {
                setItems(data);
            })
            .catch(err => {
                setError('Failed to fetch menu items');
                console.error(err);
            });
    }, [category]); 

    const updateCategory = (newCategory) => {
        setCategory(newCategory);  
    };

    return { items, error, updateCategory };
}

export default useMenuItems;
