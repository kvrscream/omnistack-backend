const mongoose = require("mongoose");

const Box = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        files: {
            type:[
                {
                    type:mongoose.Schema.Types.ObjectId, ref: "File"
                }
            ]
        },
    },
    {

        timestamps: true //Cria campos createdAt e UpdatedAt
    }
);

module.exports = mongoose.model('Box',Box);