import React, { useState } from 'react';
// import {useCache} from 'react-api-cache';
import Menue from './components/Menue';
import Favourite from './components/Favourite';
import Card from './components/Card';
import MainCard from './components/MainCard';
import MenueButton from './assets/svg/MenueButton.svg';
import FavouriteClose from './assets/svg/FavouriteClose.svg';

function App() {
    const [randomCheck, setRandomCheck] = useState(false);
    const [categoriesCheck, setCategoriesCheck] = useState(false);
    const [searchCheck, setSearchCheck] = useState(false);
    const [menueOpenedNum, setMenueOpenedNum] = useState(2);
    const [generatedCards, setGeneratedCards] = useState([]);

    const [favouriteCards, setFavouriteCards] = useState([]); //favouriteCards is not iterable

    const [animalButtonActive, setAnimalButtonActive] = useState(false);
    const [careerButtonActive, setCareerButtonActive] = useState(false);
    const [celebrityButtonActive, setCelebrityButtonActive] = useState(false);
    const [devButtonActive, setDevButtonActive] = useState(false);
    const [animalButtonSelected, setAnimalButtonSelected] = useState(2);
    const [careerButtonSelected, setCareerButtonSelected] = useState(2);
    const [celebrityButtonSelected, setCelebrityButtonSelected] = useState(2);
    const [devButtonSelected, setDevButtonSelected] = useState(2);
    const [selectedCategory, setSelectedCategory] = useState('');

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
        if (menueOpenedNum % 2 === 0) {
            menue.style.visibility = 'visible';
            options.style.zIndex = '2';
            setMenueOpenedNum({ menueOpenedNum: menueOpenedNum + 1 });
            console.log('setMenueOpenedNum fired');
        }
        console.log('menueOpenedNum: ', menueOpenedNum);
        if (menueOpenedNum % 2 === 1) {
            console.log('setMenueOpenedNum fired for close');
            let options = document.createElement('img');
            options.src = MenueButton;
            options.className = 'menue-options-button';
            menue.style.visibility = 'hidden';
        }
        setMenueOpenedNum(menueOpenedNum + 1);
    };

    const createMenueIcons = () => {
        return menueOpenedNum % 2 === 0 ? (
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
        if (randomCheck) {
            fetch('https://api.chucknorris.io/jokes/random')
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    console.log('Joke: ', data.value);
                    setGeneratedCards([
                        ...generatedCards,
                        <MainCard joke={data.value} 
                                  setFavourite={setFavourite}
                                   />,
                    ]);
                });
        }
        if (categoriesCheck) {
            console.log('switch hit');
            switch (selectedCategory) {
                case 'animal-button':
                    console.log('animal-button');
                    fetch(
                        'https://api.chucknorris.io/jokes/random?category=animal'
                    )
                        .then((response) => {
                            return response.json();
                        })
                        .then((data) => {
                            console.log('Joke: ', data.value);
                            setGeneratedCards([
                                ...generatedCards,
                                <MainCard joke={data.value} setFavourite={setFavourite} />,
                            ]);
                        });
                    break;

                case 'career-button':
                    console.log('career-button');
                    fetch(
                        'https://api.chucknorris.io/jokes/random?category=career'
                    )
                        .then((response) => {
                            return response.json();
                        })
                        .then((data) => {
                            console.log('Joke: ', data.value);
                            setGeneratedCards([
                                ...generatedCards,
                                <MainCard joke={data.value} setFavourite={setFavourite}/>,
                            ]);
                        });
                    break;

                case 'celebrity-button':
                    console.log('celebrity-button');
                    fetch(
                        'https://api.chucknorris.io/jokes/random?category=celebrity'
                    )
                        .then((response) => {
                            return response.json();
                        })
                        .then((data) => {
                            console.log('Joke: ', data.value);
                            setGeneratedCards([
                                ...generatedCards,
                                <MainCard joke={data.value} setFavourite={setFavourite}/>,
                            ]);
                        });
                    break;
                case 'dev-button':
                    console.log('dev-button');
                    fetch(
                        'https://api.chucknorris.io/jokes/random?category=dev'
                    )
                        .then((response) => {
                            return response.json();
                        })
                        .then((data) => {
                            console.log('Joke: ', data.value);
                            setGeneratedCards([
                                ...generatedCards,
                                <MainCard joke={data.value} setFavourite={setFavourite}/>,
                            ]);
                        });
                    break;
                default:
                    console.log('default');
                    break;
            }
            console.log('query for categories');
        }
        if (searchCheck) {
            let searchValue = document.getElementsByClassName(
                'search-container-input'
            )[0].value;
            console.log(searchValue);

            fetch(
                `https://api.chucknorris.io/jokes/search?query=${searchValue}`
            )
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    let randomNum = Math.floor(Math.random() * 100);
                    let joke = data.result[randomNum].value;
                    console.log(data.result[randomNum].value);
                    setGeneratedCards([
                        ...generatedCards,
                        <MainCard joke={joke} setFavourite={setFavourite}/>,
                    ]);
                })
                .catch((error) => {
                    let input = document.getElementsByClassName(
                        'search-container-input'
                    )[0];
                    alert('Invalid input');
                    input.value = '';
                    console.log(error);
                });
        }
    };

    const setFavourite = (joke) => {  
        setFavouriteCards([
            ...favouriteCards, <Card joke={joke}/>
        ]);
        console.log('favouriteCards: ', favouriteCards); 
        // it's empty the first time and it outputs nothing after the first like 
        window.localStorage.setItem('favourites', JSON.stringify(favouriteCards)); 
        console.log('set to local storage');
    }

    return (
        <div className="app grid">
            <div className="main-section">
                <Menue
                    randomCheck={randomCheck}
                    categoriesCheck={categoriesCheck}
                    searchCheck={searchCheck}
                    menueOpenedNum={menueOpenedNum}
                    generatedCards={generatedCards}
                    animalButtonActive={animalButtonActive}
                    careerButtonActive={careerButtonActive}
                    celebrityButtonActive={celebrityButtonActive}
                    devButtonActive={devButtonActive}
                    animalButtonSelected={animalButtonSelected}
                    careerButtonSelected={careerButtonSelected}
                    celebrityButtonSelected={celebrityButtonSelected}
                    devButtonSelected={devButtonSelected}
                    selectedCategory={selectedCategory}
                    createMenueIcons={createMenueIcons}
                    handleRandomCheck={handleRandomCheck}
                    handleCategoriesCheck={handleCategoriesCheck}
                    handleSearchCheck={handleSearchCheck}
                    handleGetJoke={handleGetJoke}
                    setCareerButtonActive={setCareerButtonActive}
                    setCareerButtonSelected={setCareerButtonSelected}
                    setCelebrityButtonSelected={setCelebrityButtonSelected}
                    setDevButtonSelected={setDevButtonSelected}
                    setCelebrityButtonActive={setCelebrityButtonActive}
                    setDevButtonActive={setDevButtonActive}
                    setAnimalButtonActive={setAnimalButtonActive}
                    setAnimalButtonSelected={setAnimalButtonSelected}
                    setSelectedCategory={setSelectedCategory}
                />
            </div>

            <div className="favourites">
                <Favourite
                    favouriteCards={favouriteCards}
                    // cardLikeCounterId={cardLikeCounterId}
                    // setFavouriteCards={setFavouriteCards}
                />
            </div>
        </div>
    );
}

export default App;
