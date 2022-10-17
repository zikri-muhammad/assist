// const bodyParser = require('body-parser')
const Absen = require("../../models/absenModel");
const Pegawai = require("../../models/pegawaiModel");

const get = async (req, res) => {
  let pegawai_id   = req.body.pegawai_id;
  let start = new Date(req.body.start)
  let end   = new Date(req.body.end)
  const pegawai = await Pegawai.find({ _id: pegawai_id});
  const hadir = await Absen.count({
    pegawai_id: pegawai_id,
    type_kehadiran: "hadir",
    tanggal: {
      $gte: start,
      $lte: end,
    },
  });
  const sakit = await Absen.count({
    pegawai_id: pegawai_id,
    type_kehadiran: "sakit",
    tanggal: {
      $gte: start,
      $lte: end,
    },
    status_acc: 1
  });
  const cuti = await Absen.count({
    pegawai_id: pegawai_id,
    type_kehadiran: "cuti",
    tanggal: {
      $gte: start,
      $lte: end,
    },
    status_acc: 1

  });
  const telat = await Absen.count({
    pegawai_id: pegawai_id,
    type_kehadiran: "telat",
    tanggal: {
      $gte: start,
      $lte: end,
    }
  });
  try {
    const data = [];
    data.push({
      name: pegawai[0].name,
      hadir: hadir + telat,
      sakit: sakit,
      cuti : cuti ,
      telat: telat,
    });
    res.status(200).json({ message: true, data: data });
  } catch (error) {
    res.json({ message: err });
  }
};

const save = async (req, res) => {
  const pegawai = new Pegawai({
    name: req.body.name,
    status_karyawan: parseInt(req.body.status_karyawan),
    role: req.body.role,
  });

  try {
    const save = await pegawai.save();
    res.status(201).json({ message: "saved!", data: save });
  } catch (error) {
    res.json({ message: err });
  }
};


module.exports = {
  get,
  save,
};
