import React, {Component} from 'react'

class CountryDetail extends Component {

render() {
  return (
    <p>{this.props.country.name}</p>
  )
}

}

export default CountryDetail
