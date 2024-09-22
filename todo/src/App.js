import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BsPencil,BsTrash,BsPlusCircleFill} from 'react-icons/bs';
import React,{useState} from 'react';
import CreateModal from './components/modal/create-modal';
import UpdateModal from './components/modal/edit-modal';
import DeleteModal from './components/modal/delete-modal';

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
        <BsPencil className='mx-2 text-primary' onClick={props.update} />
        <BsTrash className='mx-2 text-danger' onClick={props.delete} />
    </div>
  )
}

function App() {
  const starting=['cook','clean','bath','gardening']
  const [items,setItems] =useState([])
  if (!starting.some(item => items.includes(item))) {
    setItems(prevItems => [...prevItems, ...starting]);
  }

  //create
  const [showCreateModal,setShowCreateModal] = useState(false)
  const openCreateModal = ()=>{setShowCreateModal(true)}
  const closeCreateModal = ()=>{setShowCreateModal(false)}

  //update
  const [showUpdateModal,setShowUpdateModal] = useState(false)
  const openUpdateModal = ()=>{setShowUpdateModal(true)}
  const closeUpdateModal = ()=>{setShowUpdateModal(false)}

  //delete
  const [showDeleteModal,setShowDeleteModal] = useState(false)
  const openDeleteModal = ()=>{setShowDeleteModal(true)}
  const closeDeleteModal = ()=>{setShowDeleteModal(false)}

  return (
    <div className="App">
        <div className="container d-flex justify-content-end mt-5 py-2">
          <BsPlusCircleFill className='text-success' style={{fontSize:'24px',cursor:'pointer'}} onClick={openCreateModal} />
        </div>
        <ul className="container border border-1 border-secondary py-2" style={{listStyleType:'none'}}>
            {
              items.map((item,index)=>(
                <TodoItem key={index}>
                  {item}
                  <Options index={index} update={openUpdateModal} delete={openDeleteModal} />
            </TodoItem>

              ))
            }
        </ul>
        <CreateModal  show={showCreateModal} onHide={closeCreateModal} heading="Create Item" />
        <UpdateModal  show={showUpdateModal} onHide={closeUpdateModal} heading="Update Item" />
        <DeleteModal  show={showDeleteModal} onHide={closeDeleteModal} heading="Delete Item 😐" />
    </div>
  );
}

export default App;
