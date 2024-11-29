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
router.put("/admin/ticket/:id", isAuthenticated, isAdmin, updateTicket); // /api/admin/ticket/:id
router.delete("/admin/ticket/:id", isAuthenticated, isAdmin, deleteTicket); // /api/admin/ticket/:id
router.get("/tickets", getTickets); // /api/tickets
router.post("/tickets/purchase", isAuthenticated, purchaseTicket); // /api/tickets/purchase
module.exports = router;
