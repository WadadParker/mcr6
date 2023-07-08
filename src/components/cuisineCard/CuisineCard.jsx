import styles from "./cuisineCard.module.css";
import { useNavigate } from "react-router-dom";

export const CuisineCard=({hotel})=>
{
    const navigate=useNavigate();
    return (
        <div className={styles[`dish-container`]}>
            <h2 className={styles.heading}>Dishes by {hotel?.name}</h2>
            <ul className={styles[`dish-list-container`]}>
                {hotel?.menu.map((dish,index)=>
                {
                    const {name,imgSrc,price,qty}=dish;
                    return (
                    <li key={index} className={styles[`dish-list-item-container`]} onClick={()=>navigate(`/review/${hotel?.id}`)}>
                        <img className={styles.img} src={imgSrc} alt="dish image" width={200} height={200} />
                        <main className={styles.description}>
                        <strong>{name}</strong>
                        <small>Rs. {price} for {qty}</small>
                        <small>{hotel?.name}</small>
                        </main>
                    </li>
                )})}
            </ul>
        </div>
    )
}