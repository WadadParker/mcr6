import styles from "./reviewModal.module.css";

import { useContext } from "react";

import {HotelContext} from "../../context/HotelContext"

export const ReviewModal=()=>
{
    const {state,dispatch}=useContext(HotelContext);
    const {input:{rating,comment}}=state;
    return (
        <div className={styles.modal}>
            <div className={styles[`modal-container`]}>
                <button onClick={()=>dispatch({type:"CLEAR_INPUT"})} className={styles[`close-button`]}>x</button>

                <h1 className={styles.heading}>Add Your Review</h1>
                <hr/>

                {/* input fields */}
                <main className={styles.main}>
                <label htmlFor="rating" className={styles.label}>Rating:</label>
                <select>
                    <option disabled selected value="">Select Rating</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>

                <label htmlFor="name" className={styles.label}>Comment:</label>
                <textarea className={styles.comment} id="name" value={comment} onChange={(e)=>dispatch({type:"INPUT_FIELDS",payload:e.target.value,inputField:"comment"})}></textarea> 

                <button className={styles.submit} onClick={()=>dispatch({type:"ADD"})}>Submit</button>
                </main>
            </div>
        </div>
    )
}