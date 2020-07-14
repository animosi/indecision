import Option from './Option/Option';
import React from 'react';

const Options = (props) => {
  return (
    <div>
      <h3>Options </h3>
      {props.options.map((e) => (
        <Option key={e} text={e}></Option>
      ))}
      <button onClick={props.handleDeleteOptions} disabled={!props.hasOptions}>
        Remove All
      </button>
    </div>
  );
};

export default Options;
