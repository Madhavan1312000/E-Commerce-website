import style from "./css2/quantity.module.css"

import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"

const Quantity=()=>{

    let {index1}=useParams()

    let navigate=useNavigate()

let[name,setName]=useState("")
let[price,setPrice]=useState("")
let[totalprice,setTotalprice]=useState("")
let[count,setCount]=useState("")
let[image,setImage]=useState("")
let[index,setIndex]=useState("")
let[sectionname,setSectionname]=useState("")

useEffect(()=>{
    axios.get(`http://localhost:3000/cart/${index1}`)
    .then((r)=>{
        setName(r.data.name)
        setPrice(r.data.price)
        setTotalprice(r.data.totalprice)
        setCount(r.data.count)
        setImage(r.data.image)
        setIndex(r.data.index)
        setSectionname(r.data.sectionname)
    })
    .catch(()=>{
        console.log("No Datas Found")
    })
},[index1])



let incre=()=>{
    setCount(count+1)
}
let decre=()=>{
    setCount(count-1)
}

let calculatetotalprice=()=>{
    let a=parseInt(count)
    let b=parseInt(price)
    setTotalprice(a*b)
}
let completequantity=()=>{
    let values={name,price,totalprice,image,count,index,sectionname}
    axios.put(`http://localhost:3000/cart/${index1}`,values)
    navigate(`/cart/:itemname/${index1}`)
}

    return(
        <div>

<div id={style.maindiv3}>
           <div id={style.m1}>
            <div><input type="text" value={count}/></div>
            <div><button onClick={incre} className={style.btn1}>+</button><button onClick={decre}className={style.btn1}>-</button></div> 
            <div><button onClick={calculatetotalprice} id={style.btn2}>Complete</button></div>
            <div><button onClick={completequantity} id={style.btn3}>Exit</button></div>
           </div>
           </div>
        </div>
    )
}
export default Quantity