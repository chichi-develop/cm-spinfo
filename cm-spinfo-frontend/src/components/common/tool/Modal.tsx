import React from 'react';
import ReactDOM from 'react-dom';

import './Modal.css';

export const Modal: React.FC = props => {
  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">{props.children}</div>
    </div>,
    document.getElementById('modal-root') as HTMLInputElement,
  );
};
