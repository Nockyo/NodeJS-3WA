import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const { Schema, model } = mongoose;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "mail invalide"],
    },
    firstname: {
        type: String,
        required: true,
        trim: true,
        validate: value => {
            if(value === "" || value.length <= 2){
              throw new Error("champ vide ou trop court")
            }
        },
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
        validate: value => {
            if(value === "" || value.length <= 2){
                throw new Error("champ vide ou trop court")
            }
        },
    },
    password: {
        type: String,
        required: true,
        trim: true,
        // TODO : Améliorer la vérification avec un match et une regex
        validate: value => {
            if(value === "" || value.length <= 2){
              throw new Error("champ vide ou trop court")
            }
        },
    }
});

UserSchema.pre('save', async function(){
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
})

const UserModel = model("user", UserSchema);
export default UserModel

