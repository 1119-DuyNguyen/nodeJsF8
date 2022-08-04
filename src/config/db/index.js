const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/odl_demo_f8_dev');
        console.log('succes full');
    } catch (err) {}
}
module.exports = { connect };
