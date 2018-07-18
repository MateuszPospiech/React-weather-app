import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "5b249cc904f62fc89ca1e8d767844c39";

class App extends React.Component {
    //Arrow function don't work below v16 of react
    //fatch api instead of method: 'GET'
    getWeather = async (e) => {
        //preventDefault ->do not reload all website
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
        
    //convert response to JSON
        const data = await api_call.json();
        
        console.log(data);
    }
    render() {
        return(
        <div>
            <Titles />
            {/*props*/}
            <Form getWeather={this.getWeather}/>
            <Weather />
        </div>
        );
    }
};

export default App;