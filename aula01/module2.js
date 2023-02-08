const axios = require("axios");
const path = require("path");
async function json() {
  const obj = await axios.get("http://localhost:5500/aula01/persons.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  const result = await obj.data;
  console.log(result);
}

module.exports.json = json;
