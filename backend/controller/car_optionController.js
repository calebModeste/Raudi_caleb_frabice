const connect = require("../database/database");

exports.getCar_optionAll = async (req, res) => {
  try {
    console.log("query running....");
    const rows = await connect.pool.query("");
    res.status(200).json(rows);
  } catch (error) {
    console.log("erreur", error);
  }
};