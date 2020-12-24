import React, { useState } from 'react'
import './style.css'
function Clock(){
    let myTime = new Date().toLocaleTimeString();
    const [currTime , setTime] = useState(myTime);

    const UpdateTime = ()=>{
        setTime(new Date().toLocaleTimeString());
    }

    setInterval(UpdateTime , 1000);

    return(
        <div>
            <h1 className="full_back">{currTime}</h1>
        </div>
    )
}

export default Clock