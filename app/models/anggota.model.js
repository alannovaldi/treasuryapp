const mongoose = require('mongoose')

const AnggotaSchema = mongoose.Schema({
    nama: String,
    nip: String,
    status: String,
    keterangan: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Anggota', AnggotaSchema);