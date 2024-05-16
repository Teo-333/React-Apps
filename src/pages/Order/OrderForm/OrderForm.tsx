import React from 'react';
import './OrderForm.css';

const OrderForm: React.FC = () => {
  return (
    <form className="custom-order-form">
      <div className="custom-form-group">
        <label htmlFor="street" className="custom-form-label">Street</label>
        <input type="text" id="street" name="street" className="custom-form-input" />
      </div>
      <div className="custom-form-group">
        <label htmlFor="house" className="custom-form-label">House</label>
        <input type="text" id="house" name="house" className="custom-form-input" />
      </div>
      <button type="submit" className="custom-order-button">Order</button>
    </form>
  );
}

export default OrderForm;
