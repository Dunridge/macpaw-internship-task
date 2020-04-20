import React, {useState} from 'react';
import MainCard from './MainCard';
import MenueButton from '../assets/svg/MenueButton.svg';
import AnimalButton from '../assets/svg/AnimalButton.svg';
import CareerButton from '../assets/svg/CareerButton.svg';
import CelebrityButton from '../assets/svg/CelebrityButton.svg';
import DevButton from '../assets/svg/DevButton.svg';

const Menue = () => {

    //consider using useEffect hook 
    // call useEffect hook and when you choose another value, set the display value for CSS as none 
    // useEffect(() => { //
    //     effect
    //     return () => {
    //         cleanup
    //     }
    // }, [input]) 

    //true - display, false - hide 
    const [randomCheck, setRandomCheck] = useState(false);
    const [categoriesCheck, setCategoriesCheck] = useState(false);
    const [searchCheck, setSearchCheck] = useState(false);
    /* this is caused by the fact that you can't check 
    your radio buttons repeatadly --> set the ability 
    to check your buttons over and over again */
    

    const handleRandomCheck = (e) => {
        setRandomCheck({ randomCheck: !randomCheck });
    }

    const handleCategoriesCheck = (e) => {
        setCategoriesCheck({categoriesCheck: !categoriesCheck});
    }

    const handleSearchCheck = (e) => {
        setSearchCheck({searchCheck: !searchCheck});
    }

    return (
        <div className="menue">
            <div className="msi-control">
                <div className="msi-title">MSI 2020</div>
                <div className="options-button-container">
                    <img src={MenueButton} alt="menue button" />
                    <div className="options-title">Favourite</div>
                </div>
            </div>

            <div className="greeting">Hey!</div>
            <div className="joke-proposal">
                Let's try to find a joke for you:
            </div>

            <div className="options-container">
                <form className="radio">
                    <input type="radio" id="random" name="options" value="random" onClick={handleRandomCheck} />
                    <label for="random">Random</label>
                    {randomCheck ? (
                        <div style={{display: "none"}}>Hi</div>
                    ) : (
                        <div style={{display: "none"}}>Bye</div>
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
                    ):(
                        <div className = "hide"></div>
                    ) }
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
                            <input type="text" placeholder="Free text search..."/>
                        </div>
                    ) : (
                        <div className="hide">
                            
                        </div>
                    )}
                </form>
            </div>

            <button className="get-joke-btn">Get a joke</button>
            <MainCard />
        </div>
    );
};

export default Menue;
