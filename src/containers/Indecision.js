import React, { Component } from 'react';
import Header from '../components/Header';
import Action from '../components/Action';
import Options from '../components/Options/Options';
import AddOption from '../components/AddOption';

class Indecision extends Component {
  constructor(props) {
    super(props);
    this.handlePick = this.handlePick.bind(this);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      title: 'Indecision',
      subtitle: 'subtitle',
      options: [],
    };
  }
  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }

  handleAddOption(option) {
    if (!option) return 'enter valid string';
    if (this.state.options.indexOf(option) > -1)
      return 'This option already exists';
    this.setState((prev) => {
      return { options: prev.options.concat(option) };
    });
  }
  handleDeleteOptions() {
    this.setState(() => {
      return { options: [] };
    });
  }

  render() {
    return (
      <div>
        <Header title={this.state.title} subtitle={this.state.subtitle} />

        <Action
          handlePick={this.handlePick}
          hasOptions={this.state.options.length > 0}
        />

        <Options
          options={this.state.options}
          hasOptions={this.state.options.length > 0}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

export default Indecision;
