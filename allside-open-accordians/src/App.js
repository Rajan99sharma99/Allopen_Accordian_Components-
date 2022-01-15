
import { useState } from 'react/cjs/react.development';
import './App.css';


import Accordian from './Accordian';
import { useEffect } from 'react';



function App() {
  const data=[
    {
        que:"How are yoy?",
        ans:"Chaka Cha.k"
    },
    {
        que:"what are u doing these days ?",
        ans:"I am doing trainning from 10x Academy of Full-stack-development."
  
    },
    {
        que:"What is carrer possiblities is ur bootcamp ?",
        ans:"Carrer possiblities is really good in my bootcamp looking forward to sit in placements."
    }
  
  ]
 
 

  const [dir, setDirn] = useState("up")
 


  return (
    <>
      <div className='main'>

        <div className='btns'>
          <button onClick={()=>setDirn("down")}><i class="fas fa-angle-down btn"></i></button>
          <button onClick={()=>setDirn("up")}><i class="fas fa-angle-up btn"></i></button>
          <button onClick={()=>setDirn("left")}><i class="fas fa-angle-left btn "></i></button>
          <button onClick={()=>setDirn("right")}><i class="fas fa-angle-right btn"></i></button>

        </div>
        <div className='items'>
        {
          data.map((curElem,index)=>(
           
            <Accordian  que={curElem.que} ans={curElem.ans} index={index} key={index} dir={dir}/>
          ))
        }
        </div>
      </div>
    </>
  );
}

export default App;
