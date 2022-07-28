const { Router } = require("express");
const router = Router();

const mysqlConnection = require("../database");

//  MAIN ROUTE
router.get("/", (req, res) => {
  try {
    const data = {
      data: "API developed by Angelo Contreras - Github: @AngeloContrera5",
    };
    res.json(data);
  } finally {
    mysqlConnection.destroy();
  }
});

//  words

router.get("/words", (req, res) => {
  try {
    mysqlConnection.query("SELECT * FROM tb_words", (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
        mysqlConnection.destroy();
      }
    });
  } finally {
    mysqlConnection.destroy();
  }
});

router.get("/words/:id", (req, res) => {
  try {
    const { id } = req.params;
    mysqlConnection.query(
      "SELECT * FROM tb_words WHERE id_word = ?",
      [id],
      (err, rows, fields) => {
        if (!err) {
          res.json(rows[0]);
        } else {
          console.log(err);
          mysqlConnection.destroy();
        }
      }
    );
  } finally {
    mysqlConnection.destroy();
  }
});

//  words in english

router.get("/wordsEng", (req, res) => {
  try {
    mysqlConnection.query(
      "SELECT words_eng FROM tb_words",
      (err, rows, fields) => {
        if (!err) {
          res.json(rows);
        } else {
          console.log(err);
          mysqlConnection.destroy();
        }
      }
    );
  } finally {
    mysqlConnection.destroy();
  }
});

//  words in spanish

router.get("/wordsEsp", (req, res) => {
  try {
    mysqlConnection.query(
      "SELECT words_esp FROM tb_words",
      (err, rows, fields) => {
        if (!err) {
          res.json(rows);
        } else {
          console.log(err);
          mysqlConnection.destroy();
        }
      }
    );
  } finally {
    mysqlConnection.destroy();
  }
});

module.exports = router;
