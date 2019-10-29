import React, {Component} from 'react'
import CountryDetail from './CountryDetail'

class CountrySelect extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: {}
    }
    this.handleSelect = this.handleSelect.bind(this)
  }

  handleSelect(event) {
    this.setState({value: event.target.value})
  }



  render() {
    const countriesList = this.props.countries.map((country) => {
      return (

        // <CountryDetail country={country} key={country.numericCode}></CountryDetail>
        <option key={country.numericCode} value={country.name}>{country.name}</option>
      )
    })
    return (
      <form className="country-select" onChange={this.handleSelect}>
      <label>
      Select a country
      <select value={this.state.value} >
      {countriesList}
      </select>
      </label>
      </form>

    )

  }

}

export default CountrySelect
