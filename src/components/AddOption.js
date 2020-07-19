import React, { Component } from 'react';

//* this component modifies the state.options array[]. when state is modified in the parent Indecision
//* all the children also get rerendered.
class AddOption extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    this.state = { error: undefined };
  }
  // handleChange(event) {
  //   const { value } = event.target;
  //   this.setState({ input: value.trim() });
  // }
  handleSubmit(event) {
    event.preventDefault();
    const option = event.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    this.setState(() => ({ error }));
    if (!error) event.target.elements.option.value = '';
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='option' placeholder='Input'></input>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}
export default AddOption;
