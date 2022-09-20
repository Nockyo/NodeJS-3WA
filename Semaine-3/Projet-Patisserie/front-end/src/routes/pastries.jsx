import React, { useEffect, useState } from "react";
import { getData } from "../utils/fetch";

export const Pastries = () => {
    const [pastries, setPastries] = useState([]);
    
    useEffect(() => {
        const data = getData("pastries");
        data
            .then(data => setPastries(data.pastries));
    }, []);

    return (
        <React.Fragment>
            <h2>Pastries</h2>
                <ul>
                {
                    pastries.map((pastry, index) => {
                        return <li key={index}>{pastry.name}</li>
                    })
                }
            </ul>
        </React.Fragment>
        
    );
};