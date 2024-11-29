import { Request, Response, NextFunction } from "express";
import Ticket from "../models/ticketModel";

// Upload a new ticket for a specific bus and time
export const addTicket = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { bus, time, price, seatNumber } = req.body;

        const ticket = await Ticket.create({
            bus,
            time,
            price,
            seatNumber,
        });

        res.status(201).json({
            success: true,
            ticket,
        });
    } catch (error) {
        console.error(error);
        next(error);
    }
};

// Update ticket information
export const updateTicket = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const ticket = await Ticket.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        }).populate("bus");

        if (!ticket) {
            return res.status(404).json({ success: false, message: "Ticket not found" });
        }

        res.status(200).json({
            success: true,
            ticket,
        });
    } catch (error) {
        console.error(error);
        next(error);
    }
};

// Delete a ticket
export const deleteTicket = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const ticket = await Ticket.findByIdAndDelete(req.params.id);

        if (!ticket) {
            return res.status(404).json({ success: false, message: "Ticket not found" });
        }

        res.status(200).json({
            success: true,
            message: "Ticket deleted successfully",
        });
    } catch (error) {
        console.error(error);
        next(error);
    }
};

// Get available tickets for specific buses and time periods
export const getTickets = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { bus, startTime, endTime } = req.query;

        const filters: any = {};
        if (bus) filters.bus = bus;
        if (startTime && endTime) {
            filters.time = {
                $gte: new Date(startTime as string),
                $lte: new Date(endTime as string),
            };
        }

        const tickets = await Ticket.find(filters).populate("bus").sort({ time: 1 });

        res.status(200).json({
            success: true,
            tickets,
        });
    } catch (error) {
        console.error(error);
        next(error);
    }
};

// Purchase a ticket
export const purchaseTicket = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { ticketId } = req.body;

        const ticket = await Ticket.findById(ticketId);

        if (!ticket) {
            return res.status(404).json({ success: false, message: "Ticket not found" });
        }

        if (ticket.status === "booked") {
            return res.status(400).json({ success: false, message: "Ticket already booked" });
        }

        ticket.status = "booked";
        await ticket.save();

        res.status(200).json({
            success: true,
            message: "Ticket purchased successfully",
            ticket,
        });
    } catch (error) {
        console.error(error);
        next(error);
    }
};
