const express = require("express");
const cors = require("cors");
const path = require("path");

// Asumimos que quieres mantener la nueva estructura de carpetas:
// La ruta DEBE apuntar a la carpeta 'routes' y al archivo 'routes.js' dentro de ella.
const router = require("./routes/routes"); 

// NOTA: El middleware 'multerConfig' debería importarse DENTRO de routes/routes.js
//       No es necesario importarlo aquí en index.js si solo lo usa el archivo de rutas.
// Si lo necesitas globalmente, quedaría así:
// const upload = require("./middlewares/multerConfig"); 

const app = express();

app.use(cors());
app.use(express.json());

// Carpeta para archivos subidos
app.use("/files", express.static(path.join(__dirname, "files")));

// Rutas principales
app.use("/", router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Backend funcionando en puerto ${PORT}`);
});