import styles from "./reviewModal.module.css";

import { useContext } from "react";

import {HotelContext} from "../../context/HotelContext"

export const Modal=()=>
{
    const {state,dispatch}=useContext(HotelContext);
    const {input:{name}}=state;
    return (
        <div className={styles.modal}>
            <div className={styles[`modal-container`]}>
                {/* input fields */}
                <label htmlFor="name">Name</label>
                <input id="name" value={name} placeholder="Enter Name" onChange={(e)=>dispatch({type:"INPUT_FIELDS",payload:e.target.value,inputField:"name"})}></input> 

                <button onClick={()=>dispatch({type:"ADD"})}>Submit</button>
                <button onClick={()=>dispatch({type:"CLEAR_INPUT"})}>Close</button>
            </div>
        </div>
    )
}