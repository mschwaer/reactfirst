import React from "react";
import Button from "./Button";
export default function ButtonList({liste}){
    const listbuttons = liste.map( (mybutton,id) =>
            <Button key={id} bezeichnung={mybutton} />
        );
    return (
       <>
       {listbuttons}
       </>
    )
}