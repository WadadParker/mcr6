import styles from "./home.module.css"

import {useContext} from 'react';

import {HotelContext} from "../../context/HotelContext"
import {CuisineCard} from "../../components/cuisineCard/CuisineCard";

export const Home=()=>
{
    const {state,dispatch,sortByCuisine}=useContext(HotelContext);

    return (
        <div>
            <h1 className={styles.heading}>Food Ordering App</h1>
            <h2>Select Your Cuisine</h2>
            <main>
                <button className={styles.button} onClick={()=>dispatch({type:"SELECT_CUISINE",payload:1})}>Italian</button>
                <button className={styles.button} onClick={()=>dispatch({type:"SELECT_CUISINE",payload:2})}>Mexican</button>
                <button className={styles.button} onClick={()=>dispatch({type:"SELECT_CUISINE",payload:3})}>Chinese</button>
                <button className={styles.button} onClick={()=>dispatch({type:"SELECT_CUISINE",payload:4})}>Indian</button>
            </main>
            {sortByCuisine().map(item=>(
                <CuisineCard hotel={item} />
            ))}
        </div>
    )
}