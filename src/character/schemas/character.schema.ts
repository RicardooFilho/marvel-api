import { Schema, model } from "mongoose";

const characterSchema = new Schema({
    name: String,
    description: String
}, { timestamps: true });

export default model("Character", characterSchema);