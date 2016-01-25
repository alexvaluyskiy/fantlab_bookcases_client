import React from 'react';
import 'styles/core.scss';

function CoreLayout ({ children }) {
  return (
    <div className="page-container">
      <div className="view-container">
        {children}
      </div>
    </div>
  );
}

CoreLayout.propTypes = {
  children: React.PropTypes.element
};

export default CoreLayout;
