import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal, Box, Button, TextField, Typography } from '@mui/material';
import { setSymbols } from '../slices/symbolsSlice';

const ChangeSymbolsModal: React.FC<{ open: boolean; handleClose: () => void }> = ({ open, handleClose }) => {
  const dispatch = useDispatch();
  const [symbols, setLocalSymbols] = useState<string>('');

  const handleSave = () => {
    dispatch(setSymbols(symbols.split(',')));
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', p: 4, boxShadow: 24, }}>
        <Typography variant="h6" component="h2">Change Symbols</Typography>
        <TextField fullWidth margin="normal" label="Symbols" variant="outlined" value={symbols} onChange={(e) => setLocalSymbols(e.target.value)} helperText="Enter symbols separated by commas" />
        <Button variant="contained" color="primary" onClick={handleSave}>Save</Button>
      </Box>
    </Modal>
  );
};

export default ChangeSymbolsModal;
