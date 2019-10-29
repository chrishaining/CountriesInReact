import React, {Component} from 'react'
import Header from '../components/Header'
import CountrySelect from '../components/CountrySelect'
import CountryDetail from '../components/CountryDetail'

class CountryContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      countries: [],
      currentCountry: null
    }
    this.handleSelect = this.handleSelect.bind(this)
  }

  componentDidMount(){
    fetch('https://restcountries.eu/rest/v2/all')
    .then(results => results.json())
    .then(countries =>
      this.setState({countries: countries}))
      .catch(err => console.error)

    }

    handleSelect(numericCode) {
      const selectedCountry = this.state.countries.find((country) => {return country.numericCode === numericCode} )
      this.setState({currentCountry: selectedCountry})
    }


    render() {
      return (
        <div className="country-container">
        <h1>This is the text rendered in CountryContainer</h1>
        <Header title="This is the title."/>
        <CountrySelect countries={this.state.countries} onCountrySelected={this.handleSelect}/>
        <CountryDetail country={ this.state.currentCountry }/>
        </div>
      )
    }
  }

  export default CountryContainer
