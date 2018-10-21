import React, { Component } from 'react';
import OrderItem from '../orderItem'

class OrderList extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    fetch('/mock/data.json').then(res => {
      if (res.ok) {
        res.json().then(data => {
          this.setState({
            data: data
          })
        })
      }
    })
  }

  render() {
    return (
      <div>
        {
          this.state.data.map(item => {
            return <OrderItem data={item} key={item.id} onSubmit={this.handleSubmit}/>
          })
        }
      </div>
    );
  }

  handleSubmit = (id, comment, stars) => {
    const newData = this.state.data.map(item => {
      return item.id  === id ? 
        {
          ...item,
          comment,
          stars,
          hasCommented: true
        } : item
    })

    this.setState({
      data: newData
    })
  }
}

export default OrderList;