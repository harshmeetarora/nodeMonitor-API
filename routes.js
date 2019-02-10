let express = require('express');
let model = require('./Database/db.js');


let router  = express.Router();


router.route('/getData')
     .get((req,res) => {
         var dbPromise = model.getData();
         dbPromise.then(
             function(content){
                 console.log(content);
                 res.send(content);
             },
             function(err){
                res.send("error get calendar: " + err);
            }
         );
     }
);

module.exports = router;