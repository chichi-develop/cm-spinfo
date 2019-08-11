import React, { useState } from 'react'
import ReactModal from 'react-modal'

import { makeStyles } from '@material-ui/core/styles';
// import { blue } from '@material-ui/core/colors';
import { Close as CloseIcon } from '@material-ui/icons'

import './Modal.css'

ReactModal.setAppElement('#modal-root');

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  icon: {
    margin: theme.spacing(1),
  },
  iconHover: {
    margin: theme.spacing(1),
    '&:hover': {
      // color: blue[800],
      color: 'black',
    },
  },
}));

export const Modal = (props) => {

  const [ showModal, setShowModal ] = useState(false)

  const handleOpenModal = () => setShowModal(true)
  const handleCloseModal= () => setShowModal(false)

  const classes = useStyles();

  return (
    <div>
      {props.open(handleOpenModal)}
      <ReactModal
        isOpen={showModal}
        contentLabel="Inline Styles Modal Example"
        onRequestClose={handleCloseModal} // click overlay to close
        shouldCloseOnOverlayClick={props.outClickClose||false} // click overlay to close

        style={{
            overlay: {
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'rgba(0, 0, 0, 0.8)',
            },
            content: {
              flexDirection: 'column',
              minHeight: '80%',
              maxWidth: '800px',
              padding: '0',
              top: 'auto',
              left: 'auto',
              bottom: 'auto',
              right: 'auto',
            }
          }}
      >
        <div className="modal-header">
          <p className="modal-header-title">{props.title}</p>
          <CloseIcon className={classes.iconHover} fontSize="large" color="disabled" style={{ fontSize: 20 }} onClick={handleCloseModal}/>
        </div>
        <div className="modal-body">
          {props.content()}
        </div>
      </ReactModal>
    </div>
  )
}

export default Modal