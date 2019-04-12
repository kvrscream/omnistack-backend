const Box = require("../models/Box");

class BoxController {
    
    //Salva
    async store(req, res){
        const box = await Box.create(req.body);
        return res.json(box);
    }

    async show(req, res){
        //Populate traz o relacionammento
        const box = await Box.findById(req.params.id).populate({
            path: 'files',
            options: {sort: {createdAt: -1}}
        });
        return res.json(box);
    }
    

}

module.exports = new BoxController();