const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Company = mongoose.model('Companies');

router.get('/', async (req, res, next) => {
  const listOfCompanies = await Company.find({}, (err, docs) => {
    return docs;
  });
  res.json(
    listOfCompanies
  );
});

router.post('/', async (req, res, next) => {
  const newCompany = await new Company({ Name: req.body.name });
  newCompany.save(async (err, docs) => {
    if(err) {
      await res.json({
        success: false
      })
    } else {
      await res.json({
        CompanyID: docs.CompanyID,
        success: true
      })
    }
  });
});

router.put('/', async (req, res, next) => {
  Company.findOneAndUpdate({ CompanyID: req.body.CompanyID}, { Name: req.body.Name }, async (err, docs) => {
    if(err) {
      await res.json({
        success: false
      })
    } else {
      await res.json({
        success: true
      })
    }
  })
});

router.delete('/', async (req, res, next) => {
  Company.findOneAndRemove({ CompanyID: req.body.CompanyID}, async (err) => {
    if(err) {
      await res.json({
        success: false
      })
    } else {
      await res.json({
        success: true
      })
    }
  })
})

module.exports = router;
