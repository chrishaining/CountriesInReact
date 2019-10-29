import React, {Component} from 'react'
import Header from '../components/Header'
import CountrySelect from '../components/CountrySelect'

class CountryContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      countries: [],
      selectedCountry: {}
    }
  }

  componentDidMount(){
    fetch('https://restcountries.eu/rest/v2/all')
    .then(results => {
      return results.json()
    })
    .then(countries =>
    this.setState({countries: countries})
  )
  }

  handleSelect(selectedCountry) {
  this.setState({selectedCountry: selectedCountry})
}


  render() {
    return (
      <div className="country-container">
      <h1>This is the text rendered in CountryContainer</h1>
      <Header title="This is the title."/>
      <CountrySelect countries={this.state.countries}/>
      </div>
    )
  }
}

export default CountryContainer
