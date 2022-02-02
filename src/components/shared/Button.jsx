import React from 'react';

function Button({children, isDisabled, version, type}) {
  return <button type={type} disabled = {isDisabled} className={`btn btn-${version}`}> {children} </button>
}

Button.defaultProps = {
    version:"primary",
    type:"submit",
    isDisabled:true,
}

export default Button;
