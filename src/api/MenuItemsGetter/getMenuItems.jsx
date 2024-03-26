import axios from 'axios';

async function getMenuItems(category = '') {
    try {
        const response = await axios.get('https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals');

        if (response.status === 200 && response.data) {
            if (category) {
                return response.data.filter(item => item.category === category);
            }
            return response.data;
        } else {
            throw new Error(`Failed to fetch data: status ${response.status}`);
        }
    } catch (error) {
        console.error("Could not fetch menu items:", error);
        throw error;
    }
}

export default getMenuItems;
