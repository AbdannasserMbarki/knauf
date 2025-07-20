const Checklist = require('../models/Checklist');
const Form = require('../models/Form');
const Maintenance = require('../models/Maintenance');

exports.getChecklist = async (req, res) => {
  try {
    const checklist = await Checklist.findOne({ where: { userId: req.user.id } });
    res.json(checklist);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.updateChecklist = async (req, res) => {
  const { completedItems } = req.body;

  try {
    let checklist = await Checklist.findOne({ where: { userId: req.user.id } });

    if (checklist) {
      // Update
      checklist.completedItems = completedItems;
      await checklist.save();
    } else {
      // Create
      checklist = await Checklist.create({
        userId: req.user.id,
        completedItems,
      });
    }
    res.json(checklist);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getForms = async (req, res) => {
  try {
    const forms = await Form.findAll({ where: { userId: req.user.id } });
    res.json(forms);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.submitForm = async (req, res) => {
  const { formData, date } = req.body;

  try {
    const newForm = new Form({
      userId: req.user.id,
      formData,
      date,
    });

    const form = await newForm.save();
    res.json(form);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.reportIssue = async (req, res) => {
  const { machine, status, description } = req.body;

  try {
    const newMaintenance = new Maintenance({
      machine,
      status,
      description,
      reportedBy: req.user.id,
    });

    const maintenance = await newMaintenance.save();
    res.json(maintenance);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
