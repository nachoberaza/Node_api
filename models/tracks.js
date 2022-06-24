const mongoose = require('mongoose');

/** Defino el Esquema */
const TrackSchema = new mongoose.Schema(
    {
        name:{ type: String, required: true},
        album: { type: String, required: false},
        cover: {type: String, validate: { validator: (req) => { return true }, message: 'Error' }},
        artist: { name:{type: String}, nickname:{type: String}, nationally:{type: String} },
        duration: {start:{type: Number}, end:{type: Number}},
        mediaId:{ type: String } //mongoose.Types.ObjectId }
    },
    {
        timestamps: true, // TODO: createdAt, updateAt
        versionKey: false
    }
)

/** Exporto el modelo junto con la coleccion a la que pertenece */
module.exports = mongoose.model('track',TrackSchema);