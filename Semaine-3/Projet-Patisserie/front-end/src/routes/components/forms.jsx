import React, {useState} from "react";

export const RegisterForm = (props) => {
    const { mail, onMailChange } = props;
    const [password, setPassword] = useState('');

    const handleSubmit=(e)=>{
        //Faire les vérifs
        console.log("connexion", mail)
        e.preventDefault();
    };

    const onPasswordChange = (e) => {
        setPassword(e.target.value)
    }
    
    return (
        <React.Fragment>
            <form onSubmit={(e) => {handleSubmit(e)}}>
                <label>
                Mail : 
                <input type="text" value={mail} onChange={onMailChange} />
                </label>
                <label>
                Password : 
                <input type="text" value={password} onChange={onPasswordChange} />
                </label>
                <input type="submit" value="Inscription" />
            </form>
        </React.Fragment>
    )
};

export const ConnexionForm = (props) => {
    const { mail, onMailChange } = props;
    const [password, setPassword] = useState('');

    const handleSubmit=(e)=>{
        //Faire les vérifs
        console.log("connexion", mail)
        e.preventDefault();
    };

    const onPasswordChange = (e) => {
        setPassword(e.target.value)
    }
    
    return (
        <React.Fragment>
            <form onSubmit={(e) => {handleSubmit(e)}}>
                <label>
                Mail : 
                <input type="text" value={mail} onChange={onMailChange} />
                </label>
                <label>
                Password : 
                <input type="text" value={password} onChange={onPasswordChange} />
                </label>
                <input type="submit" value="Connexion" />
            </form>
        </React.Fragment>
    )
};