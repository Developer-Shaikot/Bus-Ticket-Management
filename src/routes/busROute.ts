import express from "express";
const router = express.Router();
let { isAuthenticated, isAdmin } = require("../middleware/auth");

let { addBus, updateBus, deleteBus, getBuses } = require("../controllers/busController");

// Bus routes
router.post("/admin/bus", isAuthenticated, isAdmin, addBus); // /api/admin/bus
router.put("/admin/bus/:id", isAuthenticated, isAdmin, updateBus); // /api/admin/bus/:id
router.delete("/admin/bus/:id", isAuthenticated, isAdmin, deleteBus); // /api/admin/bus/:id
router.get("/buses", getBuses); // /api/buses

module.exports = router;
