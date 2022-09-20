import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const UsersSchema = new Schema({
    mail: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        validate: value => {
          if(value === "" || value.length < 4){
            throw new Error("champ vide ou trop court")
          }
        },
    },
    firstname: {
        type: String,
        required: true,
        trim: true,
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    // adress: {
    //     type: String,
    //     required: true,
    // },
    // birthday: {
    //     type: String,
    //     required: true,
    // },
    played: {
        type: Boolean,
        required: true,
    },
    games_left: {
        type: Number,
        required: true,
    }
});

const UsersModel = model("users", UsersSchema);
export default UsersModel