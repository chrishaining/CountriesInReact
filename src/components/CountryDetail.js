import React, {Component} from 'react'

class CountryDetail extends Component {

  render() {
    if (!this.props.country) return null;
    return (
      <React.Fragment>
      <p>Country name: {this.props.country.name}</p>
      <img src={this.props.country.flag} alt="flag" height="400" width="500"/>
      </React.Fragment>
    )
  }

}

export default CountryDetail
