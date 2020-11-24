import Option from './Option/Option';
import React from 'react';

//* map list of options, renders new options when state.options changes in the parent
//* component. delete options array button
const Options = (props) => (
  <div>
    <h3 className='widget-header'>Options</h3>
    <button
      className='button button--link'
      onClick={props.handleDeleteOptions}
      disabled={!props.hasOptions}
    >
      Remove All
    </button>

    {props.options.length === 0 && <p>Enter an option</p>}
    {props.options.map((e) => (
      <Option key={e} text={e} handleDeleteOption={props.handleDeleteOption} />
    ))}
  </div>
);

export default Options;
