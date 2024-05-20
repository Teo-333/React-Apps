import { useState, useEffect } from "react";
import getMenuItems from "../api/MenuItemsGetter/getMenuItems";
import { MenuItemType } from '../api/MenuItemsGetter/getMenuItems'; 

interface UseFetchReturn {
    items: MenuItemType[];
    error: string | null;
    updateCategory: (newCategory: string) => void;
}

function useFetch(initialCategory: string = ''): UseFetchReturn {
    const [category, setCategory] = useState<string>(initialCategory);
    const [items, setItems] = useState<MenuItemType[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        console.log(`Fetching menu items for category: ${category}`);
        getMenuItems(category).then(data => {
            setItems(data);
            console.log('Fetch successful:', data);
            localStorage.setItem(`menuItems_${category}`, JSON.stringify(data));
        }).catch(err => {
            setError('Failed to fetch menu items');
            console.error(err);
            localStorage.setItem(`menuItemsError_${category}`, JSON.stringify(err.message || err));
        });
    }, [category]);

    const updateCategory = (newCategory: string) => {
        setCategory(newCategory);
        console.log(`Category updated to: ${newCategory}`);
    };

    return { items, error, updateCategory };
}

export default useFetch;
