import React, { Component } from 'react';
import './financial.css';

class Financial extends Component {
    render() {
        return (
            <div className="card maincard col-sm-12">
                <div className="card-block followersText">
                    <h2 className="card-title">{this.props.create.num}</h2>
                    <p className="card-text">{this.props.create.description}</p>
                </div>
            </div>
        );
    }
}

export default Financial;