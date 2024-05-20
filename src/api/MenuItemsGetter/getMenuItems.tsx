import axios from 'axios';

export interface MenuItemType {
    id: number;
    meal: string;
    category: string;
    instructions: string;
    price: number;
    img: string;  
}



async function getMenuItems(category: string = ''): Promise<MenuItemType[]> {
    try {
        const response = await axios.get<MenuItemType[]>('https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals');
        if (response.status === 200) {
            return category ? response.data.filter(item => item.category === category) : response.data;
        } else {
            throw new Error(`Failed to fetch data: status ${response.status}`);
        }
    } catch (error: any) {
        console.error("Could not fetch menu items:", error);
        throw new Error(error.message || 'Unknown error');
    }
}

export default getMenuItems;
