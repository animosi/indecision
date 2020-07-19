import React from 'react';

const Action = (props) => (
  <div>
    <button onClick={props.handlePick} disabled={!props.hasOptions}>
      What should I do now?
    </button>
  </div>
);
export default Action;
