import mongoose, { Document, Types } from "mongoose";

export interface ITicket extends Document {
    bus: mongoose.Schema.Types.ObjectId;
    time: Date;
    price: number;
    seatNumber: string;
    status: string;
}
