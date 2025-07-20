const Order = require('../models/Order');

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({ where: { clientId: req.user.id } });
    res.json(orders);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.placeOrder = async (req, res) => {
  const { status, paymentType } = req.body;

  try {
    const newOrder = new Order({
      clientId: req.user.id,
      status,
      paymentType,
    });

    const order = await newOrder.save();
    res.json(order);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
