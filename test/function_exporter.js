import crypto from "crypto";

function hash(message){
    const hash = crypto.createHash('sha256');
    hash.update(message);
    return hash.digest('hex');
}

module.exports = hash;