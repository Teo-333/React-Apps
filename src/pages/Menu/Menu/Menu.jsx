import React, { Component } from 'react';
import MenuItemsGetter from '../../../api/MenuItemsGetter/MenuItemsGetter.jsx';
import MenuItem from '../MenuItem/MenuItem.jsx';
import './Menu.css';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      error: null,
      itemsToShow: 30
    };
  }

  componentDidMount() {
    MenuItemsGetter()
      .then(data => {
        this.setState({ items: data });
      })
      .catch(err => {
        this.setState({ error: 'Failed to fetch menu items' });
        console.error(err);
      });
  }

  loadMore = () => {
    this.setState(prevState => ({
      itemsToShow: prevState.itemsToShow + 30
    }));
  };

  render() {
    const { handleAddition } = this.props;
    const { items, error, itemsToShow } = this.state;

    if (error) return <div>Error: {error}</div>;
    if (!items.length) return <div>Loading...</div>;

    return (
      <>
        <div className='menu'>
          <div className="menu-grid">
            {items.slice(0, itemsToShow).map(item => (
              <MenuItem key={item.id} item={item} handleAddition={handleAddition} />
            ))}
          </div>
          {itemsToShow < items.length && (
            <button onClick={this.loadMore} className="menu-item-button middle">
              See More
            </button>
          )}
        </div>
      </>
    );
  }
}

export default Menu;
