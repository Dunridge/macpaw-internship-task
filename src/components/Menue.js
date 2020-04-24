import React, { useState } from 'react';
import MainCard from './MainCard';
import MenueButton from '../assets/svg/MenueButton.svg';
import AnimalButton from '../assets/svg/AnimalButton.svg';
import CareerButton from '../assets/svg/CareerButton.svg';
import CelebrityButton from '../assets/svg/CelebrityButton.svg';
import DevButton from '../assets/svg/DevButton.svg';
import FavouriteClose from '../assets/svg/FavouriteClose.svg';
import ReactDOM from 'react-dom';

// TODO: you'll have to pass the liked cards up to the App component
// and then pass them down to the favourites section and call setState
const Menue = (props) => {
    //true - display, false - hide
    const [randomCheck, setRandomCheck] = useState(false);
    const [categoriesCheck, setCategoriesCheck] = useState(false);
    const [searchCheck, setSearchCheck] = useState(false);
    const [menueOpenedNum, setMenueOpenedNum] = useState(2);
    const [generatedCards, setGeneratedCards] = useState([]);
    //defining the card like functionality
    // const [cardLike, setCardLike] = useState(false);
    // const [cardLikeCounter, setCardLikeCounter] = useState(1);
    //set cards liked here
    // const {
    //     likedCards: [likedCards, setLikedCards]
    // } = {
    //     likedCards: useState([]),
    //         ...(props.state || {}) //TODO --> but first you have to decompose it
    // };

    //Here you'll create a string for the kind of joke that you'll be querying and these handlers with set them off
    const handleRandomCheck = (e) => {
        setRandomCheck({ randomCheck: !randomCheck });
    };

    const handleCategoriesCheck = (e) => {
        setCategoriesCheck({ categoriesCheck: !categoriesCheck });
    };

    const handleSearchCheck = (e) => {
        setSearchCheck({ searchCheck: !searchCheck });
    };

    const handleMenueClick = () => {
        let menue = document.getElementsByClassName('favourites')[0];
        let options = document.getElementsByClassName(
            'menue-options-button'
        )[0];
        let close = document.getElementsByClassName(
            'menue-options-button-close'
        )[0];
        if (menueOpenedNum % 2 == 0) {
            menue.style.visibility = 'visible';
            options.style.zIndex = '2';
            setMenueOpenedNum({ menueOpenedNum: menueOpenedNum + 1 });
            console.log('setMenueOpenedNum fired');
        }
        console.log('menueOpenedNum: ', menueOpenedNum);
        if (menueOpenedNum % 2 == 1) {
            console.log('setMenueOpenedNum fired for close');
            let options = document.createElement('img');
            options.src = MenueButton;
            options.className = 'menue-options-button';
            menue.style.visibility = 'hidden';
        }
        setMenueOpenedNum(menueOpenedNum + 1);
    };

    const createMenueIcons = () => {
        return menueOpenedNum % 2 == 0 ? (
            <img
                className="menue-options-button"
                src={MenueButton}
                alt="menue button"
                onClick={handleMenueClick}
            />
        ) : (
            <img
                className="menue-options-button-close"
                src={FavouriteClose}
                alt="menue button"
                onClick={handleMenueClick}
            />
        );
    };

    const handleGetJoke = () => {
        /*
        const [randomCheck, setRandomCheck] = useState(false);
        const [categoriesCheck, setCategoriesCheck] = useState(false);
        const [searchCheck, setSearchCheck] = useState(false);
        */
        //TODO: just switch through the booleans at the start of the function and get the joke you need
        if (randomCheck) {
            fetch('https://api.chucknorris.io/jokes/random')
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    console.log('Joke: ', data.value); //TODO: you'll have to remove handleCardLike
                    // console.log(setCardLikeCounter);
                    setGeneratedCards([
                        ...generatedCards,
                        <MainCard joke={data.value} />,
                    ]);
                });
        }
        if(categoriesCheck) {
            // TODO: query for categories 
            console.log('query for categories');
        }
        if (searchCheck) {
            // TODO: query for search 
            console.log('guery for search');
        }
    };

    return (
        <div className="menue">
            <div className="msi-control">
                <div className="msi-title">MSI 2020</div>
                <div className="options-button-container">
                    {createMenueIcons()}
                    <div className="options-title">Favourite</div>
                </div>
            </div>

            <div className="greeting">Hey!</div>
            <div className="joke-proposal">
                Let's try to find a joke for you:
            </div>

            <div className="options-container">
                <form className="radio">
                    <input
                        type="radio"
                        id="random"
                        name="options"
                        value="random"
                        onClick={handleRandomCheck}
                    />
                    <label for="random">Random</label>
                    {randomCheck ? (
                        <div style={{ display: 'none' }}>Hi</div>
                    ) : (
                        <div style={{ display: 'none' }}>Bye</div>
                    )}
                    <br />

                    <input
                        type="radio"
                        id="from-categories"
                        name="options"
                        value="from categories"
                        onClick={handleCategoriesCheck}
                    />
                    <label for="from-categories">From categories</label>
                    {categoriesCheck ? (
                        <div className="from-categories-container">
                            <img src={AnimalButton} alt="menue button" />
                            <img src={CareerButton} alt="menue button" />
                            <img src={CelebrityButton} alt="menue button" />
                            <img src={DevButton} alt="menue button" />
                        </div>
                    ) : (
                        <div className="hide"></div>
                    )}
                    <br />
                    <input
                        type="radio"
                        id="search"
                        name="options"
                        value="search"
                        onClick={handleSearchCheck}
                    />
                    <label for="search">Search</label>
                    {searchCheck ? (
                        <div className="search-container">
                            <input
                                type="text"
                                placeholder="Free text search..."
                            />
                        </div>
                    ) : (
                        <div className="hide"></div>
                    )}
                </form>
            </div>

            <button className="get-joke-btn" onClick={handleGetJoke}>
                Get a joke
            </button>
            <div className="generated-jokes-container">{generatedCards}</div>
        </div>
    );
};

// TODO: create the handleLike function in the Menue and then pass it via props to the MainCard component

export default Menue;
