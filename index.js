import React, { Component } from 'react'
import { render } from 'react-dom'

class Input extends Component {

  state = { value: '' }

  handleChange = (e) => {
    this.setState({ value: e.target.value })
  }


  render(){

    const {value} = this.state

    return (
      <div>
        <label htmlFor={'id'}>
          Enter value
        </label>
        <input 
          id={'id'}
          type={'text'}
          value={value}
          placeholder={'Placeholder'}
          onChange={this.handleChange}
        />
        <br />
        <br />
        My value: {value}
      </div>
    )
  }
}

render(<Input />, document.querySelector('#app'))
