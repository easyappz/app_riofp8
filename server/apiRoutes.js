const express = require('express');

const router = express.Router();

// GET /api/hello
router.get('/hello', (req, res) => {
  res.json({ message: 'Hello from API!' });
});

// GET /api/status
router.get('/status', (req, res) => {
  res.json({ 
    status: 'ok',
    timestamp: new Date().toISOString()
  });
});

// POST /api/calculate
router.post('/calculate', (req, res) => {
  const { operation, num1, num2 } = req.body;

  if (!operation || num1 === undefined || num2 === undefined) {
    return res.status(400).json({ error: 'Missing operation or numbers' });
  }

  let result;
  if (operation === 'add') {
    result = num1 + num2;
  } else if (operation === 'subtract') {
    result = num1 - num2;
  } else if (operation === 'multiply') {
    result = num1 * num2;
  } else if (operation === 'divide') {
    if (num2 === 0) {
      return res.status(400).json({ error: 'Division by zero is not allowed' });
    }
    result = num1 / num2;
  } else {
    return res.status(400).json({ error: 'Invalid operation' });
  }

  res.json({ result });
});

module.exports = router;
