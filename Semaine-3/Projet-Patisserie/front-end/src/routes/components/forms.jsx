import React from "react";

export const RegisterForm = (props) => {

    const { mail, onMailChange } = props;

    const handleSubmit=(e)=>{
        //Faire les vérifs
        console.log("register", mail)
        e.preventDefault();
    };

    return (
        <React.Fragment>
            <form onSubmit={(e) => {handleSubmit(e)}}>
                <label>
                Mail : 
                <input type="text" value={mail} onChange={onMailChange} />
                </label>
                <input type="submit" value="Inscription" />
            </form>
        </React.Fragment>
    )
};

export const ConnexionForm = (props) => {
    const { mail, onMailChange } = props;

    const handleSubmit=(e)=>{
        //Faire les vérifs
        console.log("connexion", mail)
        e.preventDefault();
    };
    
    return (
        <React.Fragment>
            <form onSubmit={(e) => {handleSubmit(e)}}>
                <label>
                Mail : 
                <input type="text" value={mail} onChange={onMailChange} />
                </label>
                <input type="submit" value="Connexion" />
            </form>
        </React.Fragment>
    )
};