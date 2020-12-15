import React from 'react';
import styled from 'styled-components';

const NavStyle = styled.div`
  background-color: midnightblue;
`


function Navbar(props) {

    return (
        <NavStyle>

            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link" href="/meal" style={{"color": "white"}}>Meals</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/random" style={{"color": "white"}}>Random Meal</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/wine" style={{"color": "white"}}>Wine</a>
                </li>
            </ul>

        </NavStyle>
    );
}

export default Navbar;