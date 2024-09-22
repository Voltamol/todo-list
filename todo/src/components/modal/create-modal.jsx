import ModalComponent from "./modal";

const CreateModal = (props)=>{
    return(
        <ModalComponent {...props}>
            <form>
                <input type="text" placeholder="enter task name" className="form-control"/>
            </form>
        </ModalComponent>
    )
}

export default CreateModal;