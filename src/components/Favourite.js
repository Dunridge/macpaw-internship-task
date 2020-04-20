import React from 'react';
import Card from './Card';


const Favourite = () => {
    return (
        <div className="favourite">
            <div className="favourite-title">Favourite</div>
            <Card/>
            <Card/>
            <Card/>
        </div>
    );
};

export default Favourite;
