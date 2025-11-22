const express = require("express");
const router = express.Router();

<<<<<<< HEAD
const upload = const upload = require('../middlewares/multerConfig.js'); // ¡Con la extensión .js!
const uploadCtrl = require("../controllers/uploadController");
const jobsCtrl = require("../controllers/jobsController");
const mpWebhookCtrl = require("../controllers/mpWebhookController");

router.post("/upload", upload.single("file"), uploadCtrl.uploadFile);
router.post("/webhook/mp", mpWebhookCtrl.mercadoPagoWebhook);
=======
const upload = require('../middlewares/multerConfig');
const uploadCtrl = require("./controllers/uploadController");
const jobsCtrl = require("./controllers/jobsController");
const mpWebhookCtrl = require("./controllers/mpWebhookController");

// subir archivo y crear job
router.post("/upload", upload.single("file"), uploadCtrl.uploadFile);

// webhook de mercadopago
router.post("/webhook/mp", mpWebhookCtrl.mercadoPagoWebhook);

// jobs para la impresora
>>>>>>> 6308514aad8df461be0044577285bd1285fbdf13
router.get("/jobs/ready", jobsCtrl.getReadyJobs);
router.post("/jobs/:id/printed", jobsCtrl.markPrinted);

module.exports = router;