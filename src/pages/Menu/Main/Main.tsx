import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllMeals, fetchMealsByCategory } from '../../../api/apiSlice';
import { RootState, AppDispatch } from '../../../data/store';

import { BUTTONS } from "../../../constants/constants";

import Tooltip from "../Tooltip/Tooltip";
import Menu from "../Menu/Menu";
import BackgroundImg from "../../../assets/images/Main-Background.svg";

import './Main.css';

const Main: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const items = useSelector((state: RootState) => state.meals.meals);
  const status = useSelector((state: RootState) => state.meals.status);
  const error = useSelector((state: RootState) => state.meals.error);

  useEffect(() => {
    dispatch(fetchAllMeals());
  }, [dispatch]);

  const updateCategory = (category: string) => {
    dispatch(fetchMealsByCategory(category));
  };

  const mainButtons = "mainButtons" in BUTTONS[4] ? BUTTONS[4].mainButtons : [];

  return (
    <div className="main_content">
      <div className="content">
        <h1 className="content-h1 blue">Browse our menu</h1>
        <div className="content-text">
          Use our menu to place an order online, or <Tooltip text="+1 (555) 123-4567"><span className="blue">phone</span></Tooltip> our store to place a pickup order. Fast and fresh food.
        </div>
        <div className="content-buttons">
          {BUTTONS[4].mainButtons?.map((button) => (
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
