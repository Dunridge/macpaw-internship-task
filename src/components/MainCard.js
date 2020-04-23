import React, {useState} from 'react';
import LikeButton from '../assets/svg/LikeButton.svg';
import MessageButton from '../assets/svg/MessageButton.svg';
import CelebrityButton from '../assets/svg/CelebrityButton.svg';
import EmptyLikeButton from '../assets/svg/EmptyLikeButton.svg';

const MainCard = (props) => {
    const [cardLike, setCardLike] = useState(false);
    const [cardLikeCounter, setCardLikeCounter] = useState(1);

    const handleCardLike = () => {
        // console.log("handleCardLike fired")
        if(cardLikeCounter % 2 === 1) {
            setCardLike(true);
        }
        if(cardLikeCounter % 2 === 0) {
            setCardLike(false);
        }
        setCardLikeCounter(cardLikeCounter + 1);
    }

    return (
        <div className="main-card-grid main-card">
            <div className="message-button-container">
                <img src={MessageButton} alt="message button" />
            </div>
            <div className="main-card-content">
                <div className="main-id-link"> ID: XNaAxUduSw6zANDaIEab7A </div>
                <div className="main-card-message">{props.joke}</div>
            </div>
            <div className="main-last-update">Last update: 1923 hours ago</div>
            <div className="like-button-container">
                {cardLike ? (
                    <img src={LikeButton} alt="like button" onClick={handleCardLike} />
                ):(
                    <img src={EmptyLikeButton} alt="empty like button" onClick={handleCardLike}/>
                )}
            </div>
            <div className="celebrity-button-container">
                <img src={CelebrityButton} alt="celebrity button" />
            </div>
        </div>
    );
};

export default MainCard;
