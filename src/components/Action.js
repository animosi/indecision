import React from 'react';

function Action(props) {
  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOptions}>
        What should I do now?
      </button>
    </div>
  );
}
export default Action;
