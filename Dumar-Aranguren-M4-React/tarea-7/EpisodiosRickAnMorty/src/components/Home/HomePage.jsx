import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div>
            <h1>Bienvenido a la página de Rick and Morty</h1>
            <h3>Enlaces rápidos</h3>
            <Link to="/characters">
                <p>
                    <b>
                        Ir a personajes
                    </b>
                </p>
            </Link><br />
            <Link to="/episodes">
                <p>
                    <b>
                        Ir a episodios
                    </b>
                </p>

            </Link>
        </div>
    );
}

export default HomePage;
