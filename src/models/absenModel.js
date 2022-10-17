const mongoose = require('mongoose')

const absenSchema = mongoose.Schema({
    tanggal: {type: Date, default: Date.now},
    pegawai_id:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pegawai'
    }],
    type_kehadiran: {
        type: String,
        require: true
    },
    jam_masuk: { type: Date, default: Date.now },
    status_acc:{
        type: Number,
        require: true
    },
    pegawai_id_acc: {
        type:String,
        require: true
    }
})


module.exports = mongoose.model('Absen', absenSchema)