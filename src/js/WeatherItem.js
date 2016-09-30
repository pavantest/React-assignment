import React from 'react';
import styles from '../css/styles.scss';

// Create class called HelloBox that extends the base React Component class
export default class WeatherItem extends React.Component {
    constructor() {
        super();
    }

    // Rendering list item with icon depending on the type of the object
     render() {
        return <label>
       		{this.props.city + " " +this.props.temperature+"° "}  
       		<span className= {'glyphicon '+(this.props.type == 'sunny'? 'glyphicon-certificate' : 'glyphicon-cloud')}></span></label>
    }
}