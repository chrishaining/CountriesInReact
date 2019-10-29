import React, {Component} from 'react'
import CountryDetail from './CountryDetail'
class CountrySelect extends Component {

render() {
  return (
    <div className="country-select">
    {this.props.countries}
    <CountryDetail country={this.props.countries}/>
    </div>
  )
}

}

export default CountrySelect
