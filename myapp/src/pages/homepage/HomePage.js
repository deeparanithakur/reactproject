import React from 'react' ;
import { FontAwesomeIcon } from"@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core"
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { IconName } from "react-icons/bs";
import{ BsFillAwardFill } from "react-icons/bs";

const HomePage = () => {
    return (
        <div>
        
        
        <h1 style = {{textAlign : ' center' }}>Welcome to Bodhivruksha e commerce app</h1>
        

        
        <BsFillAwardFill/>
        
        </div>
    );
};
export default HomePage;