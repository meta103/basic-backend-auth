const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const { ObjectId } = Schema.Types;

const taskSchema = new Schema({
  owner: { type: ObjectId, ref: 'Owner' },
  // title: { type: String, required: true },
  action: { type: String, enum: ['email', 'call', 'meeting'] },
  toId: { type: ObjectId, ref: 'User' },
  toName: String,
  date: { type: Date, default: Date.now },
  notes: String,
}, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    },
  });

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;