import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//components
import Financial from '../financial/financial';
import ParisWeather from '../Paris/Paris';
import Longcard from '../longCard/longcard';
import SmallCard from '../smallcard/smallcard';

class App extends Component {
  constructor(props) {
    super(props);


    this.state = {
      array: [
        {
          description: "New followers added this month",
          num: 20,
          id: "jnadj31"
        },
        {
          description: "Averge monthly income",
          num: "$ 1250",
          id: "jmdk13"
        },
        {
          description: "Yearly income",
          num: "$ 13850",
          id: "4141"
        }
      ]
    }
  }

  CreateFinancial = () => {
    const list = this.state.array.map((create) =>
      <div className="col-md-4 maxWidth" key={create.id}>
        <Financial create={create} money={create.num} desciption={create.description} />
      </div>
    );
    return (list);
  }



  render() {
    return (
      <div className="App">
        <div className="firstSection">
          <div className="row">
            {/* cards columns */}
            <div className="col-sm-9 nopadding">
              <div className="row">
                {this.CreateFinancial()}
                <Longcard />
                <Longcard />
              </div>
            </div>
            {/* Paris Column */}
            <div className="col-sm-3">
              <div className="row">
                <ParisWeather city="Paris" degree="18" />
                <SmallCard about="New visitors" number="1.5K" id="n1" />
                <SmallCard about="Bounce Rate" number="50%" id="n2" />
                <SmallCard about="Searchs" number="28%" id="n3" />
                <SmallCard about="Traffic" number="140.4 kb" id="n4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
