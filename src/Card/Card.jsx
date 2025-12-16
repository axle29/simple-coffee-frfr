import styles from "./Card.module.css"
import { useState } from "react";
function Card(props){
    //-----------------available/not Handling----------//

    //-----------------Fav/Unfav Handling--------------//

    const [imgSrc, imgSrcSet] = useState("resources/Star.svg");

    const handleClick = () => {
        imgSrcSet(previous => previous === "resources/Star_fill.svg" ? "resources/Star.svg" : "resources/Star_fill.svg")
    }
    //------Conditional rendering of availability------//
    if(props.Mode == "AvOnly" && props.Available == false){
        return
    }
    //-------------------------------------------------//
    return(
        <>
        <div className={styles.cardContainer} >
            <div className={styles.img}style={{backgroundImage:`url(${props.Image})`,
                                                      backgroundSize: "cover",
                                                      backgroundPosition: "center",
                                                      backgroundRepeat: "no-repeat",}}>
                                                        <div className={styles.test} style={{display: props.Popular ? "block" : "none"}}><p>Popular</p></div>
                                                        </div>
            <div className={styles.words}>
                <div className={styles.idkman}><div className={styles.name}>{props.Name}</div>
                <div className={styles.price}>{props.Price}</div></div>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <div className={styles.rating}>
                        <img className={styles.imgStar} src={imgSrc} onClick={handleClick}></img>
                        {props.Rating}
                        <div className={styles.votes}>{props.Votes == 0 ? "No Reviews" : `(${props.Votes})`}</div>
                    </div>
                    <p style={{color: "#ED735D",display: props.Available ? "none" : "block",}}>Sold Out</p>
                </div>
            </div>

        </div>
        </>
    );
}

export default Card