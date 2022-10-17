const mongoose = require('mongoose')

const pegawaiSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    status_karyawan:{
        type: Number,
        require: true,
        default: 0
    },
    role: {
        type: String,
        require: true
    },
})


module.exports = mongoose.model('Pegawai', pegawaiSchema)