import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8080/',
});

export const ConnexionForm = (props) => {
    const { mail, onMailChange, setSwitchLog } = props;
    const [password, setPassword] = useState('');
    //TODO : Améliorer l'affichage des erreurs
    const [errors, setErrors] = useState('');
    const navigate = useNavigate();

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit=(e)=>{
        e.preventDefault();

        const user = {
            email: mail,
            password: password
        };

        instance
            .post('/login', user)
            .then((response) => {
                console.log(response.data)
                // instance.defaults.headers.common['authorization'] = response.data;
                navigate("/yams");
            })
            .catch(err => {
                console.error(err.response.data)
                setErrors(err.response.data)
            });
    };

    const onClickPrev = () => {
        setSwitchLog('');
    };
    
    return (
        <React.Fragment>
            <form onSubmit={(e) => {handleSubmit(e)}}>
                {errors.length > 0 && <p>{errors}</p>}
                <label>
                    Mail : 
                    <input type="text" value={mail}  onChange={onMailChange}/>
                </label>
                <label>
                    Password : 
                    <input type="password" value={password} onChange={onPasswordChange} />
                </label>
                <input type="submit" value="Connexion" />
                <button className="prevButton" onClick={() => onClickPrev()} >Précédent</button>
            </form>
        </React.Fragment>
    );
};

export const RegisterForm = (props) => {
    const { mail, onMailChange, setSwitchLog } = props;
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    //TODO : Améliorer l'affichage des erreurs
    const [errors, setErrors] = useState('');
    const navigate = useNavigate();

    const onFirstnameChange = (e) => {
        setFirstname(e.target.value);
    };

    const onLastnameChange = (e) => {
        setLastname(e.target.value);
    };

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const onPasswordConfirmChange = (e) => {
        setPasswordConfirm(e.target.value);
    };

    const handleSubmit=(e)=>{
        e.preventDefault();

        const user = {
            email: mail,
            firstname: firstname,
            lastname: lastname,
            password: password,
            passwordConfirm: passwordConfirm
        };

        instance
            .post('/register', user)
            .then((response) => {
                console.log(response.data);
                navigate("/yams");
            })
            .catch(err => {
                setErrors(err.response.data.message)
                // let str = err.response.data.message
                // String.prototype.match()
                console.error(errors)
            });
    };

    const onClickPrev = () => {
        setSwitchLog('');
    };
    
    return (
        <React.Fragment>
            <form onSubmit={(e) => {handleSubmit(e)}}>
                {errors.length > 0 && <p>{errors}</p>}
                <label>
                    Mail : 
                    <input type="text" value={mail} onChange={onMailChange}/>
                </label>
                <label>
                    Firstname : 
                    <input type="text" value={firstname} onChange={onFirstnameChange} />
                </label>
                <label>
                    Lastname : 
                    <input type="text" value={lastname} onChange={onLastnameChange} />
                </label>
                <label>
                    Password : 
                    <input type="password" value={password} onChange={onPasswordChange} />
                </label>
                <label>
                    Confirm password : 
                    <input type="password" value={passwordConfirm} onChange={onPasswordConfirmChange} />
                </label>
                <input type="submit" value="Inscription" />
                <button className="prevButton" onClick={() => onClickPrev()} >Précédent</button>
            </form>
        </React.Fragment>
    );
};