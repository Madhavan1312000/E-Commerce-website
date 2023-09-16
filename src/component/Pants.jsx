import style from "../component/css2/pant.module.css"
import { Link } from "react-router-dom"
import { useState,useEffect } from "react"
import axios from "axios"

const Pants=()=>{
    let[datas,setDatas]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000/pants")
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
                            <Link to={`/pantscomponent/${x.id}`}>View</Link></div>
                        </div>
                    )

                })}
                </div>
            </div>
        </div>
    )
}
export default Pants