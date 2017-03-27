'use strict';

const mongoose = require('mongoose');

const teaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  steepTime: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  _owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: function (doc, ret, options) {
      let userId = (options.user && options.user._id) || false;
      ret.editable = userId && userId.equals(doc._owner);
      return ret;
    },
  },
});

// teaSchema.virtual('length').get(function length() {
//   return this.text.length;
// });

const Tea = mongoose.model('Tea', teaSchema);

module.exports = Tea;
