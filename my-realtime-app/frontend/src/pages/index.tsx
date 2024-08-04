import React, { useState } from 'react';
import { Button } from '@mui/material';
import LogsDisplay from '../components/LogsDisplay';
import ChangeSymbolsModal from '../components/ChangeSymbolsModal';

const HomePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div>
      <h1>Stock Prices Dashboard</h1>
      <Button variant="contained" color="primary" onClick={handleOpenModal}>
        Change Symbols
      </Button>
      <LogsDisplay />
      <ChangeSymbolsModal open={isModalOpen} handleClose={handleCloseModal} />
    </div>
  );
};

export default HomePage;
