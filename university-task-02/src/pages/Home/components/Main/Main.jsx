import { MENUITEMS, BUTTONS } from "../../../../constants/constants";
import './Main.css';
import Tooltip from "../Tooltip/Tooltip.jsx";
import Menu from "../Menu/Menu.jsx";
import BackgroundImg from "../../../../assets/img/Main-Background.svg"

export const Main = () => {
return (
<div className="main_content"> 
<div className="content">
    <h2 className="content-h2">Browse our menu</h2>
    <div className="content-text">
    Use our menu to place an order online, or <Tooltip text="+1 (555) 123-4567"><span className="blue">phone</span></Tooltip> our store to place a pickup order. Fast and fresh food.
    </div>
    <div className="content-buttons">
      {BUTTONS[4].mainButtons.map((button, index) => {
        return <button key={index} id={`main-button-${index}`} className={`main-button main-button-${index}`}>{button}</button>;
      })}
    </div>
    <Menu items={MENUITEMS} />
    <button className="menu-item-button">See more</button>
    </div>
     <div className="content-background">
      <img src={BackgroundImg} alt="Background" className="background-img"/>
    </div> 
  </div>);
};




