import React, { useState } from 'react';
import AnimalButton from '../assets/svg/AnimalButton.svg';
import CareerButton from '../assets/svg/CareerButton.svg';
import CelebrityButton from '../assets/svg/CelebrityButton.svg';
import DevButton from '../assets/svg/DevButton.svg';

//it's working!!!
// TODO: now replace the hi div tags with actual buttons 
// Figma template did not provide any svg images for all disabled buttons, using the same buttons...
// true ? enabled : disabled 
const CategoriesSelection = (props) => {
    return ( 
        <div className="from-categories-container">
                            {props.animalButtonActive ? (
                                <img src={AnimalButton} alt="menue button" onClick={props.selectCategory} className = "animal-button" style={ {background: "red" } }/>
                            ) : (
                                <img src={AnimalButton} alt="menue button" onClick={props.selectCategory} className = "animal-button"/>
                            )}
                            {props.careerButtonActive ? (
                                <img src={CareerButton} alt="menue button" onClick={props.selectCategory} className = "career-button" style={ {background: "red" } }/>
                            ) : (
                                <img src={CareerButton} alt="menue button" onClick={props.selectCategory} className = "career-button"/>
                            )}
                            {props.celebrityButtonActive ? (
                                <img src={CelebrityButton} alt="menue button" onClick={props.selectCategory} className = "celebrity-button" style={ {background: "red" } }/>
                            ) : (
                                <img src={CelebrityButton} alt="menue button" onClick={props.selectCategory} className = "celebrity-button"/>
                            )}
                            {props.devButtonActive ? (
                                <img src={DevButton} alt="menue button" onClick={props.selectCategory} className = "dev-button" style={ {background: "red" } }/>
                            ) : (
                                <img src={DevButton} alt="menue button" onClick={props.selectCategory} className = "dev-button"/>
                            )}
                            
                        </div>
     );
}
 
export default CategoriesSelection;