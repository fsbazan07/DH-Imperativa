const fs = require("fs");

const lector = function (nombreArchivo) {
  return JSON.parse(
    fs.readFileSync(`${__dirname}/${nombreArchivo}.json`, "utf8")
  );
};

const escritor = function (nombreArchivo, datos) {
  fs.writeFileSync(`${__dirname}/${nombreArchivo}.json`, JSON.stringify(datos));
};

module.exports = { lector, escritor };
