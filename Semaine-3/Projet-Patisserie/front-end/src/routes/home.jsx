import React, {useState} from "react";
import axios from "axios";
import { RegisterForm, ConnexionForm } from "./components/forms";

const instance = axios.create({
    baseURL: 'http://localhost:8080/',
});

export const Home = () => {
    const [switchLog, setSwitchLog] = useState('');
    const [mail, setMail] = useState('');
    
    const handleMailChange = (e) => {
        setMail(e.target.value);
    };

    const handleSubmit=(e)=>{
        e.preventDefault();

        const user = {email: mail};

        instance
            .post('/switchLog', user)
            .then((data) => setSwitchLog(data.data))
            .catch(err => console.error(err));
    };

    return (
        <React.Fragment>
            <h2>Home</h2>
            <div>
                {(switchLog === '')
                    ? <form method="post" action="/login" onSubmit={(e) => {handleSubmit(e)}}>
                        <label>
                            Mail : 
                            <input type="text" value={mail} onChange={handleMailChange} />
                        </label>
                        <input type="submit" value="Connexion / Inscription" />
                    </form>
                    : switchLog === 'register' 
                        ? <RegisterForm
                            mail={mail}
                            onMailChange={handleMailChange}
                            setSwitchLog={setSwitchLog}
                        /> 
                        : <ConnexionForm
                            mail={mail}
                            onMailChange={handleMailChange}
                            setSwitchLog={setSwitchLog}
                        />
                }               
            </div>
        </React.Fragment>
    );
};