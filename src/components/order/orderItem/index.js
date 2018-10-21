import React, { Component } from "react";
import "./style.scss";

class OrderItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stars: props.data.stars || 0,
      editing: false,
      comment: props.data.comment || ''
    };
  }

  render() {
    const { name, price, hasCommented } = this.props.data;

    return (
      <div className="orderItem">
        <div className="orderItem__img">
          <img src="/images/order.jpg" alt="" />
        </div>
        <div className="orderItem__detail">
          <div className="orderItem__name">{name}</div>
          <div className="orderItem__price"> {price}</div>
        </div>

        <div>
          { hasCommented ? (
            <button className="orderItem__btn orderItem__btn--done">
              已评价
            </button>
          ) : (
            <button
              className="orderItem__btn orderItem__btn--todo"
              onClick={this.handleComment}
            >
              评价
            </button>
          )}
        </div>

        { this.state.editing ?  this.renderEditArea() : null}
      </div>
    );
  }

  handleComment = () => {
    this.setState({
      editing: true
    })
  };

  handleTextChange = (e) => {
    this.setState({
      comment: e.target.value
    })
  }
  handleStarClick = (stars) => {
    this.setState({
      stars
    })
  }
  handleCancelComment = () => {
    this.setState({
      editing: false,
      comment: this.props.data.comment || '',
      stars: this.props.data.stars || 0
    })
  }
  handleSubmitComment = () => {
    const { id } = this.props.data
    const { comment, stars } = this.state
    
    this.setState({
      editing: false
    })

    this.props.onSubmit(id, comment, stars)
  }

  renderEditArea() {
    return (
      <div>
        <textarea rows="2" onChange={this.handleTextChange}
          value={this.state.comment}
          className="orderItem__textarea"/>
        {this.renderStars()}
        <button onClick={this.handleSubmitComment}>提交</button>
        <button onClick={this.handleCancelComment}>取消</button>
      </div>
    );
  }

  renderStars() {
    const { stars } = this.state;

    return (
      <div>
        {[1, 2, 3, 4, 5].map((item, index) => {
          const light = stars >= item ? "orderItem__star--light" : "";

          return <span key={index} className={light} 
            onClick={this.handleStarClick.bind(this, item)}>★</span>;
        })}
      </div>
    );
  }
}

export default OrderItem;
