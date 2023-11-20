// src/components/DonationForm.js
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const DonationForm = () => {
  const [amount, setAmount] = useState('');
  const handleDonation = () => {
    // Handle donation submission
    document.write(`Donating ${amount} dollars`);
    // You can add logic here to handle the donation submission
    // setAmount{
        // this.amount= '1000'
    // }
  };

  return (
    <div>
      <TextField
        label="Enter amount"
        variant="outlined"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <Button variant="contained" onClick={handleDonation}>
        Donate
      </Button>
    </div>
  );
};

export default DonationForm;
