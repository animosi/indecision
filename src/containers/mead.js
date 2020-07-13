import React, { Component } from 'react';

class mead extends Component {
  constructor(props) {
    super(props);
    this.handleToggleVis = this.handleToggleVis.bind(this);

    this.state = {
      visibility: false,
    };
  }

  handleToggleVis() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Toggle Visability</h1>
        <button onClick={this.handleToggleVis}>
          {this.state.visibility ? 'hide details' : 'show details'}
        </button>
        {this.state.visibility && (
          <div>
            <p>Details are now visable</p>
          </div>
        )}
      </div>
    );
  }
}

export default mead;
