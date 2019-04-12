const multer = require("multer");
const path  = require('path');
const crypto = require("crypto"); //Gera hashs

module.exports = {
    //Destino para onde irão os arquivos
    dest: path.resolve(__dirname, '..', '..', 'tmp'),
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname, '..', '..', 'tmp'))
        },
        filename: (req, file, cb) => {
            crypto.randomBytes(16, (err, hash) => {
                if(err) cb(err);

                file.key = `${hash.toString('hex')}-${file.orinalname}`;
                cb(null, file.key);
            })
        }
    })
};