import React, { Component } from 'react';
import './smallcard.css';

class SmallCard extends Component {
    render() {
        return (
            <div className="col-md-12 smallcardbody">
                <div class="col-md-12 card smallcard" id={this.props.id}>
                    <p>{this.props.about}</p>
                    <h2>{this.props.number}</h2>

                </div>
                <div className="col-md-12 zeropadding">
                    <div class="card-block white">
                    </div>
                </div>
            </div>
        );
    }
}

export default SmallCard;