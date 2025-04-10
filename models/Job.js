const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true,
    trim: true
  },
  role: {
    type: String,
    required: true,
    trim: true
  },
  status: {
    type: String,
    enum: ['Applied', 'Interview', 'Offer', 'Rejected'],
    default: 'Applied'
  },
  date: {
    type: Date,
    required: true
  },
  link: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Job', JobSchema);
