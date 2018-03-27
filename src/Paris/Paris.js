import React, { Component } from 'react';
import './Paris.css';

class ParisWeather extends Component {
    render() {
        return (
            <div className="col-md-12 col-sm-12 resize" >
                <div class="card ParisColor">
                    <div class="card-block ParisInside">
                        <h1 class="card-title">{this.props.degree}°</h1>
                        <p class="card-text">{this.props.city}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ParisWeather;