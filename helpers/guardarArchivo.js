const fs = require("fs");
const archivo = "./db/data.json";

const guardarBD = (data) => {
  // crea el fichero
  fs.writeFileSync(archivo, JSON.stringify(data));
};

const leerDB = () => {
  // si no existe..
  if (!fs.existsSync(archivo)) {
    return null;
  }

  // leer el archivo
  const info = fs.readFileSync(archivo, {encoding:'utf-8'});
  const data = JSON.parse(info);

  return data;
};

module.exports = {
  guardarBD,
  leerDB
};
