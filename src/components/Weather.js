import React from "react";

class Weather extends React.Component {
    render() {
        return (
            <div className="weather__info row">
            {/*if this.props.city ==true and this.props.country ==true then add <p>...</p>*/}
                <div className="col-12 col-md-6">
                    {this.props.city && this.props.country && 
                    <p className="weather__key">
                    <span className="weather__value">Location:</span> {this.props.city}, {this.props.country}</p> }

                    {this.props.temperature && 
                    <p className="weather__key">
                    <span className="weather__value">Temperature:</span> {this.props.temperature}</p> }
                </div>
            
                <div className="col-12 col-md-6">
                    {this.props.humidity && 
                    <p className="weather__key">
                    <span className="weather__value">Humidity:</span> {this.props.humidity}</p> }

                    {this.props.description && 
                    <p className="weather__key">
                    <span className="weather__value">Condition:</span> {this.props.description}</p>}
                </div>
                {this.props.error && 
                <p className="weather__error">{this.props.error}</p> }
            </div>
        )
    }
};

export default Weather;