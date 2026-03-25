const db = require('../config/db');

const getAllPatients = async (req, res) => {
  try {
    const [patients] = await db.query(
      'SELECT id, name, age, gender, ward, diagnosis, created_at, updated_at FROM patient ORDER BY id DESC'
    );

    res.status(200).json(patients);
  } catch (err) {
    console.error('Error fetching patients:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const registerPatient = async (req, res) => {
  const { name, age, gender, ward, diagnosis } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  try {
    const [result] = await db.query(
      'INSERT INTO patient (name, age, gender, ward, diagnosis) VALUES (?, ?, ?, ?, ?)',
      [name, age ?? null, gender ?? null, ward ?? null, diagnosis ?? null]
    );

    const [newPatientRows] = await db.query(
      'SELECT id, name, age, gender, ward, diagnosis, created_at, updated_at FROM patient WHERE id = ?',
      [result.insertId]
    );

    res.status(201).json({
      message: 'Patient registered successfully',
      patient: newPatientRows[0],
    });
  } catch (err) {
    console.error('Error registering patient:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const updatePatient = async (req, res) => {
  const { id } = req.params;
  const { name, age, gender, ward, diagnosis } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  try {
    const [result] = await db.query(
      'UPDATE patient SET name = ?, age = ?, gender = ?, ward = ?, diagnosis = ? WHERE id = ?',
      [name, age ?? null, gender ?? null, ward ?? null, diagnosis ?? null, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Patient not found' });
    }

    const [updatedPatientRows] = await db.query(
      'SELECT id, name, age, gender, ward, diagnosis, created_at, updated_at FROM patient WHERE id = ?',
      [id]
    );

    res.status(200).json({
      message: 'Patient updated successfully',
      patient: updatedPatientRows[0],
    });
  } catch (err) {
    console.error('Error updating patient:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getAllPatients,
  registerPatient,
  updatePatient,
};
