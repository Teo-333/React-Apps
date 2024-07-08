
import './OrderItem.css'

import { CartItem } from '../../../data/cartSlice';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../../data/cartSlice';

const OrderItem = (item: CartItem) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  return(
    <div className="order-item">
      <img src={item.img} alt={item.meal} className="order-item-image" />
      <h3 className='order-item-title'>{item.meal}</h3>
      <p className='order-item-price'>{item.price}</p>
      <input type="number" className='order-item-quantity' value={item.quantity}></input>
      <button className='order-item-button' onClick={handleRemove}>Remove</button>
    </div>
  )
}

export default OrderItem;