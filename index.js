const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 4000;
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

let FirstLevel = require("./model");
let SecondLevel = require("./model2");
let ThirdLevel = require("./model3");
let FourthLevel = require("./model4");

const router = express.Router();
app.use("/", router);

mongoose.connect("mongodb://127.0.0.1:27017/details", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once("open", function () {
  console.log("Connection with MongoDB was successful");
});

// var firstLevelBoss = "";
// var bossSecondLevel = "";

router.route("/getFirst").get(function (req, res) {
  FirstLevel.find({}, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

router.route("/getSecond").get(function (req, res) {
  SecondLevel.find({}, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

router.route("/getThird").get(function (req, res) {
  ThirdLevel.find({}, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

router.route("/getFourth").get(function (req, res) {
  FourthLevel.find({}, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

router.route("/addLevelTwo").post((req, res) => {
  var name = req.body.name;
  var boss_name = req.body.boss_name;
  var level = req.body.level;
  var position = req.body.position;
  var createdAt = new Date();
  var data = new SecondLevel({
    name,
    position,
    boss_name,
    level,
    createdAt,
    bonus: 0,
  });

  data.save();
});

router.route("/addLevelThree").post(function (req, res) {
  var name = req.body.name;
  var boss_name = req.body.boss_name;
  var level = req.body.level;
  var position = req.body.position;

  var createdAt = new Date();
  var data = new ThirdLevel({
    name,
    position,
    boss_name,
    level,
    createdAt,
    bonus: 0,
  });

  data.save();
});

router.route("/addLevelFour").post(function (req, res) {
  var name = req.body.name;
  var boss_name = req.body.boss_name;
  var level = req.body.level;
  var position = req.body.position;
  var createdAt = new Date();
  var data = new FourthLevel({
    name,
    position,
    boss_name,
    level,
    createdAt,
    bonus: 0,
  });

  data.save();
});

router.route("/updateFirst").put((req, res) => {
  FirstLevel.findOneAndUpdate(
    { name: req.body.boss_name },
    { $inc: { bonus: 1 } },
    { returnOriginal: false },
    (err, doc) => {
      if (err) {
        console.log("Something wrong when updating data!");
      }

      console.log(doc);
    }
  );
});

router.route("/updateSecond").put((req, res) => {
  SecondLevel.findOneAndUpdate(
    { name: req.body.boss_name },
    { $inc: { bonus: 1 } },
    { returnOriginal: false },
    (err, doc) => {
      if (err) {
        console.log("Something wrong when updating data!");
      }

      console.log(doc);
    }
  );
});

router.route("/updateThird").put((req, res) => {
  ThirdLevel.findOneAndUpdate(
    { name: req.body.boss_name },
    { $inc: { bonus: 1 } },
    { returnOriginal: false },
    (err, doc) => {
      if (err) {
        console.log("Something wrong when updating data!");
      }

      console.log(doc);
    }
  );
});

// router.route("/getBossFirstLevel").get(function (req, result) {
//   SecondLevel.findOne({ name: bossSecondLevel }, function (err, result1) {
//     if (err) {
//       result.send(err);
//     } else {
//       result.send(result1);
//       firstLevelBoss = result1.boss_name;
//       console.log(firstLevelBoss);
//     }
//   });
// });

// router.route("/updatePreviousFirst").put((req, res) => {
//   FirstLevel.findOneAndUpdate(
//     { name: firstLevelBoss },
//     { $inc: { bonus: 1 } },
//     { returnOriginal: false },
//     (err, doc) => {
//       if (err) {
//         console.log("Something wrong when updating data!");
//       }

//       console.log(doc);
//     }
//   );
// });

app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});
