import styles from "./reviewCard.module.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from "@fortawesome/free-regular-svg-icons";

export const ReviewCard=({review})=>
{
    const {rating,comment,revName,pp}=review;
    return (
        <div className={styles[`review-container`]}>
            <header className={styles[`review-head-container`]}>
                <main className={styles[`pfp-container`]}>
                    <img className={styles.pfp} src={pp} alt="pfp" width={30} height={30} />
                    <strong>{revName}</strong>
                </main>
                <span className={styles[`rating-container`]}><b className={styles.rating}>{rating}</b><FontAwesomeIcon icon={faStar} /></span>
            </header>
            <footer className={styles.comment}>
                <span >{comment}</span>
            </footer>
            <hr />
        </div>
    )
}