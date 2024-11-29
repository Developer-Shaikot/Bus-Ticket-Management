import express from "express";
const router = express.Router();
let { isAuthenticated, isAdmin } = require("../middleware/auth");
import {
    addTicket,
    updateTicket,
    deleteTicket,
    getTickets,
    purchaseTicket,
} from "../controllers/ticketController";

// Ticket routes
router.post("/admin/ticket", isAuthenticated, isAdmin, addTicket); // /api/admin/ticket
router.put("/admin/ticket/:id", isAuthenticated, isAdmin, updateTicket); // Update ticket information
router.delete("/admin/ticket/:id", isAuthenticated, isAdmin, deleteTicket); // Delete a ticket
router.get("/tickets", getTickets); // Get available tickets for specific buses and time periods
router.post("/tickets/purchase", isAuthenticated, purchaseTicket); // /api/tickets/purchase
module.exports = router;
