import React, { Component } from 'react'
import { addCounter } from '@src/actions/counter'

export default class Counter extends Component {
  render() {
    let { count } = this.props
    count = count || 0

    return (
      <div>
        <h2>计数器</h2>
        <div style={{ fontSize: 30, color: '#f66' }}>{count}</div>
        
        <button onClick={() => 
          {this.dispatch(addCounter())}}>Count</button>
      </div>
    )
  }
}