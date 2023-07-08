import styles from "./hotelReview.module.css";

import {useContext} from 'react';
import {useParams} from "react-router-dom"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import {HotelContext} from "../../context/HotelContext"

export const HotelReview=()=>
{
    const {state,dispatch,sortByCuisine}=useContext(HotelContext);
    const {hotelID}=useParams();
    return (
        <div>
            <nav className={styles.nav}>
            <FontAwesomeIcon icon={faArrowLeft} />
            </nav>
            This is hotel review Page
        </div>
    )
}