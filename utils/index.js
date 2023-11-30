const bcrypt = require("bcrypt");

const encryptPassword = async(password) => {
    const salt = await bcrypt.genSalt(5);

    return bcrypt.hash(password, salt);
};

module.exports = {
    encryptPassword,
    imageKit: new ImageKit({
        publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
        privateKey: process.env.IMAGEKIT_SECRET_KEY,
        urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT

    })
};