const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3001; // React app runs on 5173, so use a different port

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // To parse JSON bodies

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  console.log('----------------------------------');
  console.log('Received login attempt:');
  console.log('Email:', email);
  console.log('Password:', password);
  console.log('----------------------------------');

  // Simulate a server response after a delay
  setTimeout(() => {
    // In a real application, you would validate credentials here
    if (email && password) {
      res.status(200).json({ message: 'Login attempt received successfully.' });
    } else {
      res.status(400).json({ message: 'Email and password are required.' });
    }
  }, 1000); // Simulate network delay
});

app.listen(port, () => {
  console.log(`Local server listening at http://localhost:${port}`);
});
