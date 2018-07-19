import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "5b249cc904f62fc89ca1e8d767844c39";

class App extends React.Component {
    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
    }
    //Create method getWeather
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
        //country and city === true
        if (city && country) {
            this.setState({
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                error: ''
            });
        }
        //error
        else {
            this.setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                error: "Please enter city and coutry name. For example Berlin Germany"
            });
        }

    }
    render() {
        return ( 
        <div>
            <div className = "wrapper">
                <div className = "container main title-container">
                    <div className="row">
                        <div className = "col-12">
                            <Titles />
                            <Form getWeather = {this.getWeather}/>
                        </div>
                        <div className = "col-12" > 
                        { /*props*/ }
                        <Weather temperature = {this.state.temperature}
                            city = {this.state.city}
                            country = {this.state.country}
                            humidity = {this.state.humidity}
                            description = {this.state.description}
                            error = {this.state.error}
                        /> 
                        </div>
                    </div>
                </div> 
            </div > 
        </div>
        );
    }
};

export default App;
