const express = require("express");
const router = express.Router();

const upload = require("../middlewares/multerConfig");
const uploadCtrl = require("../controllers/uploadController");
const jobsCtrl = require("../controllers/jobsController");
const mpWebhookCtrl = require("../controllers/mpWebhookController");

router.post("/upload", upload.single("file"), uploadCtrl.uploadFile);
router.post("/webhook/mp", mpWebhookCtrl.mercadoPagoWebhook);
router.get("/jobs/ready", jobsCtrl.getReadyJobs);
router.post("/jobs/:id/printed", jobsCtrl.markPrinted);

module.exports = router;