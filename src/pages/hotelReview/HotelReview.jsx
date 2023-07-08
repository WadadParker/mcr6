import styles from "./hotelReview.module.css";
import buttonStyle from "../home/home.module.css";

import {useContext} from 'react';
import {useParams, useNavigate} from "react-router-dom"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import {HotelContext} from "../../context/HotelContext";
import { ReviewCard } from "../../components/reviewCard/ReviewCard";
import {ReviewModal} from "../../components/reviewModal/ReviewModal";

export const HotelReview=()=>
{
    const {state,dispatch,sortByCuisine}=useContext(HotelContext);
    const {hotelList, showModal}=state;
    const {hotelID}=useParams();
    const navigate=useNavigate();

    const hotel=[...hotelList].find(({id})=>id===Number(hotelID))

    const clickHandler=()=>
    {
        dispatch({type:"SELECT_CUISINE",payload:null});
        navigate("/");
    }

    return (
        <> {showModal && <ReviewModal hotel={hotel}/>}
        <div className={styles[`hotel-review-container`]}>
            <nav className={styles.nav}>
            <FontAwesomeIcon icon={faArrowLeft} className={styles.icon} onClick={()=>clickHandler()}/>
            </nav>
            <h1 className={styles.heading}>{hotel?.name}</h1>
            <header className={styles.description}>
                <small>{hotel?.menu.map((item,index)=>index+1===hotel.menu.length?`${item.name}`:`${item.name}, `)}</small>
                <small>{hotel?.address}</small>
                <small>Average Rating: {hotel?.averageRating}</small>
            </header>
            <button className={buttonStyle.button} onClick={()=>dispatch({type:"TOGGLE_MODAL",payload:true})}>Add Review</button>
           <span className={styles.line}> <hr/></span>
           <h2>Reviews</h2>

           <ul className={styles[`review-list-container`]}>
            {hotel?.ratings.map((item,index)=>(
                <li key={index}>
                    <ReviewCard review={item} />
                </li>
            ))}
           </ul>
          
        </div>
        </>
    )
}