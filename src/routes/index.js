const { Router } = require("express");
const router = Router();

const mysqlConnection = require("../database");

//  MAIN ROUTE
router.get("/", (req, res) => {
  const data = {
    data: "API developev by Angelo Contreras",
  };
  res.json(data);
});

//  words

router.get("/words", (req, res) => {
  mysqlConnection.query("SELECT * FROM tb_words", (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});

router.get("/words/:id", (req, res) => {
  const { id } = req.params;
  mysqlConnection.query(
    "SELECT * FROM tb_words WHERE id_word = ?",
    [id],
    (err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
      }
    }
  );
});

//  words in english

router.get("/wordsEng", (req, res) => {
  mysqlConnection.query(
    "SELECT words_eng FROM tb_words",
    (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    }
  );
});

//  words in spanish

router.get("/wordsEsp", (req, res) => {
  mysqlConnection.query(
    "SELECT words_esp FROM tb_words",
    (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    }
  );
});

module.exports = router;
