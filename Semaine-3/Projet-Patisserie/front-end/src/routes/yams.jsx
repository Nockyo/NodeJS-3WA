import React from "react";
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8080/',
});

export const Yams = () => {

    const playGame = () => {
        console.log(instance.defaults.headers.common['authorization'])
        instance
            .get('/yams')
            .then((response) => console.log(response))
            .catch(err => console.error(err));
    }

    return (
        <React.Fragment>
            <h2>Yams</h2>
            <button onClick={playGame}>Jouer</button>
        </React.Fragment>
    )
}