var express = require("express"),
    router = express.Router(),
    login = require("../models/login.js");

router.post("/login", function (req, res) {
    var obj = req.body;
    var model = new login(obj);
    console.log(req.body);
    model.find({
        name: model.name,
        password:model.password
    }, function (err, data) {
        if (err) {
            res.send("error");
            return;
        }
        res.send("success");
    });
});

module.exports = router;