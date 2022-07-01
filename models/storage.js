const mongoose = require('mongoose');

/** Defino el Esquema */
const StorageSchema = new mongoose.Schema(
    {
        url:{ type: String, required: true},
        filename: { type: String, required: false},
    },
    {
        timestamps: true, // TODO: createdAt, updateAt
        versionKey: false
    }
)

/** Exporto el modelo junto con la coleccion a la que pertenece */
module.exports = mongoose.model('storage',StorageSchema);