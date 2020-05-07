import React from 'react';

const Favourite = (props) => {
    console.log('get item: ');
    let cards = JSON.parse(window.localStorage.getItem(`favourites`)); 
    console.log('cards: ', cards);
    
    return (
        <div className="favourite">
            <div className="favourite-title">Favourite</div>

            {/* { cards ? (
                cards.map((card) => {
                    console.log(card.props.joke);
                    return <Card joke={card.props.joke} />;
                    // you're storing the jokes in the localStorage but for 
                    // some reason it is offset by 1 joke like
                })
            ) : (
                <div></div>
            )} */}

            {/*this works  without caching */}
            {props.favouriteCards} 
        </div>
    );
};

export default Favourite;
