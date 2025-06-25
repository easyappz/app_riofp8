import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Paper } from '@mui/material';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      // Basic evaluation for arithmetic operations
      const evalResult = eval(input);
      if (isFinite(evalResult)) {
        setResult(evalResult.toString());
      } else {
        setResult('Error');
      }
    } catch (error) {
      setResult('Error');
    }
  };

  const buttonLayout = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+'
  ];

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f5f5f5' }}>
      <Paper elevation={6} sx={{ padding: 3, width: 320, backgroundColor: '#fff', borderRadius: 3 }}>
        <Typography variant="h5" align="center" gutterBottom sx={{ marginBottom: 2, color: '#1976d2' }}>
          Calculator
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          value={input}
          disabled
          sx={{ marginBottom: 2, backgroundColor: '#f0f0f0', borderRadius: 1 }}
          inputProps={{ style: { textAlign: 'right', fontSize: '1.5rem' } }}
        />
        <TextField
          fullWidth
          variant="outlined"
          value={result}
          disabled
          sx={{ marginBottom: 2, backgroundColor: '#e0e0e0', borderRadius: 1 }}
          inputProps={{ style: { textAlign: 'right', fontSize: '1.5rem', color: result === 'Error' ? '#d32f2f' : '#1976d2' } }}
        />
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1 }}>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleClear}
            sx={{ gridColumn: 'span 4', height: 50, fontSize: '1rem', borderRadius: 1 }}
          >
            Clear
          </Button>
          {buttonLayout.map((btn) => (
            <Button
              key={btn}
              variant={btn === '=' ? 'contained' : 'outlined'}
              color={btn === '=' ? 'primary' : 'default'}
              onClick={() => btn === '=' ? handleCalculate() : handleButtonClick(btn)}
              sx={{ height: 60, fontSize: '1.2rem', borderRadius: 1, backgroundColor: btn === '=' ? '#1976d2' : '#fff' }}
            >
              {btn}
            </Button>
          ))}
        </Box>
      </Paper>
    </Box>
  );
};

export default Calculator;
