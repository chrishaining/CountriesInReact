import React, {Component} from 'react'

class CountryDetail extends Component {

render() {
  return (
    <p>{this.props.country.capital}</p>
  )
}

}

export default CountryDetail
