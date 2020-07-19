import React, { Component } from 'react';
import Header from '../components/Header';
import Action from '../components/Action';
import Options from '../components/Options/Options';
import AddOption from '../components/AddOption';
import OptionModal from '../components/Options/Option/OptionModal';

class Indecision extends Component {
  constructor(props) {
    super(props);
    this.handlePick = this.handlePick.bind(this);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.state = {
      title: 'Indecision',
      subtitle: 'subtitle',
      options: [],
      selectedOption: undefined,
    };
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) this.setState((params) => ({ options }));
    } catch (err) {
      //do nothing
    }

    console.log('fetching data');
  }

  //* browser console -> localStorage.getItem('options')
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
    console.log('saving data');
  }
  componentWillUnmount() {
    console.log('ComponentWillUnmount');
  }

  //* Action button, returns random element from state.options array[]
  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({
      selectedOption: option,
    }));
  }

  handleCloseModal() {
    this.setState((params) => ({ selectedOption: undefined }));
  }
  //* method passed down to AddOption component, option/inputString is passed UP to the parent
  handleAddOption(option) {
    if (!option) return 'enter valid string';
    if (this.state.options.indexOf(option) > -1)
      return 'This option already exists';
    this.setState((prev) => ({ options: prev.options.concat(option) }));
  }
  //* Button inside options component, sets state.options to empty []
  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }
  //* delete option individually. This method is passed down to options->option component
  handleDeleteOption(optionToRemove) {
    this.setState((prev) => ({
      options: prev.options.filter((option) => optionToRemove !== option),
    }));
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
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClose={this.handleCloseModal}
        />
      </div>
    );
  }
}

//* define default props. Props can still be added to component declaration
// Indecision.defaultProps = {
//   options: [],
// };

export default Indecision;
