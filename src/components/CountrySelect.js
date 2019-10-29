import React, {Component} from 'react'

class CountrySelect extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: {}
    }
    this.handleSelect = this.handleSelect.bind(this)
  }

  handleSelect(event) {
    this.props.onCountrySelected(event.target.value);
    this.setState({value: event.target.value})
  }

  render() {
    const countriesNodes = this.props.countries.map((country) => {
      return (

        // <CountryDetail country={country} key={country.numericCode}></CountryDetail>
        <option key={country.numericCode} value={country.numericCode}>{country.name}</option>
      )
    })
    return (
      <form className="country-select" onChange={this.handleSelect} >
      <label>
      Select a country
      <select value={this.state.value} onChange={this.handleSelect}>
      {countriesNodes}
      </select>
      </label>
      </form>

    )

  }

}

export default CountrySelect
