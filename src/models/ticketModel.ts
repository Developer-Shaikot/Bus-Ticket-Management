import mongoose, { Schema } from "mongoose";
import { ITicket } from "../types/ITicket";

const ticketSchema = new Schema<ITicket>(
    {
        bus: {
            type: Schema.Types.ObjectId,
            ref: "Bus",
            required: [true, "Bus reference is required"],
        },
        time: {
            type: Date,
            required: [true, "Departure time is required"],
        },
        price: {
            type: Number,
            required: [true, "Ticket price is required"],
        },
        seatNumber: {
            type: String,
            required: [true, "Seat number is required"],
        },
        status: {
            type: String,
            enum: ["available", "booked"],
            default: "available",
        },
    },
    { timestamps: true }
);

const Ticket = mongoose.model<ITicket>("Ticket", ticketSchema);

export default Ticket;
