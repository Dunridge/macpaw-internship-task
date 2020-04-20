import React from 'react';
import LikeButton from '../assets/svg/LikeButton.svg';
import MessageButton from '../assets/svg/MessageButton.svg';
import CelebrityButton from '../assets/svg/CelebrityButton.svg';

const MainCard = () => {
    return (
        <div className="main-card-grid main-card">
            <div className="message-button-container">
                <img src={MessageButton} alt="message button" />
            </div>
            <div className="main-card-content">
                <div className="main-id-link"> ID: XNaAxUduSw6zANDaIEab7A </div>
                <div className="main-card-message">TemplateMessage</div>
            </div>
            <div className="main-last-update">Last update: 1923 hours ago</div>
            <div className="like-button-container">
                <img src={LikeButton} alt="like button" />
            </div>
            <div className="celebrity-button-container">
                <img src={CelebrityButton} alt="celebrity button" />
            </div>
        </div>
    );
};

export default MainCard;
