const path = require("path");
const fs = require("fs");

const dbPath = path.join(__dirname, "../db.json");

function readDB() {
  return JSON.parse(fs.readFileSync(dbPath));
}

function writeDB(data) {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
}

exports.getReadyJobs = (req, res) => {
  const db = readDB();
  const ready = db.jobs.filter(j => j.status === "ready_to_print");
  res.json(ready);
};

exports.markPrinted = (req, res) => {
  const id = req.params.id;

  const db = readDB();
  const job = db.jobs.find(j => j.id === id);

  if (!job) return res.status(404).json({ error: "Not found" });

  job.status = "printed";
  writeDB(db);

  res.json({ ok: true });
};