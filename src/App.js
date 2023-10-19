import React from "react";

const APIKEY =  require('./keys.js');
const App = () => {
    console.log(APIKEY);
    return (
        <>
        <h1>My App</h1>
        <h2>Hello</h2>
        <h2>{APIKEY}</h2>
        </>
        
    )
}

export default App;