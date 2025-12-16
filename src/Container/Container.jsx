import styles from "./Container.module.css"
import Card from "../Card/Card";
import { useState } from "react";
import { useEffect } from "react";

function Container(){
    const[mode, setMode] = useState("All")
//-----------------All/Available Handling--------------//
    const [btn1, setBtn1] = useState("#4D5562");
    const [btn2, setBtn2] = useState("transparent");

    const handleSelect = (id) => {
        if(id == "btn1"){
            setBtn1(prev => prev == "transparent" ? "#4D5562": prev)
            setBtn2(prev => prev == "#4D5562" ? "transparent": prev)
            setMode("All")
        }
        else if(id == "btn2"){
            setBtn2(prev => prev == "transparent" ? "#4D5562": prev)
            setBtn1(prev => prev == "#4D5562" ? "transparent": prev)
            setMode("AvOnly")
        }
        
    }
    console.log(mode)


//-----------------Data Fetch Function-----------------//
const [data, setData] = useState([])

useEffect(() => {
    const fetchData = async () => {
        try{
            const response = await fetch("https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json")
            if (!response.ok) throw new Error("Unable to fetch")
            const result = await response.json();
            setData(result)
        }
        catch(err){
            console.error(err)
        }
    }
    fetchData()
},[])
//-----------------Setting Array length------------//
    const steps = []
    for(let i = 0 ; i < data.length; i++){
        steps.push(i)

    }
//-----------------Handling Data Hopefully---------//

//-------------------------------------------------//

    return(
        <div className={styles.Container}>
            <div className={styles.noncards}>
                <div className={styles.title}>Our Collection</div>
                <div className={styles.description}>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</div>
                <div className={styles.btncontainer}>
                    <button className={styles.button} style={{backgroundColor: btn1}} onClick={() => handleSelect("btn1")}>All Products</button>
                    <button className={styles.button} style={{backgroundColor: btn2}} onClick={() => handleSelect("btn2")}>Available Now</button>
                </div>
            </div>
            <div className={styles.cards}>
                {steps.map(step => ( <Card key={data[step].id} 
                                           Name={data[step].name} 
                                           Image={data[step].image}
                                           Price={data[step].price}
                                           Votes={data[step].votes}
                                           Popular={data[step].popular}
                                           Rating={data[step].rating}
                                           Available={data[step].available}
                                           Mode={mode}/>))}
              
            </div>
        </div>
    );
}

export default Container