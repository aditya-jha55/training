import React from "react";
import Child from "./Child";

export default function Parent(){
    const [childData, setChieldData] = React.useState('')
    const [parentData, setParentData] = React.useState('')
    const receiveChieldData = (value: any) => {
        setChieldData(value)
    }
    return(
        <div>
            <h1>parent</h1>
            <label htmlFor="parentData">Send data to parent</label>
            <input type="text" onChange={(e) => setParentData(e.target.value)} />
            
            <p>Data from child component:- <i>{childData}</i></p>
            <Child 
                data={parentData}
                sendToParent={receiveChieldData}
                />
        </div>
       
    )
}