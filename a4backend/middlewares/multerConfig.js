const express = require('express');
const router = express.Router();

// 🛑 ESTA LÍNEA DEBE CAMBIAR 🛑
// Sube un nivel (..) y entra en la carpeta 'middlewares'
const upload = require('../middlewares/multerConfig'); 

// ... (otros requires de controladores)

// Ejemplo de cómo usar 'upload' en una ruta
router.post('/print-job', upload.single('documento'), (req, res) => {
    // La lógica de impresión va aquí
});

module.exports = router;