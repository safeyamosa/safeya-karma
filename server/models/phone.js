var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    objectId = mongoose.Schema.ObjectId;

var phoneSchema = new Schema({
    _id: {
        type: objectId,
        auto: true
    },
    name: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    job: {
        type: String,
        required: true
    }
}, {
    versionKey: false
});

var phone = mongoose.model('phones', phoneSchema);

module.exports = phone;