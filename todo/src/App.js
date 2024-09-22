import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BsPencil,BsTrash} from 'react-icons/bs';
const TodoItem=(props)=>{
  const className = "todo-item my-1 border border-1 border-light py-3 ps-2 d-flex justify-content-around"
  return(
    <li className={className} style={{letterSpacing:'1px',cursor:'pointer'}}>{props.children}</li>
  )
}

function App() {
  return (
    <div className="App">
        <ul className="container border border-1 border-secondary mt-5 py-2" style={{listStyleType:'none'}}>
            <TodoItem>
              cook
              <div className="container me-3 bg-warning" style={{width:'100px'}}>
                  <BsPencil className='mx-2'/>
                  <BsTrash className='mx-2'/>
              </div>
            </TodoItem>

            <TodoItem>clean</TodoItem>
            <TodoItem>bath</TodoItem>
            <TodoItem>gardening</TodoItem>
        </ul>
    </div>
  );
}

export default App;
