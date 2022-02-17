import React from "react";

export const printName = (name) => {
    return `my name is ${name}`;
}

const FirstComponent =({name}) => {
    
    return <div>my name is {name}</div>
}

export default FirstComponent;