import { useState, useEffect } from "react";
import getMenuItems from "../api/MenuItemsGetter/getMenuItems";

function useFetch(initialCategory = '') {
    const [category, setCategory] = useState(initialCategory);
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log(`Fetching menu items for category: ${category}`);

        getMenuItems(category)
            .then(data => {
                setItems(data);
                console.log('Fetch successful:', data);
                localStorage.setItem(`menuItems_${category}`, JSON.stringify(data));
            })
            .catch(err => {
                setError('Failed to fetch menu items');
                console.error(err);
                localStorage.setItem(`menuItemsError_${category}`, JSON.stringify(err.message || err));
            });
    }, [category]); 

    const updateCategory = (newCategory) => {
        setCategory(newCategory);
        console.log(`Category updated to: ${newCategory}`);
    };

    return { items, error, updateCategory };
}

export default useFetch;
