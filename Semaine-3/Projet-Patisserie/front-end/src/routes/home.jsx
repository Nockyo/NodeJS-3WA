import React, {useState, useEffect} from "react";
import { getData } from "../utils/fetch";
import { RegisterForm, ConnexionForm } from "./components/forms";

export const Home = () => {
    const [connexion, setConnexion] = useState(false);
    const [register, setRegister] = useState(false);
    const [mail, setMail] = useState('');
    const [users, setUsers] = useState([]);
    
    //MODIFIER APPELER JUSTE LES MAILS
    useEffect(() => {
        const data = getData("users");
        data
            .then(data => setUsers(data.users));
    }, []);

    const handleMailChange = (e) => {
        setMail(e.target.value);
    };

    // below function will be called when user
    // click on submit button .
    const handleSubmit=(e)=>{
        //Faire les vérifs
        users.map(user => {
            if(user.mail === mail) {
                console.log('redirect to connexion')
                setConnexion(true);
                setRegister(false);
            } else {
                console.log('redirect to inscription')
                setRegister(true);
                setConnexion(false);
            }  
        })
        e.preventDefault();
    };

    return (
        <React.Fragment>
            <h2>Home</h2>
            {(!connexion && !register)
                ? <form method="post" action="/login" onSubmit={(e) => {handleSubmit(e)}}>
                    <label>
                    Mail : 
                    <input type="text" value={mail} onChange={handleMailChange} />
                    </label>
                    <input type="submit" value="Connexion / Inscription" />
                </form>
                : register 
                    ? <RegisterForm
                        mail={mail}
                        onMailChange={handleMailChange}
                      /> 
                    : <ConnexionForm
                        mail={mail}
                        onMailChange={handleMailChange}
                      />
            }
        </React.Fragment>
    );
};