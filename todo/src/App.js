import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BsPencil,BsTrash,BsPlusCircleFill} from 'react-icons/bs';
import React,{useState} from 'react';

const TodoItem=(props)=>{
  const [borderWidth,setBorderWidth] = useState(1);
  const className = `todo-item my-1 border border-${borderWidth} border-light py-3 ps-2 d-flex justify-content-around`
  return(
    <li className={className} style={{letterSpacing:'1px',cursor:'pointer'}} onMouseEnter={()=>setBorderWidth(2)} onMouseLeave={()=>setBorderWidth(1)}>{props.children}</li>
  )
}

const Options=(props)=>{
  return(
    <div className="container me-3 py-1" style={{width:'100px'}}>
        <BsPencil className='mx-2 text-primary'/>
        <BsTrash className='mx-2 text-danger'/>
    </div>
  )
}

function App() {
  const starting=['cook','clean','bath','gardening']
  const [items,setItems] =useState([])
  items.push(...starting)
  return (
    <div className="App">
        <div className="container d-flex justify-content-end mt-5 py-2">
          <BsPlusCircleFill className='text-success' style={{fontSize:'24px',cursor:'pointer'}} />
        </div>
        <ul className="container border border-1 border-secondary py-2" style={{listStyleType:'none'}}>
            {
              items.map((item,index)=>(
                <TodoItem key={index}>
                  {item}
                  <Options/>
            </TodoItem>

              ))
            }
        </ul>
    </div>
  );
}

export default App;
