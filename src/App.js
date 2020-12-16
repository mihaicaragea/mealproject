import React from 'react';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Wine from "./layout/Wine";
import Random from "./layout/Random";
import Meals from "./layout/Meals";
import MealDetails from "./layout/MealDetails";
import WineDetails from "./layout/WineDetails";
import "./App.css"



function App() {

  return (

    <div className="App">
        <Navbar/>

        <Router>
            <Route exact path={'/meal'} component={Meals}/>
            <Route path={'/random'} component={Random}/>
            <Route exact path={'/wine'} component={Wine}/>
            <Route path={'/meal/:id'} component={MealDetails}/>
            <Route path={'/wine/:name'} component={WineDetails}/>
        </Router>

    </div>

  );
}

export default App;
