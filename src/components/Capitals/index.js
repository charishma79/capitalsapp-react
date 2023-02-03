import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {activeCapitalId: countryAndCapitalsList[0].id}

  onChangeCapitalId = event => {
    this.setState({activeCapitalId: event.target.value})
  }

  getCapitalCountry = () => {
    const {activeCapitalId} = this.state
    const getCapital = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === activeCapitalId,
    )
    return getCapital.country
  }

  render() {
    const {activeCapitalId} = this.state
    const country = this.getCapitalCountry()
    // console.log(country)
    return (
      <div className="bg-container">
        <div className="capitals-card-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="question-container">
            <select
              className="country-text"
              value={activeCapitalId}
              onChange={this.onChangeCapitalId}
            >
              {countryAndCapitalsList.map(eachCountry => (
                <option
                  value={eachCountry.id}
                  className="option"
                  key={eachCountry.id}
                >
                  {eachCountry.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="text">is capital of which country?</p>
          </div>
          <p className="capital">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
