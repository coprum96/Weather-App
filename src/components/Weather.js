import React from "react";
// import '/styles.css';
import {Card} from 'semantic-ui-react'

const CardExampleCard = ({weatherData}) => (
    <Card>
        <Card.Content>
            <Card.Header className="header">{weatherData.name}</Card.Header>
            <p>Temperatur: {weatherData.main.temp} C*</p>
            <p>Sunrise: {weatherData.main.sunrise}</p>
            <p>Sunset: {weatherData.main.sunset}</p>
            <p>Description: {weatherData.weather[0].description}</p>
        </Card.Content>
    </Card>
)

export default CardExampleCard;