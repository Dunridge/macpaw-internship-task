import React from 'react';


const Favourite = (props) => {
    return (
        <div className="favourite">
            <div className="favourite-title">Favourite</div>
            {props.favouriteCards}
        </div>
    );
};

export default Favourite;
