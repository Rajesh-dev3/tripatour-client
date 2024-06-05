import * as React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/material';



const BasicModal = ({Children,open,setOpen})=> {
 
  const handleClose = () => setOpen(false);

  return (
    
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <p>

        {Children}
        </p>
      </Modal>
    
  );
}
export default BasicModal