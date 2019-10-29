import React, {Component} from 'react'
import Header from '../components/Header'

class CountryContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      countries: [
      ]
    }
  }

  render() {
    return (
      <div className="country-container">
      <h1>This is the text rendered in CountryContainer</h1>
      <Header title="This is the title."/>
      </div>
    )
  }
}

export default CountryContainer
