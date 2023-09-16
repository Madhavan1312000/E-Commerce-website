// import style from "./css/hoodies.module.css"
import style from "../component/css2/cap.module.css"
import { Link } from "react-router-dom"
import axios from "axios"
import { useState,useEffect } from "react"

const Hoodies=()=>{

    let[datas,setDatas]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000/hoodies")
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
                            <Link to={`/hoodiescomponent/${x.id}`}>View</Link></div>
                        </div>
                    )

                })}
                </div>
            </div>
        </div>
    )
}
export default Hoodies