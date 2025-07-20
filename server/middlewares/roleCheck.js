const User = require('../models/User');

module.exports = function (role) {
  return async function (req, res, next) {
    try {
      const user = await User.findByPk(req.user.id);
      if (user.role !== role) {
        return res.status(403).json({ msg: 'Access denied' });
      }
      next();
    } catch (err) {
      res.status(500).json({ msg: 'Server error' });
    }
  };
};
