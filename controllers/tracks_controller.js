const {tracksModel} = require('../models/index_models');


/** GET */
const getItems = async (req,res) => {
    const data = await tracksModel.find({});
    res.send(data);
}

const getItem = async (req,res) => {
    const data = 'Not implemented yet';
    res.send({data});
}
/** POST */
const createItem = async (req,res) =>{
    const { body } = req;
    console.info(`Body: ${body}`);
    const data = await tracksModel.create(body);
    res.send(data);
}

/** PUT */
/** DELETE */

module.exports={getItems,getItem,createItem};