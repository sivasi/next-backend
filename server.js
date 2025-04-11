require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRoutes = require('./src/routes/authRoutes');
const postRoutes = require('./src/routes/postRoutes');
const profileRoutes = require('./src/routes/profileRoutes');

const app = express();

app.use(express.json());
app.use(cors());

// Routes
app.use((req,res, next) => {
  console.log('api is running');
  next();
});
app.use('/api/auth/profile', (req,res, next) => {
  console.log('api is running2');
  next();
}, profileRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
