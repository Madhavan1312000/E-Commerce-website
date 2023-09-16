import { useParams } from "react-router";
import style from "./css/home.module.css"
import 'react-multi-carousel/lib/styles.css';
import { useEffect, useState } from "react";
import axios from "axios";

const Home=()=>{

    let {index1}=useParams()

    let[name,setName]=useState("")

    useEffect(()=>{
        axios.get(`http://localhost:3000/users/${index1}`)
        .then((r)=>{
            setName(r.data.name)
        })
        .catch(()=>{
            console.log("NOT FOUND")
        })
    },[index1])
    
    return(
        <div>
            <div id={style.maindiv1}>
                <div id={style.d1}>
                  <h1>MEN'S FASHION</h1><br />
                  <h2>Welcome {name}</h2>
                </div>
            </div>
        </div>
    )
}
export default Home