const express = require("express");
const router = express.Router();

// Importación de multer (¡con la extensión .js!)
const upload = require('../middlewares/multerConfig.js'); 

// Importación de controladores
const uploadCtrl = require("../controllers/uploadController");
const jobsCtrl = require("../controllers/jobsController");
const mpWebhookCtrl = require("../controllers/mpWebhookController");

// ----------------------------------------------------
// RUTAS
// ----------------------------------------------------

// subir archivo y crear job
router.post("/upload", upload.single("file"), uploadCtrl.uploadFile);

// webhook de mercadopago
router.post("/webhook/mp", mpWebhookCtrl.mercadoPagoWebhook);

// jobs para la impresora
router.get("/jobs/ready", jobsCtrl.getReadyJobs);
router.post("/jobs/:id/printed", jobsCtrl.markPrinted);

module.exports = router;