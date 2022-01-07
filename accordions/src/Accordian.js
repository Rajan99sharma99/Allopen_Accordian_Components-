import React, { useState } from "react";

function Accordian({text,index,children, isExpand = false}) {
    const [expand, setExpand] = useState(isExpand)
    

    return (
        <div className="container">
        <div className="header" onClick={()=>setExpand(!expand)}>
        <h1 className="title">{index}.   {text} {index}</h1>
        {!expand &&  <span><i class="fa fa-angle-down" ></i></span>}
        {expand &&  <span><i class="fa fa-angle-up"></i></span>}
       
        </div>



        {expand && <div className="content">
        {children}
        </div>}
    </div>)
}

export default Accordian;
