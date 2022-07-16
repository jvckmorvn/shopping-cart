import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getCounterClasses()}>{this.formatValue()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className={this.getButtonClasses()}
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className={this.getButtonClasses()}
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>
          <button
            className="btn btn-danger btn-sm m-2"
            onClick={() => this.props.onDelete(this.props.counter.id)}
          >
            x
          </button>
        </div>
      </div>
    );
  }

  getCounterClasses() {
    let classes = "badge m-2 bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  getButtonClasses() {
    const classes = "btn btn-secondary btn-sm m-2";
    return classes;
  }

  formatValue() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
