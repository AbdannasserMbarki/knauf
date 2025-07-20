const Support = require('../models/Support');

exports.getMessages = async (req, res) => {
  try {
    const messages = await Support.findAll({ where: { target: req.user.role.toLowerCase() } });
    res.json(messages);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.sendMessage = async (req, res) => {
  const { message, target } = req.body;

  try {
    const newSupport = new Support({
      fromUserId: req.user.id,
      message,
      target,
    });

    const support = await newSupport.save();
    res.json(support);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
