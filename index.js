require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const jobRoutes = require('./routes/jobs');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

app.use('/api/jobs', jobRoutes);

app.get('/', (req, res) => {
  res.send('Student Job Tracker API is running...');
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
