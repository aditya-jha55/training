import React from "react";


interface Props{
    data: string,
    sendToParent: any 
}

export default function Child(props: Props){
    const {data, sendToParent} = props;
    const [inputValus, setInputValue] = React.useState('')
    return(
        <div className="child">
            <h2>Child</h2>
            <p>data from parent component:- <b>{data}</b> </p>
            <label htmlFor=""></label>
            <input type="text" onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={() => sendToParent(inputValus)}>send data to parent</button>
        </div>
    )
}