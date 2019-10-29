import React, {Component} from 'react'

class CountryDetail extends Component {

  render() {
    if (!this.props.country) return null;
    return (
      <React.Fragment>
      <p>{this.props.country.name}</p>
      <img src={this.props.country.flag} alt="flag"/>

      </React.Fragment>
    )
  }

}

export default CountryDetail
