const Test = require("../models/test");


// all responsable
exports.index = async (req, res) => {

    Test.find()
          .then(result => {
            return res.status(200).json({
                msg: "fetch all data",
                result
            })
          })
          .catch(err => {
            console.log(err);
          });
}

