import React from 'react';




function Navbar(props) {


    return (
            <div className="header">
                <h1><a href="/"> Bank of recipes</a></h1>
                <ul className="">
                    <li className="">
                        <a className=""  href="/meal" >Meals</a>
                    </li>
                    <li className="">
                        <a href="/random" >Random Meal</a>
                    </li>
                    <li className="">
                        <a href="/wine" >Wine</a>
                    </li>
                </ul>

            </div>
    );
}

export default Navbar;