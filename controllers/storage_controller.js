const {storageModel} = require('../models/index_models');
const PUBLIC_URL = process.env.PUBLIC_URL

/** GET */
const getItems = async (req,res) => {
    const data = await storageModel.find({});
    res.send(data);
}

const getItem = async (req,res) => {
    const data = 'Not implemented yet';
    res.send({data});
}
/** POST */
const createItem = async (req,res) =>{
    const { file } = req;
    const fileData = {
        fileName: file.filename,
        url: `${PUBLIC_URL}/${file.filename}`
    }
    const data = await storageModel.create(fileData);
    res.send({data});
}




module.exports = { getItems,getItem, createItem }