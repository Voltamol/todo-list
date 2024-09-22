import ModalComponent from "./modal";

const UpdateModal = (props)=>{
    return(
        <ModalComponent {...props}>
            <form>
                <input type="text" placeholder="enter task name" className="form-control" value="current value" />
            </form>
        </ModalComponent>
    )
}

export default UpdateModal;