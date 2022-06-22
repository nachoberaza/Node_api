const mongoose = require('mongoose');

/** Defino el Esquema */
const UserSchema = new mongoose.Schema(
    {
        name:{ type: String, required: true},
        age: { type: Number, required: false},
        email: {type: String, unique: true},
        password: {type: String},
        role: {type: ['user','admin'], default: 'user'}
    },
    {
        timestamps: true, // TODO: createdAt, updateAt
        versionKey: false
    }
)

/** Exporto el modelo junto con la coleccion a la que pertenece */
module.exports = mongoose.model('users',UserSchema);