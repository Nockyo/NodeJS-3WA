import React, {useState, useEffect} from "react";
import { getData } from "../utils/fetch";

export const Home = () => {
    const [mail, setMail] = useState('');
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        const data = getData("users");
        data
            .then(data => setUsers(data.users));
    }, []);

    // handleChange = handleChange.bind();
    // handleSubmit = handleSubmit.bind();

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
            } else {
                console.log('redirect to inscription')
            }  
        })
        e.preventDefault();
    }

    return (
        <React.Fragment>
            <h2>Home</h2>
            <form onSubmit={(e) => {handleSubmit(e)}}>
                <label>
                Mail : 
                <input type="text" value={mail} onChange={handleMailChange} />
                </label>
                <input type="submit" value="Envoyer" />
            </form>
        </React.Fragment>
    );
};