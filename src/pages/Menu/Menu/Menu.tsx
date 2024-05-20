import React, { useState, useCallback } from 'react';

import MenuItem from '../MenuItem/MenuItem';
import { MenuItemType } from '../../../api/MenuItemsGetter/getMenuItems';

import './Menu.css';


export interface MenuProps {
  items: MenuItemType[];
  error: string | null;
}


const Menu: React.FC<MenuProps> = ({ items, error }) => {
    const [itemsToShow, setItemsToShow] = useState<number>(30);


    const loadMore = useCallback(() => {
        if (items && items.length > itemsToShow) {
            setItemsToShow(prevItemsToShow => prevItemsToShow + 30);
        }
    }, [items, itemsToShow]);

    if (error) {
        return <div>Error: {error}</div>;
    }


    if (!items || items.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className='menu'>
            <div className="menu-grid">
                {items.slice(0, itemsToShow).map(item => (
                    <MenuItem key={item.id} item={item} />
                ))}
            </div>
            {itemsToShow < items.length && (
                <button onClick={loadMore} className="menu-item-button middle">
                    See More
                </button>
            )}
        </div>
    );
};

export default Menu;
