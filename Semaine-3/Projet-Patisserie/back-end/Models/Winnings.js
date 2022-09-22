import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const WinningsSchema = new Schema({
    user_id: {
        type: String,
        required: true,
    },
    pastries_id: {
        type: String,
        required: true,
    }
});

const WinningsModel = model("winnings", WinningsSchema);
export default WinningsModel