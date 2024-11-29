import mongoose, { Schema, Document } from "mongoose";
import { IBus } from "../types/IBus";

const busSchema = new Schema<IBus>(
    {
        name: {
            type: String,
            required: [true, "Bus name is required"],
        },
        type: {
            type: String,
            enum: ["AC", "Non-AC"],
            required: [true, "Bus type is required"],
        },
        capacity: {
            type: Number,
            required: [true, "Bus capacity is required"],
        },
        route: {
            type: String,
            required: [true, "Route information is required"],
        },
        driver: {
            type: String,
            required: [true, "Driver name is required"],
        },
        contact: {
            type: String,
            required: [true, "Driver contact is required"],
        },
    },
    { timestamps: true }
);

const Bus = mongoose.model<IBus>("Bus", busSchema);

export default Bus;
