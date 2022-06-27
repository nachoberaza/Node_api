const {storageModel} = require('../models/index_models');

/** POST */
const saveFile = async (req,res) => { 
    const data = await storageModel.find({});
    res.send({hola: 1});
}

module.exports = { saveFile }