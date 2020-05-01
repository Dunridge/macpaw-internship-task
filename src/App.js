import React from 'react';
import Menue from './components/Menue';
import Favourite from './components/Favourite';

function App() {
    
    return (
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
