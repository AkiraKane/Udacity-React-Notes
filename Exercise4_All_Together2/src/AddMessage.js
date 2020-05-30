import React, { Component } from "react";
import PropTypes from "prop-types";

class AddMessage extends Component {
  state = {
    message: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onMessage(this.state.message);
  };

  handleInputChange = (event) => {
    const { value } = event.target;
    this.setState(() => ({
      message: value,
    }));
  };

  isDisabled = () => {
    return this.state.message === "";
  };

  render() {
    const { message } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your message..."
            value={message}
            onChange={this.handleInputChange}
          />
          <div className="input-group-append">
            <button className="btn submit-button" disabled={this.isDisabled()}>
              SEND
            </button>
          </div>
        </form>
      </div>
    );
  }
}

AddMessage.propTypes = {
  onMessage: PropTypes.func.isRequired,
};

export default AddMessage;
