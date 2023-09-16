import style from "../component/css2/tshirt.module.css"
import { Link } from "react-router-dom"
import { useState,useEffect } from "react"
import axios from "axios"

const Tshirts=()=>{
    let[datas,setDatas]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000/tshirts")
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
                            <Link to={`/productcomponent/${x.id}`}>View</Link></div>
                        </div>
                    )

                })}
                </div>
            </div>
        </div>
    )
}
export default Tshirts