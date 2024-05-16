import { useSelector } from 'react-redux';
import { RootState } from '../../../data/store';
import OrderItem from '../OrderItem/OrderItem';
import OrderForm from '../OrderForm/OrderForm';
import './Main.css';

const Order = () => {
  const items = useSelector((state: RootState) => state.cart.items);

  return (
    <div className="order-page">
      <h1 className="order-title">Finish your order</h1>
      {items.map((item) => (OrderItem(item)))}
      <OrderForm />
    </div>
  );
}

export default Order;
