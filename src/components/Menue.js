import React from 'react';
import MainCard from './MainCard';
import MenueButton from '../assets/svg/MenueButton.svg';

const Menue = () => {
    return (
        <div className="menue">
            <div className="msi-control">
                <div className="msi-title">MSI 2020</div>
                <div className="options-button-container">
                    <img src={MenueButton} alt="menue button" />
                    <div className="options-title">Favourite</div>
                </div>
            </div>

            <div className="greeting">Hey!</div>
            <div className="joke-proposal">
                Let's try to find a joke for you:
            </div>

            <div className="options-container">
                <div className="radio random">
                    <input
                        type="radio"
                        name="radSize"
                        id="sizeSmall"
                        value="small"
                        checked="checked"
                    />
                    <label for="sizeSmall">Random</label>
                </div>

                <div className="radio from-categories">
                    <input
                        type="radio"
                        name="radSize"
                        id="sizeMed"
                        value="medium"
                    />
                    <label for="sizeMed">From categories</label>
                </div>

                <div className="radio search">
                    <input
                        type="radio"
                        name="radSize"
                        id="sizeLarge"
                        value="large"
                    />
                    <label for="sizeLarge">Search</label>
                </div>
            </div>

            <button className="get-joke-btn">Get a joke</button>

            <MainCard />
        </div>
    );
};

export default Menue;
