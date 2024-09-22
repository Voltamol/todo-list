import ModalComponent from "./modal";

const DeleteModal = (props)=>{
    
    return(
        <ModalComponent {...props}>
            <h5 className="text-danger">Are you sure you want to delete item X?</h5>
        </ModalComponent>
    )
}

export default DeleteModal;