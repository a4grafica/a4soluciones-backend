const express = require("express");
const cors = require("cors");
const path = require("path");
const router = require("./routes/routes");

// NOTA: El middleware 'multerConfig' debería importarse DENTRO de routes/routes.js
//       No es necesario importarlo aquí en index.js si solo lo usa el archivo de rutas.
// Si lo necesitas globalmente, quedaría así:
// const upload = require("./middlewares/multerConfig"); 
const app = express();

app.use(cors());
app.use(express.json());
<<<<<<< HEAD
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/", router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Backend funcionando en puerto " + PORT));
=======

// Carpeta para archivos subidos
app.use("/files", express.static(path.join(__dirname, "files")));

// Rutas principales
app.use("/", router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Backend funcionando en puerto ${PORT}`);
});
>>>>>>> 6308514aad8df461be0044577285bd1285fbdf13
