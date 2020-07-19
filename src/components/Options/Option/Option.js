import React from 'react';

const Option = (props) => (
  <div>
    {props.text}
    <button
      onClick={(e) => {
        props.handleDeleteOption(props.text);
      }}
    >
      Remove
    </button>
  </div>
);

export default Option;
