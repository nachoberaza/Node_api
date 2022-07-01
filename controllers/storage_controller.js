const {storageModel} = require('../models/index_models');

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
    const { body,file } = req;
    // const data = await storageModel.create(body);
    res.send({file});
}




module.exports = { getItems,getItem, createItem }