import { useEffect, useState } from "react"
// import style from "./css/cap.module.css"
import style from "./css2/cap.module.css"
import { Link } from "react-router-dom"
import axios from "axios"

const Caps=()=>{
    let[datas,setDatas]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000/caps")
        .then((r)=>{
            setDatas(r.data)
        })
    },[])

    return(
        <div>
            <div id={style.maindiv1}>
            <div id={style.d1}>
                {datas.map((x)=>{
                    return(
                        <div>
                            <div className={style.d21}><img src={x.image} alt="" /><h4 id={style.h1}>{x.name}</h4><h4 id={style.h2}>₹ {x.price}</h4>
                            <Link to={`/capscomponent/${x.id}`}>View</Link></div>
                        </div>
                    )

                })}
                </div>
            </div>
        // </div>
    )
}
export default Caps