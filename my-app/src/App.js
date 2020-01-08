import React from "react"
import logo from ".logo.svg";
import "./App.css";

const App  =() =>  {

    const APP_ID = '321e254c';

    const APP_KEY = "f40f280708db05a4c629f573d25ec100";

    const exampleReq =`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
    return (
        <div className="App">
            <form className = "search-form">
                <input className = "search-bar" type="text"/>
                <button className ="search-button" type ="submit"> 
                    Search 
                </button>
            </form>
        </div> 
    );
};

export default App;