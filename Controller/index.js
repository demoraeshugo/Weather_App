const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("../Models/database");
const citylistjson = require("../Models/city.list.json");

//middleware
app.use(cors());
app.use(express.json());

//Populate Database
app.post("/populate/:key", async (req, res) => {
  const { key } = req.params;
  if (key == process.env.REACT_APP_DATABASE_KEY) {
    try {
      //for (let city of citylistjson) {
      for(let i = 0; i < citylistjson.length; i++) {
        const city = citylistjson[i];
        const { id, name, country } = city;
        const x = city.coord.lon;
        const y = city.coord.lat;
        const query = "INSERT INTO city VALUES ($1, $2, $3, point($4, $5))";
        const values = [id, name, country, x, y];
        const newCity = await pool.query(query, values);
        res.json(await newCity.rows[0]);
      }
    } catch (err) {
      console.log(err.message);
    }
  } else {
    console.log("incorrect key")
  }
});

//Get suggestions
app.get("/suggestions/:input", async (req, res) => {
  try {
    const { input } = req.params;
    const query = "SELECT * FROM city WHERE name LIKE '" + input + "%'";
    const suggestions = await pool.query(query);
    res.json(suggestions.rows);
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(5000, () => {
  console.log("Server has started on port 5000");
});
