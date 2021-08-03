//Type 'rfce' to get initial code written for you to save time
import React from 'react'
import "./SidebarOption.css";

//Here we can pass the icons as props (as an argument basically)
//props = icons, test e.t.c
//Use ES6
function SidebarOption({text, Icon}) {
    return (
        <div className="sidebarOption">
            <Icon />
            <h2>{text}</h2>
            
        </div>
    );
}

export default SidebarOption
