import React, {useEffect, useState} from "react";
// eslint-disable-next-line
import logo from "./logo.svg"; 
import "./App.css";

const App  =() =>  {

    const APP_ID = '321e254c';

    const APP_KEY = "f40f280708db05a4c629f573d25ec100";

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
      getReceipes();
    }, []);

    // fetching all of our data
    // making async calls
    const getReceipes = async () => {
      //not going to arrive instantly
      const response = await fetch (`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data = await response.json();
      setRecipes(data.hits);
    }

    return (
        <div className="App">
            <form className = "search-form">
                <input className = "search-bar" type="text"/>
                <button className ="search-button" type ="submit"> Search </button>
            </form>
        </div> 
    );
};

export default App;