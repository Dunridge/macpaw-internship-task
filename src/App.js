import React from 'react';
import Menue from './components/Menue';
import Card from './components/Card';
import Favourite from './components/Favourite';

function App() {
    return (
        // TODO: use grid area to position the elements
        // TODO: use the Mobile First Approach!
        <div className="app grid">
            <div className="main-section">
                <Menue />
            </div>

            <div className="favourites">
                <Favourite />
            </div>
        </div>
    );
}

export default App;
