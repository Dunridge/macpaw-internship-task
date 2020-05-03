import React, { useState } from 'react';
import Menue from './components/Menue';
import Favourite from './components/Favourite';
//testing imports
import Card from './components/Card';
import MainCard from './components/MainCard';
import MenueButton from './assets/svg/MenueButton.svg';
import FavouriteClose from './assets/svg/FavouriteClose.svg';
//imports everything correctly...

function App() {
    /*
    TODO: raise all of the variables and functions here and pass it down to Favourite section and then 
    change that ReactDOM.render code to setState for a card array in the Favourite section
    
    TODO: (1.3.5(2)) TODO: you've raised the state to the app and now you'll have to create a favourite
    jokes container array in the App component, pass it to the MainCard via props and here, in the 
    handleCardLike method of the MainCard component, set the state for that container and add new 
    liked cards, then deleted that card by id when it get disliked (!!!) (...)
    */

    // console.log(<Card/>);

    //true - display, false - hide
    const [randomCheck, setRandomCheck] = useState(false);
    const [categoriesCheck, setCategoriesCheck] = useState(false);
    const [searchCheck, setSearchCheck] = useState(false);
    const [menueOpenedNum, setMenueOpenedNum] = useState(2);

    // TODO: now you need to pass them to the favourites component
    // TODO: you need to raise setCardLike here and add the card to the array
    const [generatedCards, setGeneratedCards] = useState([]);

    //liked cards to be displayed in Favourites
    const [favouriteCards, setFavouriteCards] = useState([]); //favouriteCards is not iterable
    // setFavouriteCards([...favouriteCards, <Card joke = "test" />])

    console.log(favouriteCards); 

    const setFavourite = (joke) => { //you need to pass JSX as parameters 
        setFavouriteCards([
            ...favouriteCards, <Card joke={joke}/>
        ]);
    }

    //se how to set the state in generatedCards


    // you have to pass the handleCardlike function from the app to the MainCard
    // --> but now you have to think about the identity for the cards
    //---------------

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
                        <MainCard joke={data.value} setFavourite={setFavourite} />,
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

    /*
    const [randomCheck, setRandomCheck] = useState(false);
    const [categoriesCheck, setCategoriesCheck] = useState(false);
    const [searchCheck, setSearchCheck] = useState(false);
    const [menueOpenedNum, setMenueOpenedNum] = useState(2);
    const [generatedCards, setGeneratedCards] = useState([]);
    const [animalButtonActive, setAnimalButtonActive] = useState(false);
    const [careerButtonActive, setCareerButtonActive] = useState(false);
    const [celebrityButtonActive, setCelebrityButtonActive] = useState(false);
    const [devButtonActive, setDevButtonActive] = useState(false);
    const [animalButtonSelected, setAnimalButtonSelected] = useState(2);
    const [careerButtonSelected, setCareerButtonSelected] = useState(2);
    const [celebrityButtonSelected, setCelebrityButtonSelected] = useState(2);
    const [devButtonSelected, setDevButtonSelected] = useState(2);
    const [selectedCategory, setSelectedCategory] = useState('');
    */

    return (
        <div className="app grid">
            <div className="main-section">
                {/* const [favouriteCards, setFavouriteCards] = useState([]); */}
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

                    // favouriteCards={favouriteCards}
                    // setFavouriteCards={setFavouriteCards}
                    // setFavourite={setFavourite}
                />
            </div>

            <div className="favourites">
                {/* const [favouriteCards, setFavouriteCards] = useState([]); */}
                <Favourite
                    favouriteCards={favouriteCards}
                    setFavouriteCards={setFavouriteCards}
                />
            </div>
        </div>
    );
}

export default App;
