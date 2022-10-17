// const bodyParser = require('body-parser')
const Absen = require("../../models/absenModel");
const pegawaiModel = require("../../models/pegawaiModel");

const getAllAbsen = async (req, res) => {
  try {
    const absen = await Absen.find({}).populate('pegawai_id');
    res.status(200).json({message: 'success', data:absen});
  } catch (error) {
    res.json({ message: err });
  }
};

const createAbsen = async (req, res) => {
  const absen = new Absen({
    tanggal: new Date(),
    pegawai_id: req.body.pegawai_id,
    type_kehadiran: req.body.type_kehadiran.toLowerCase(),
    status_acc: parseInt(req.body.status_acc),
    pegawai_id_acc: req.body.pegawai_id_acc,
  });
  console.log(absen)
  try {
    const save = await absen.save();
    res.status(201).json({message: "saved!", data:save});
  } catch (error) {
    res.json({ message: err });
  }
};

const getAbsenById = async (req, res) => {
  try {
    const absen = await Absen.findById(req.params.absenId);
    res.status(200).json({message:true, data: absen});
  } catch (error) {
    res.json({ message: err });
  }
};

const updateAbsen = async (req, res) => {
  try {
    const updateAbsen = await Absen.updateOne(
      { _id: req.params.absenId },
      {
        $set: {
          pegawai_id: req.body.pegawai_id,
          type_kehadiran: req.body.type_kehadiran.toLowerCase(),
          status_acc: parseInt(req.body.status_acc),
          pegawai_id_acc: req.body.pegawai_id_acc,
        },
      }
    );
    res.json({message: "updated!"});
  } catch (error) {
    res.json({ message: err });
  }
};

const deleteAbsen = async (req, res) => {
  try {
    const absen = await Absen.remove({_id : req.params.absenId});
    res.json({message: 'deleted!!'});
  } catch (error) {
    res.json({ message: err });
  }
};

module.exports = {
  getAllAbsen,
  createAbsen,
  getAbsenById,
  updateAbsen,
  deleteAbsen
};
