import React from 'react';
import { BUTTONS } from "../../../constants/constants.js";
import './Main.css';
import Tooltip from "../Tooltip/Tooltip.jsx";
import Menu from "../Menu/Menu.jsx";
import BackgroundImg from "../../../assets/images/Main-Background.svg";
import useFetch from '../../../hooks/useFetch.jsx';



const Main = () => {
  const { items, error, updateCategory } = useFetch();

  return (
    <div className="main_content">
      <div className="content">
        <h1 className="content-h1 blue">Browse our menu</h1>
        <div className="content-text">
          Use our menu to place an order online, or <Tooltip text="+1 (555) 123-4567"><span className="blue">phone</span></Tooltip> our store<p> to place a pickup order. Fast and fresh food.</p>
        </div>
        <div className="content-buttons">
          {BUTTONS[4].mainButtons.map((button) => {
            return <button key={"main-button-" + button + "-key"} id={`main-button-${button}`}  onClick={() => updateCategory(button)} className={`main-button main-button-${button}`}>{button}</button>;
          })}
        </div>
        <Menu items={items} error={error} />
      </div>
      <div className="content-background">
        <img src={BackgroundImg} alt="Background" className="background-img"/>
      </div> 
    </div>
  );
};

export default Main;
