import { Document, Types } from "mongoose";

export interface IBus extends Document {
    name: string;
    type: string;
    capacity: number;
    route: string;
    driver: string;
    contact: string;
}
