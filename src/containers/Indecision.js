import React, { Component } from 'react';
import Header from '../components/Header';
import Action from '../components/Action';
import Options from '../components/Options/Options';
import AddOption from '../components/AddOption';

class Indecision extends Component {
  render() {
    return (
      <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
      </div>
    );
  }
}

export default Indecision;
