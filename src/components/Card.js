import React, { useState } from 'react';
import LikeButton from '../assets/svg/LikeButton.svg';
import EmptyLikeButton from '../assets/svg/EmptyLikeButton.svg';
import MessageButton from '../assets/svg/MessageButton.svg';

// TODO: use Context API and hooks to pass around data
// TODO: you'll pass cards here that will aready be liked --> you don't have to implement the like functionality
const Card = (props) => {

    return (
        <div className="card-grid favourite-card">
            <div className="msg-icon-container">
                <img src={MessageButton} alt="message button" />
            </div>
            <div className="card-content">
                <div className="id-link"> ID: XNaAxUduSw6zANDaIEab7A </div>
                <div className="card-message">{props.joke}</div>
                <div className="last-update">Last update: 1923 hours ago</div>
            </div>
            <div className="like-icon-contaner">
                <img
                    src={LikeButton}
                    alt="like button"
                />
            </div>
        </div>
    );
};

export default Card;
