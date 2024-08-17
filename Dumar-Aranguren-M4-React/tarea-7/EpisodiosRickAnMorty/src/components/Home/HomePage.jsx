import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div>
            <h1 className='drip-october'>Bienvenido a la página de Rick and Morty</h1>
            <nav className='HomePage'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/characters">Characters</Link></li>
                    <li><Link to="/locations">Locations</Link></li>
                    <li><Link to="/episodes">Episodes</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default HomePage;
