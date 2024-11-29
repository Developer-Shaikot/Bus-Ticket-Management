import { Request, Response, NextFunction } from "express";
import Bus from "../models/busModel";

// Add a new bus
export const addBus = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, type, capacity, route, driver, contact } = req.body;

        const bus = await Bus.create({
            name,
            type,
            capacity,
            route,
            driver,
            contact,
        });

        res.status(201).json({
            success: true,
            bus,
        });
    } catch (error) {
        console.error(error);
        next(error);
    }
};

// Update bus information
export const updateBus = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const bus = await Bus.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!bus) {
            return res.status(404).json({ success: false, message: "Bus not found" });
        }

        res.status(200).json({
            success: true,
            bus,
        });
    } catch (error) {
        console.error(error);
        next(error);
    }
};

// Delete a bus
export const deleteBus = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const bus = await Bus.findByIdAndDelete(req.params.id);

        if (!bus) {
            return res.status(404).json({ success: false, message: "Bus not found" });
        }

        res.status(200).json({
            success: true,
            message: "Bus deleted successfully",
        });
    } catch (error) {
        console.error(error);
        next(error);
    }
};

// Get all available buses
export const getBuses = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const buses = await Bus.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            buses,
        });
    } catch (error) {
        console.error(error);
        next(error);
    }
};
