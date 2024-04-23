import React, { Component } from 'react';
import './MenuItem.css';

class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
      inputValue: 0
    };
  }

  toggleExpand = (e) => {
    e.stopPropagation();
    this.setState(prevState => ({
      isExpanded: !prevState.isExpanded
    }));
  };

  handleSubmit = () => {
    const valueToAdd = Number(this.state.inputValue);
    this.props.handleAddition(valueToAdd);
    this.setState({ inputValue: 0 });
  };

  handleChange = (e) => {
    this.setState({ inputValue: parseInt(e.target.value) || 0 });
  };

  render() {
    const { item } = this.props;
    const { isExpanded, inputValue } = this.state;

    return (
      <div className="menu-item" onClick={() => console.log('Item clicked')}>
        <img src={item.img} alt={item.meal} className="menu-item-image" />
        <h3 className="menu-item-title">{item.meal}</h3>
        <div className={`menu-item-description ${isExpanded ? 'expanded' : ''}`}>
          {item.instructions}
          <button className="read-more" onClick={this.toggleExpand}>{isExpanded ? 'Less' : 'More'}</button>
        </div>
        <div className="menu-item-price">{item.price} USD</div>
        <div className="menu-item-add">
          <input type="number" value={inputValue} min={1} className="menu-item-quantity" onChange={this.handleChange} />
          <button className="menu-item-button" onClick={this.handleSubmit}>Add to cart</button>
        </div>
      </div>
    );
  }
}

export default MenuItem;
