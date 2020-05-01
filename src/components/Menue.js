import React from 'react';
import CategoriesSelection from '../components/CategoriesSelection';

const Menue = (props) => {

    const selectCategory = (e) => {
        console.log(e.target.className);
        switch (e.target.className) {
            case 'animal-button':
                props.animalButtonSelected % 2 === 0
                    ? props.setAnimalButtonActive(true)
                    : props.setAnimalButtonActive(false);
                
                props.setCareerButtonActive(false);
                props.setCelebrityButtonActive(false);
                props.setDevButtonActive(false);
                props.setAnimalButtonSelected(props.animalButtonSelected + 1);
                console.log('click from animal button');
                props.setSelectedCategory('animal-button');
                break;

            case 'career-button':
                props.careerButtonSelected % 2 === 0
                    ? props.setCareerButtonActive(true)
                    : props.setCareerButtonActive(false);

                props.setAnimalButtonActive(false);
                props.setCelebrityButtonActive(false);
                props.setDevButtonActive(false);
                props.setCareerButtonSelected(props.careerButtonSelected + 1);
                console.log('click from career button');
                props.setSelectedCategory('career-button');
                break;

            case 'celebrity-button':
                props.celebrityButtonSelected % 2 === 0
                    ? props.setCelebrityButtonActive(true)
                    : props.setCelebrityButtonActive(false);
                
                props.setAnimalButtonActive(false);
                props.setCareerButtonActive(false);
                props.setDevButtonActive(false);
                props.setCelebrityButtonSelected(props.celebrityButtonSelected + 1);
                console.log('click from celebrity button');
                props.setSelectedCategory('celebrity-button');
                break;

            case 'dev-button':
                props.devButtonSelected % 2 === 0
                    ? props.setDevButtonActive(true)
                    : props.setDevButtonActive(false);
                props.setAnimalButtonActive(false);
                props.setCareerButtonActive(false);
                props.setCelebrityButtonActive(false);
                props.setDevButtonSelected(props.devButtonSelected + 1);
                console.log('click from dev button');
                props.setSelectedCategory('dev-button');
                break;

            default: 
                console.log('default');
                break;
        }
        console.log('active button: ', props.selectedCategory);
    };

    return (
        <div className="menue">
            <div className="msi-control">
                <div className="msi-title">MSI 2020</div>
                <div className="options-button-container">
                    {props.createMenueIcons()}
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
                        onClick={props.handleRandomCheck}
                    />
                    <label for="random">Random</label>
                    {props.randomCheck ? (
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
                        onClick={props.handleCategoriesCheck}
                    />
                    <label for="from-categories">From categories</label>
                    {props.categoriesCheck ? (
                        <CategoriesSelection
                            selectCategory={selectCategory}
                            animalButtonActive={props.animalButtonActive}
                            careerButtonActive={props.careerButtonActive}
                            celebrityButtonActive={props.celebrityButtonActive}
                            devButtonActive={props.devButtonActive}
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
                        onClick={props.handleSearchCheck}
                    />
                    <label for="search">Search</label>
                    {props.searchCheck ? (
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

            <button className="get-joke-btn" onClick={props.handleGetJoke}>
                Get a joke
            </button>
            <div className="generated-jokes-container">{props.generatedCards}</div>
        </div>
    );
};

export default Menue;
