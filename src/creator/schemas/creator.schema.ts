import { Schema, model } from 'mongoose';

const creatorSchema = new Schema({
    firstName: String,
    middleName: String,
    lastName: String,
    suffix: String,
    fullName: String,
}, { timestamps: true });

export default model("Creator", creatorSchema);