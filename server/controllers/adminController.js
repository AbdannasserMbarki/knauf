const Inventory = require('../models/Inventory');
const Maintenance = require('../models/Maintenance');
const Attendance = require('../models/Attendance');

exports.getInventory = async (req, res) => {
  try {
    const inventory = await Inventory.findAll();
    res.json(inventory);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.addInventory = async (req, res) => {
  const { name, qty, type } = req.body;

  try {
    const newInventory = new Inventory({
      name,
      qty,
      type,
    });

    const inventory = await newInventory.save();
    res.json(inventory);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getMaintenance = async (req, res) => {
  try {
    const maintenance = await Maintenance.findAll();
    res.json(maintenance);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.updateMaintenance = async (req, res) => {
  const { status } = req.body;

  try {
    let maintenance = await Maintenance.findByPk(req.params.id);

    if (!maintenance) {
      return res.status(404).json({ msg: 'Maintenance record not found' });
    }

    maintenance.status = status;
    await maintenance.save();

    res.json(maintenance);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.findAll();
    res.json(attendance);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.markAttendance = async (req, res) => {
  const { userId, date, status } = req.body;

  try {
    const newAttendance = new Attendance({
      userId,
      date,
      status,
    });

    const attendance = await newAttendance.save();
    res.json(attendance);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
