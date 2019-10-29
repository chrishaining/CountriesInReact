import React, {Component} from 'react'
import CountryDetail from './CountryDetail'

class CountrySelect extends Component {



render() {
  const countriesList = this.props.countries.map((country) => {
    return (
      <CountryDetail country={country} key={country.name}/>
    )
  })
  return (
    <div className="country-select">
      {countriesList}
    </div>
  )
}

}

export default CountrySelect
