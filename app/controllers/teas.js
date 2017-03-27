'use strict';

const controller = require('lib/wiring/controller');
const models = require('app/models');
const Tea = models.tea;

const authenticate = require('./concerns/authenticate');
const setUser = require('./concerns/set-current-user');
const setModel = require('./concerns/set-mongoose-model');

const index = (req, res, next) => {
  Tea.find({'_owner':req.user})
    .then(teas => res.json({
      teas: teas.map((e) =>
        e.toJSON({ virtuals: true, user: req.user })),
    }))
    .catch(next);
};

const show = (req, res) => {
  res.json({
    tea: req.tea.toJSON({ virtuals: true, user: req.user }),
  });
};

const create = (req, res, next) => {
  let tea = Object.assign(req.body.tea, {
    _owner: req.user._id,
  });
  Tea.create(tea)
    .then(tea =>
      res.status(201)
        .json({
          tea: tea.toJSON({ virtuals: true, user: req.user }),
        }))
    .catch(next);
};

const update = (req, res, next) => {
  delete req.body._owner;  // disallow owner reassignment.
  req.tea.update(req.body.tea)
    .then(() => res.sendStatus(204))
    .catch(next);
};

const destroy = (req, res, next) => {
  req.tea.remove()
    .then(() => res.sendStatus(204))
    .catch(next);
};

module.exports = controller({
  index,
  show,
  create,
  update,
  destroy,
}, { before: [
  { method: setUser, only: ['index', 'show'] },
  { method: authenticate, except: ['index', 'show'] },
  { method: setModel(Tea), only: ['show'] },
  { method: setModel(Tea, { forUser: true }), only: ['update', 'destroy'] },
], });
