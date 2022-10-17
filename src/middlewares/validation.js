const { body, validationResult } = require('express-validator');

const rulesReport = [
    body('pegawai_id').notEmpty().withMessage('pegawai id tidak boleh kosong'),
    body('start').notEmpty().withMessage('tanggal start harus di isi'),
    body('end').notEmpty().withMessage('tanggal end harus di isi'),
]

const validationReport = [
    rulesReport,
    (req, res, next) => {
        const error = validationResult(req)
        if(!error.isEmpty()){
            return res.status(402).json({errors: error.array()})
        }
        next()
    }
]

const rulesPegawai = [
    body('name').notEmpty().withMessage('pegawai id tidak boleh kosong'),
    body('status_karyawan').notEmpty().withMessage('tanggal start harus di isi'),
    body('role').notEmpty().withMessage('tanggal end harus di isi'),
]

const validationPegawai = [
    rulesPegawai,
    (req, res, next) => {
        const error = validationResult(req)
        if(!error.isEmpty()){
            return res.status(402).json({errors: error.array()})
        }
        next()
    }
]

const rulesAbsen = [
    // body('pegawai_id').notEmpty().withMessage('pegawai id tidak boleh kosong'),
    body('type_kehadiran').notEmpty().withMessage('type_kehadiran tidak boleh kosong'),
    body('status_acc').notEmpty().withMessage('status acc tidak boleh kosong').isNumeric().withMessage('status_acc harus berupah angka'),
    body('pegawai_id_acc').notEmpty().withMessage('pegawi id acc tidak boleh kosong'),
]

const validationAbsen = [
    rulesAbsen,
    (req, res, next) => {
        const error = validationResult(req)
        if(!error.isEmpty()){
            return res.status(402).json({errors: error.array()})
        }
        next()
    }
]

module.exports = {
    validationReport,
    validationPegawai,
    validationAbsen
  };