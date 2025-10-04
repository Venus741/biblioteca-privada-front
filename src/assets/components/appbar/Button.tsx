import { useState } from "react";

export default function ButtonRegister() {

    const [modal, setModal] = useState(false);

    function showModal() {
        setModal(true)
    }

    function closeModal() {
        setModal(false)
    }

    
    return(
        <div>
            <button onClick={() => alert("funcionando")} className="text-sm mt-[10px] bg-blue-500 rounded-full w-30 h-7 text-white">Adicionar</button>
        
            <Modal>
                <h2>Modal</h2>
            </Modal>
        </div>
    
    )
}