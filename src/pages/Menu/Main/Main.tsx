import React from 'react';

import { BUTTONS } from "../../../constants/constants";

import Tooltip from "../Tooltip/Tooltip";
import Menu from "../Menu/Menu";
import BackgroundImg from "../../../assets/images/Main-Background.svg";
import useFetch from '../../../hooks/useFetch';

import './Main.css';


const Main: React.FC = () => {
    const { items, error, updateCategory } = useFetch();

    const mainButtons = "mainButtons" in BUTTONS[4] ? BUTTONS[4].mainButtons : [];

    return (
        <div className="main_content">
            <div className="content">
                <h1 className="content-h1 blue">Browse our menu</h1>
                <div className="content-text">
                    Use our menu to place an order online, or <Tooltip text="+1 (555) 123-4567"><span className="blue">phone</span></Tooltip> our store to place a pickup order. Fast and fresh food.
                </div>
                <div className="content-buttons">
                    {mainButtons.map((button) => (
                        <button key={`main-button-${button}`} id={`main-button-${button}`} onClick={() => updateCategory(button)} className={`main-button main-button-${button}`}>
                            {button}
                        </button>
                    ))}
                </div>
                <Menu items={items} error={error} />
            </div>
            <div className="content-background">
                <img src={BackgroundImg} alt="Background" className="background-img" />
            </div>
        </div>
    );
};

export default Main;
