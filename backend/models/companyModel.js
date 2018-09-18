const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    Name: { type: String, required: true, unique: true },
    CreateDate: { type: Date, default: new Date() },
    CompanyID: { type: mongoose.Schema.Types.ObjectId, required: true, default: mongoose.Types.ObjectId }
});

mongoose.model('Companies', companySchema);