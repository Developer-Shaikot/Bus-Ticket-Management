import express from "express";
const router = express.Router();
let { isAuthenticated, isAdmin } = require("../middleware/auth");

let { addBus, updateBus, deleteBus, getBuses } = require("../controllers/busController");

// Bus routes
router.post("/admin/bus", isAuthenticated, isAdmin, addBus); // /api/admin/bus
router.put("/admin/bus/:id", isAuthenticated, isAdmin, updateBus); // Update bus information
router.delete("/admin/bus/:id", isAuthenticated, isAdmin, deleteBus); // Delete a bus
router.get("/buses", getBuses); // Get all available buses

module.exports = router;
