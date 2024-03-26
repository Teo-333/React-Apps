import React, { Component } from 'react';
import { BUTTONS } from "../../../constants/constants.js";
import './Main.css';
import Tooltip from "../Tooltip/Tooltip.jsx";
import Menu from "../Menu/Menu.jsx";
import BackgroundImg from "../../../assets/images/Main-Background.svg";
import MenuItemsGetter from "../../../api/MenuItemsGetter/MenuItemsGetter.jsx";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MenuItems: []
    };
  }

  componentDidMount() {
    this.fetchMenuItems();
  }

  fetchMenuItems = async () => {
    const items = await MenuItemsGetter();
    this.setState({ MenuItems: items });
  }

  render() {
    const { handleAddition } = this.props;
    const { MenuItems } = this.state;
    
    return (
      <div className="main_content">
        <div className="content">
          <h1 className="content-h1 blue">Browse our menu</h1>
          <div className="content-text">
            Use our menu to place an order online, or <Tooltip text="+1 (555) 123-4567"><span className="blue">phone</span></Tooltip> our store<p> to place a pickup order. Fast and fresh food.</p>
          </div>
          <div className="content-buttons">
            {BUTTONS[4].mainButtons.map((button, index) => {
              return <button key={"main-button-" + index + "-key"} id={`main-button-${index}`} className={`main-button main-button-${index}`}>{button}</button>;
            })}
          </div>
          <Menu items={MenuItems} handleAddition={handleAddition} />
        </div>
        <div className="content-background">
          <img src={BackgroundImg} alt="Background" className="background-img"/>
        </div> 
      </div>
    );
  }
}

export default Main;
