import React, { Component } from 'react';
import './longcard.css';

class LongCard extends Component {
    render() {
        return (
            <div className="card col-md-12 longcardBody zeropadding">
                <div className="col-md-12 color"></div>
                <div className="card-block zeropadding">
                    <div className="maincontent">
                        <div className="row">
                            <div className="col-md-4 col-sm-4 h4color">
                                <h4>1580</h4>
                                <p>Shots View</p>
                            </div>
                            <div className="col-md-4 col-sm-4 h4color">
                                <h4>1200</h4>
                                <p>Likes</p>
                            </div>
                            <div className="col-md-4 col-sm-4 h4color">
                                <h4>5100</h4>
                                <p>Comments</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LongCard;