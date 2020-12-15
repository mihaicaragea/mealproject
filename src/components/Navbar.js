import React from 'react';



function Navbar(props) {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/meal">Meals</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/random">Random Meal</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/wine">Wines</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        </div>
    );
}

export default Navbar;