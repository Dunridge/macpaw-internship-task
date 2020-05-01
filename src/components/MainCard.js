import React, { useState } from 'react';
import LikeButton from '../assets/svg/LikeButton.svg';
import MessageButton from '../assets/svg/MessageButton.svg';
import CelebrityButton from '../assets/svg/CelebrityButton.svg';
import EmptyLikeButton from '../assets/svg/EmptyLikeButton.svg';
import Card from '../components/Card';
import ReactDOM from 'react-dom';

const MainCard = (props) => {
    const [cardLike, setCardLike] = useState(false);
    const [cardLikeCounter, setCardLikeCounter] = useState(1);

    const handleCardLike = () => {
        console.log('handle card like fired');
        console.log('cardLikeCounter: ', cardLikeCounter);
        console.log(cardLikeCounter % 2);
        if (cardLikeCounter % 2 === 1) {
            console.log('if fired');
            console.log(setCardLike);
            setCardLike(true);
            // and theoretically speaking you won't need this code:
            let newFavouriteCardDiv = document.createElement('div');
            newFavouriteCardDiv.className =
                'new-favourite-card-' + Math.random().toString(36).substr(2, 9);
            document
                .getElementsByClassName('favourite')[0]
                .appendChild(newFavouriteCardDiv);
            // ----------------------
            /*
            TODO: you've raised the state to the app and now you'll have to create
            a favourite jokes container array in the App component, pass it to the
            MainCard via props and here, in the handleCardLike method of the MainCard
            component, set the state for that container and add new liked cards, then 
            deleted that card by id
            */

            ReactDOM.render(
                <Card joke={props.joke} />,
                document.getElementsByClassName(
                    newFavouriteCardDiv.className
                )[0]
            );
        }
        if (cardLikeCounter % 2 === 0) {
            setCardLike(false);
        }
        setCardLikeCounter(cardLikeCounter + 1);
    };

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
                    <img
                        src={LikeButton}
                        alt="like button"
                        onClick={handleCardLike}
                    />
                ) : (
                    <img
                        src={EmptyLikeButton}
                        alt="empty like button"
                        onClick={handleCardLike}
                    />
                )}
            </div>
            <div className="celebrity-button-container">
                <img src={CelebrityButton} alt="celebrity button" />
            </div>
        </div>
    );
};

export default MainCard;
