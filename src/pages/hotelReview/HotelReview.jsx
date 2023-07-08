import styles from "./hotelReview.module.css";
import buttonStyle from "../home/home.module.css";

import {useContext} from 'react';
import {useParams, useNavigate} from "react-router-dom"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import {HotelContext} from "../../context/HotelContext";
import { ReviewCard } from "../../components/reviewCard/ReviewCard";

export const HotelReview=()=>
{
    const {state,dispatch,sortByCuisine}=useContext(HotelContext);
    const {hotelList}=state;
    const {hotelID}=useParams();
    const navigate=useNavigate();

    const hotel=[...hotelList].find(({id})=>id===Number(hotelID))

    return (
        <div className={styles[`hotel-review-container`]}>
            <nav className={styles.nav}>
            <FontAwesomeIcon icon={faArrowLeft} className={styles.icon} onClick={()=>navigate("/")}/>
            </nav>
            <h1 className={styles.heading}>{hotel?.name}</h1>
            <header className={styles.description}>
                <small>{hotel?.menu.map((item,index)=>index+1===hotel.menu.length?`${item.name}`:`${item.name}, `)}</small>
                <small>{hotel?.address}</small>
                <small>Average Rating: {hotel?.averageRating}</small>
            </header>
            <button className={buttonStyle.button}>Add Review</button>
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
    )
}