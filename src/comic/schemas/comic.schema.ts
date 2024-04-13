import { Schema, model } from "mongoose";

const comicSchema = new Schema({
    digitalId: Number,
    title: String,
    issueNumber: Number,
    variantDescription: String,
    description: String,
    isbn: String,
    diamondCode: String,
    format: String,
    pageCount: Number,
}, { timestamps: true });

export default model("Comic", comicSchema);