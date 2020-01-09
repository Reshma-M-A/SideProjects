import React, {useEffect, useState} from "react"
// eslint-disable-next-line
import logo from "./logo.svg"; 
import "./App.css";

const App  =() =>  {

    const APP_ID = '321e254c';

    const APP_KEY = "f40f280708db05a4c629f573d25ec100";
    // eslint-disable-next-line
    const exampleReq =`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
  

    const [counter, setCounter] = useState(0);


    useEffect(() => {
      console.log("Effect has been run");
    }, []);


    return (
        <div className="App">
            <form className = "search-form">
                <input className = "search-bar" type="text"/>
                <button className ="search-button" type ="submit"> Search </button>
            </form>
            <h1 onClick ={() => setCounter(counter+1)} >{counter}</h1> 
        </div> 
    );
};

export default App;