import React, { useState } from 'react';
import MainCard from './MainCard';
import MenueButton from '../assets/svg/MenueButton.svg';
import FavouriteClose from '../assets/svg/FavouriteClose.svg';
import CategoriesSelection from '../components/CategoriesSelection';

const Menue = (props) => {
    //true - display, false - hide
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
                        <MainCard joke={data.value} />,
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
                                <MainCard joke={data.value} />,
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
                                <MainCard joke={data.value} />,
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
                                <MainCard joke={data.value} />,
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
                                <MainCard joke={data.value} />,
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
                        <MainCard joke={joke} />,
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

    const selectCategory = (e) => {
        console.log(e.target.className);
        switch (e.target.className) {
            case 'animal-button':
                animalButtonSelected % 2 === 0
                    ? setAnimalButtonActive(true)
                    : setAnimalButtonActive(false);
                
                setCareerButtonActive(false);
                setCelebrityButtonActive(false);
                setDevButtonActive(false);
                setAnimalButtonSelected(animalButtonSelected + 1);
                console.log('click from animal button');
                setSelectedCategory('animal-button');
                break;

            case 'career-button':
                careerButtonSelected % 2 === 0
                    ? setCareerButtonActive(true)
                    : setCareerButtonActive(false);

                setAnimalButtonActive(false);
                setCelebrityButtonActive(false);
                setDevButtonActive(false);
                setCareerButtonSelected(careerButtonSelected + 1);
                console.log('click from career button');
                setSelectedCategory('career-button');
                break;

            case 'celebrity-button':
                celebrityButtonSelected % 2 === 0
                    ? setCelebrityButtonActive(true)
                    : setCelebrityButtonActive(false);
                
                setAnimalButtonActive(false);
                setCareerButtonActive(false);
                setDevButtonActive(false);
                setCelebrityButtonSelected(celebrityButtonSelected + 1);
                console.log('click from celebrity button');
                setSelectedCategory('celebrity-button');
                break;

            case 'dev-button':
                devButtonSelected % 2 === 0
                    ? setDevButtonActive(true)
                    : setDevButtonActive(false);
                setAnimalButtonActive(false);
                setCareerButtonActive(false);
                setCelebrityButtonActive(false);
                setDevButtonSelected(devButtonSelected + 1);
                console.log('click from dev button');
                setSelectedCategory('dev-button');
                break;

            default: 
                console.log('default');
                break;
        }
        console.log('active button: ', selectedCategory);
    };


    /*
    props.createMenueIcons()
    */

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
                        <CategoriesSelection
                            selectCategory={selectCategory}
                            animalButtonActive={animalButtonActive}
                            careerButtonActive={careerButtonActive}
                            celebrityButtonActive={celebrityButtonActive}
                            devButtonActive={devButtonActive}
                        />
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
                                className="search-container-input"
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

export default Menue;
