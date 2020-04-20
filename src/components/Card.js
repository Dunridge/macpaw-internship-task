import React from 'react';
import LikeButton from '../assets/svg/LikeButton.svg';
import MessageButton from '../assets/svg/MessageButton.svg';

// TODO: use Context API and hooks to pass around data
const Card = () => {
    return (
        <div className="card-grid favourite-card">
            <div className="msg-icon-container">
                <img src={MessageButton} alt="message button" />
            </div>
            <div className="card-content">
                <div className="id-link"> ID: XNaAxUduSw6zANDaIEab7A </div>
                <div className="card-message">TemplateMessage</div>
                <div className="last-update">Last update: 1923 hours ago</div>
            </div>
            <div className="like-icon-contaner">
                <img src={LikeButton} alt="like button" />
            </div>
            
        </div>
    );
};

export default Card;
