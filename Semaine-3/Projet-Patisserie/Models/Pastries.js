import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const PastriesSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    }
});

const PastriesModel = model("pastries", PastriesSchema);
export default PastriesModel