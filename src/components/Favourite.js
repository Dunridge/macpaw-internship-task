import React from 'react';
import Card from '../components/Card';

const Favourite = (props) => {
    console.log('get item: ');
    //TODO: set a check for null here: if it's null then set an empty array
    // console.log('previousId: ', previousId);
    let cards = JSON.parse(window.localStorage.getItem(`favourites`)); //was .concat(props.cardLikeCounterId)
    console.log('cards: ', cards);
    // console.log(cards[0].props.joke); // props can't be accessed on the second render
    // JSON.parse(localStorage.getItem('favourites'))[0].props.joke // this works in a browser
    // you can set an empty card and assign display none to it 

    return (
        <div className="favourite">
            <div className="favourite-title">Favourite</div>

            { cards ? (
                cards.map((card) => {
                    console.log(card.props.joke);
                    return <Card joke={card.props.joke} />;
                    // you're storing the jokes in the localStorage but for 
                    // some reason it is offset by 1 joke like
                })
            ) : (
                <div></div>
            )}

            {/*this works  without caching */}
            {/* {props.favouriteCards}  */}
        </div>
    );
};

export default Favourite;
