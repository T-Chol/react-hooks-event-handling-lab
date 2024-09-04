import React, { useState } from "react";
// Code Keypad Component Here
function Keypad (){
    const handleChange = () => {
        console.log('Entering password...');
      };
    
    return (
        <div>
            <input type="password" onChange={handleChange} placeholder="Enter Password"/>
        </div>
        
    )
}

export default Keypad;